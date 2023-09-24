import MusicModel from "../models/MusicModel.js";
import { verifyObject } from "../utils/index.js";

class MusicController {
  static creatMusic = async (req, res) => {
    try {
      req.body.createdAt = new Date();
      req.body.updatedAt = new Date();

      if (verifyObject(req.body)) {
        const music = new MusicModel(req.body);

        music.save().then((savedMusic) => {
          savedMusic.id = savedMusic._id.toString();
          return savedMusic.save();
        });

        res.status(200).json(music);
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

  static getMusics = async (req, res) => {
    MusicModel.find({})
      .then((musics) => {
        MusicModel.countDocuments({}).then((count) => {
          res.status(500).json({
            data: musics,
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

  static getMusicById = async (req, res) => {
    const id = req.params.id;
    MusicModel.findById(id)
      .then((music) => {
        res.status(200).json(music);
      })
      .catch((err) => {
        res.status(500).send({
          message: `${err.message} We sorry, something wrong happend`,
        });
      });
  };
}

export default MusicController;
