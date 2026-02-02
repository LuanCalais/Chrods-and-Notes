import mongoose from "mongoose";
import MusicModel from "../models/MusicModel.js";
import BandController from "./BandController.js";

class MusicController {
  static createMusic = async (req, res) => {
    try {
      const { name, artist, color, userId } = req.body;

      if (!name || !artist || !color || !userId) {
        return res.status(400).json({
          message:
            "Please provide all required fields: name, artist, color, userId",
        });
      }

      if (!mongoose.Types.ObjectId.isValid(artist)) {
        return res.status(400).json({
          message: "Invalid artist ID",
        });
      }

      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({
          message: "Invalid user ID",
        });
      }

      const musicData = {
        name: name.toLowerCase().trim(),
        artist: artist,
        userId: userId,
        color: color,
        resume: req.body.resume || "",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const music = new MusicModel(musicData);
      const savedMusic = await music.save();
      savedMusic.id = savedMusic._id.toString();
      await savedMusic.save();

      const populatedMusic = await MusicModel.findById(savedMusic._id)
        .populate("artist", "name")
        .populate("userId", "name email");

      return res.status(201).json({
        message: "Music created successfully",
        data: populatedMusic,
      });
    } catch (err) {
      res.status(500).send({
        message: `${err.message} We sorry, something wrong happend`,
      });
    }
  };

  static getMusics = async (req, res) => {
    try {
      const musics = await MusicModel.find({});

      const count = await MusicModel.countDocuments({});

      res.status(200).json({
        data: musics,
        count: count,
      });
    } catch (err) {
      res.status(500).json({
        message: `${err.message} We sorry, something wrong happened`,
      });
    }
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
    req.body.name = req.body.name.toLowerCase();

    const id = req.params.id;
    const body = req.body;

    try {
      const updated = await MusicModel.findByIdAndUpdate(
        id,
        { $set: body },
        { new: true },
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

  static generateBandResume = async (req, res) => {};
}

export default MusicController;
