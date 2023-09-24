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
        BandModel.countDocuments({}).then((count) => {
          res.status(200).json({
            data: bands,
            count: count,
          });
        });
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

  static deleteBandById = async (req, res) => {
    const id = req.params.id;

    BandModel.deleteOne({ id: id })
      .then(() => {
        res.status(200).send({
          message: "The operation was a success :)",
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: `${err.message} We sorry, something wrong happend`,
        });
      });
  };

  static editBandById = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
      const updated = await BandModel.findByIdAndUpdate(
        id,
        { $set: body },
        { new: true }
      );
      res.status(200).send({
        message: `The operation was a success :), ${updated.name} has changed`,
      });
    } catch (err) {
      res.status(500).send({
        message: `${err.message} We sorry, something wrong happend`,
      });
    }
  };
}

export default BandController;
