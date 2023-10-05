const router = require('express').Router();
const PixelsController = require('../controllers/PixelsController')

router.get('/', (req, res) => PixelsController.getPixel(req, res))
router.post('/', (req, res) => PixelsController.createPixel(req, res))

module.exports = router;