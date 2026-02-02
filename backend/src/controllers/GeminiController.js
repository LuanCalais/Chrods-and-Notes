import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  buildPromptBandResume,
  buildPromptMusicResume,
} from "../utils/index.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

class GeminiController {
  static generateBandResume = async (req, res) => {
    try {
      const { bandName } = req.query;

      if (!bandName || bandName.trim() === "") {
        return res.status(400).json({
          error: "Band name is required",
        });
      }

      const model = genAI.getGenerativeModel({
        model: process.env.GEMINI_API_VERSION,
      });

      const prompt = buildPromptBandResume(bandName);

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      return res.status(200).json({
        band: bandName,
        text: text,
        model: process.env.GEMINI_API_VERSION,
      });
    } catch (error) {
      console.error("Error generating text with Gemini:", error);
      if (error.status === 404) {
        return res.status(500).json({
          error: "Model not found or invalid API Key",
          details:
            "Check if your Google AI Studio API Key is correct and active",
          message: error.message,
        });
      }

      return res.status(500).json({
        error: "Error generating text with Gemini",
        details: error.message,
        status: error.status || 500,
      });
    }
  };

  static generateMusicResume = async (req, res) => {
    try {
      const { musicName, bandName } = req.query;
      const isMusicNameEmpty = !musicName || musicName.trim() === "";
      const isBandNameEmpty = !bandName || bandName.trim() === "";

      if (isMusicNameEmpty && isBandNameEmpty) {
        return res.status(400).json({
          error: "Music title is required",
        });
      }

      const model = genAI.getGenerativeModel({
        model: process.env.GEMINI_API_VERSION,
      });

      const prompt = buildPromptMusicResume(musicName, bandName);

      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      return res.status(200).json({
        music: musicName,
        band: bandName,
        text: text,
        model: process.env.GEMINI_API_VERSION,
      });
    } catch (error) {
      console.error("Error generating music resume with Gemini:", error);
      return res.status(500).json({
        error: "Error generating music resume with Gemini",
        details: error.message,
        status: error.status || 500,
      });
    }
  };
}

export default GeminiController;
