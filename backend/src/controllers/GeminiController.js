import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildPromptResume } from "../utils/index.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

class GeminiController {

  static generateResume = async (req, res) => {
    try {
      const { bandName } = req.query;

      if (!bandName || bandName.trim() === "") {
        return res.status(400).json({
          error: "Nome da banda é obrigatório",
        });
      }

      const model = genAI.getGenerativeModel({
        model: process.env.GEMINI_API_VERSION,
      });

      const prompt = buildPromptResume(bandName);

      const result = await model.generateContent(prompt);
      const response = result.response;
      const texto = response.text();

      return res.status(200).json({
        banda: bandName,
        texto: texto,
        modelo: process.env.GEMINI_API_VERSION,
      });
    } catch (error) {
      console.error("Erro ao gerar texto com Gemini:", error);
      if (error.status === 404) {
        return res.status(500).json({
          error: "Modelo não encontrado ou API Key inválida",
          details:
            "Verifique se sua API Key do Google AI Studio está correta e ativa",
          message: error.message,
        });
      }

      return res.status(500).json({
        error: "Erro ao gerar texto com Gemini",
        details: error.message,
        status: error.status || 500,
      });
    }
  };
}

export default GeminiController;