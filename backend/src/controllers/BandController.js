import BandModel from "../models/BandModel.js";
import { verifyObject } from "../utils/index.js";

class BandController {
  static createBand = async (req, res) => {
    try {
      req.body.createdAt = new Date();
      req.body.updatedAt = new Date();

      let band = new BandModel(req.body);

      band.save().then((savedBand) => {
        savedBand.id = savedBand._id.toString();
        return savedBand.save();
      });

      res.status(200).json(band);
      return;
    } catch (err) {
      res.status(500).send({
        message: `${err.message} We sorry, somthing wrong happend`,
      });
    }
  };
}

export default BandController;
