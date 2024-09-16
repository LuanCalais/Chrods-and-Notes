import BandModel from "../models/BandModel.js";
import { verifyObject } from "../utils/index.js";

class BandController {
  static createBand = async (req, res) => {
    const incommingBand = JSON.parse(req.body.band);

    try {
      incommingBand.createdAt = new Date();
      incommingBand.updatedAt = new Date();
      incommingBand.name = incommingBand.name.toLowerCase();

      if (verifyObject(incommingBand)) {
        let band = new BandModel(incommingBand);

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
      .populate("user")
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

  static getBandByUserId = async (req, res) => {
    const id = req.params.id;

    BandModel.find({})
      .populate({
        path: "user",
        match: { id: id },
      })
      .then((bands) => {
        const bandsFiltered = bands.filter((band) => band.user !== null);

        res.status(200).json({
          data: bandsFiltered,
          count: bandsFiltered.length,
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
    const incommingBand = JSON.parse(req.body.band);

    const id = req.params.id;

    try {
      const updated = await BandModel.findByIdAndUpdate(id, {
        $set: incommingBand,
      });
      res.send({
        message: `The operation was a success :), ${updated?.name} has changed`,
        status: 200,
      });
      return;
    } catch (err) {
      res.status(500).send({
        message: err.message
          ? `${err.message} We sorry, something wrong happend`
          : "We sorry, something wrong happend",
      });
    }
  };

  static generateBandResume = async (req, res) => {};
}

export default BandController;
