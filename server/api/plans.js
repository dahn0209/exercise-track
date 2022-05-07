const router = require('express').Router()
const {User, Plan} = require('../db/models')
module.exports = router

// --------- routes for: api/plans -----------

// /api/plans
router.get('/', async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    // console.log('this is UserId=>', userId)

    const plans = await Plan.findAll({where: {userId: userId}})
    // console.log('allthe Plains=>', plans)
    res.json(plans)
  } catch (error) {
    next(error)
  }
})

// /api/plans
router.post('/', async (req, res, next) => {
  try {
    const currentUser = await User.findByPk(req.session.passport.user)
    const plan = await Plan.create(req.body)
    await plan.setUser(currentUser)
    res.send(plan)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    //////use getPlans magicMethod
    const plan = await Plan.findByPk(req.params.planId)

    if (plan) {
      res.json(plan)
    } else {
      res.status(404).send('plan not found')
    }
  } catch (err) {
    next(err)
  }
})

// /api/plans/:id
router.put('/:id', async (req, res, next) => {
  try {
    const planId = req.params.id
    const plan = await Plan.findByPk(planId)
    const editThisPlan = await plan.update(req.body)
    console.log('editThisPlan==>', editThisPlan)
    res.send(editThisPlan)
  } catch (error) {
    next(error)
  }
})

// /api/plan/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const planId = req.params.id
    const plan = await Plan.findByPk(planId)

    if (!plan) {
      res.sendStatus(404)
    }
    await plan.destroy()
    res.send(plan)
  } catch (error) {
    next(error)
  }
})
