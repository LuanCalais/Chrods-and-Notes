import BandModel from "../models/BandModel.js";
import { verifyObject } from "../utils/index.js";

class BandController {
  static createBand = async (req, res) => {
    try {
      req.body.createdAt = new Date();
      req.body.updatedAt = new Date();

      if (verifyObject(req.body)) {
        let band = new BandModel(req.body);

        band.save().then((savedBand) => {
          savedBand.id = savedBand._id.toString();
          return savedBand.save();
        });

        res.status(200).json(band);
        return;
      }
      res.status(500).send({
        message: "We sorry, please insert all the required informations >:(",
      });
    } catch (err) {
      res.status(500).send({
        message: `${err.message} We sorry, something wrong happend`,
      });
    }
  };

  static getBands = async (req, res) => {
    BandModel.find({})
      .then((bands) => {
        res.status(200).json(bands);
      })
      .catch((err) => {
        res.status(500).send({  
          message: `${err.message} We sorry, something wrong happend`,
        });
      });
  };

  static getBandById = async (req, res) => {
    const id = req.params.id;
    BandModel.findById(id)
      .then((band) => {
        res.status(200).json(band);
      })
      .catch((err) => {
        res.status(500).send({
          message: `${err.message} We sorry, something wrong happend`,
        });
      });
  };
}

export default BandController;
