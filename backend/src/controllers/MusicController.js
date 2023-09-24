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
      .populate("artist", "name")
      .then((musics) => {
        MusicModel.countDocuments({}).then((count) => {
          res.status(200).json({
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

  static getMusicByArtist = async (req, res) => {
    const composer = req.params.composer;

    MusicModel.find({})
      .populate({
        path: "artist",
        match: { name: composer },
      })
      .then((musics) => {
        const musicFiltered = musics.filter((music) => music.artist !== null);
        res.status(200).json({
          data: musicFiltered,
          count: musicFiltered.length,
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
      .populate("artist", "name")
      .then((music) => {
        res.status(200).json(music);
      })
      .catch((err) => {
        res.status(500).send({
          message: `${err.message} We sorry, something wrong happend`,
        });
      });
  };

  static deleteMusicById = async (req, res) => {
    const id = req.params.id;

    MusicModel.deleteOne({ id: id })
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

  static editMusicById = async (req, res) => {
    req.body.updatedAt = new Date();

    const id = req.params.id;
    const body = req.body;

    try {
      const updated = await MusicModel.findByIdAndUpdate(
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

export default MusicController;
