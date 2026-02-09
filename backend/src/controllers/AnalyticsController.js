import mongoose from "mongoose";
import MusicModel from "../models/MusicModel.js";

class AnalyticsController {
  static getMusicCountByBand = async (req, res) => {
    try {
      const userId = req.params.id;
      const musicsByBand = await MusicModel.aggregate([
        {
          $match: {
            userId: new mongoose.Types.ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: "bands",
            localField: "artist",
            foreignField: "_id",
            as: "bandInfo",
          },
        },
        {
          $unwind: {
            path: "$bandInfo",
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $group: {
            _id: "$bandInfo._id",
            bandName: { $first: "$bandInfo.name" },
            bandColor: { $first: "$bandInfo.color" },
            musicCount: { $sum: 1 },
            musics: { $push: "$name" },
          },
        },
        {
          $sort: {
            musicCount: -1,
          },
        },
        {
          $project: {
            _id: 0,
            bandId: {
              $toString: "$_id",
            },
            bandName: 1,
            bandColor: 1,
            musicCount: 1,
            musics: 1,
          },
        },
      ]);
      res.status(200).json({
        success: true,
        data: musicsByBand,
        count: musicsByBand.length,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
        stack: error.stack,
      });
    }
  };
}

export default AnalyticsController;
