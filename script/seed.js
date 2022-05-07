'use strict'

const {db, User, Plan} = require('../server/db/models')
const users = require('./listOfUsers')
const plans = require('./listOfPlans')

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(
      plans.map(plan => {
        return Plan.create(plan)
      })
    )

    await Promise.all(
      users.map(user => {
        return User.create(user)
      })
    )

    console.log('seeding done!')
    // seed your database here!
  } catch (err) {
    console.log(err)
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!')
      db.close()
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    })
}
