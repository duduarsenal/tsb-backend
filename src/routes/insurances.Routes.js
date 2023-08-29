const router = require('express').Router();
const priceSelectors = require('../usecases/priceSelectors')

router.get('/', (req, res) => {
    const prices = priceSelectors();
    res.status(200).json(prices)
})

module.exports = router;