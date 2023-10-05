const Haven = require('../models/pixelsModel');
// const pixels = require('../usecases/pixels.json')

class PixelsController{

    async getPixel(req, res){
        try {
            const pixels = await Haven.find({}).select("-__v -_id")
            res.send(pixels)
        } catch (error) {
            res.send(error)
        }
    }
    async createPixel(req, res){
        const pixels = req.body;
        try {
            await Haven.create({...pixels})
            res.send("works")
        } catch (error) {
            res.send(error)
        }
    }

}

module.exports = new PixelsController;