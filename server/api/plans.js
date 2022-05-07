const router = require('express').Router()
const {Plan} = require('../db/models')
module.exports = router

// --------- routes for: api/plans -----------

// /api/plans
router.get('/plans', async (req, res, next) => {
  try {
    const plans = await Plan.findAll()
    res.json(plans)
  } catch (error) {
    next(error)
  }
})

// /api/plans
router.post('/plans', async (req, res, next) => {
  try {
    // req.body.price = req.body.price * 100
    const plan = await Plan.create(req.body)

    res.send(plan)
  } catch (error) {
    next(error)
  }
})

// /api/plans/:id
router.put('/plans/:id', async (req, res, next) => {
  try {
    const planId = req.params.id
    const plan = await Plan.findByPk(planId)
    // req.body.price = req.body.price * 100
    res.send(await plan.update(req.body))
  } catch (error) {
    next(error)
  }
})

// /api/plan/:id
router.delete('/plans/:id', async (req, res, next) => {
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
