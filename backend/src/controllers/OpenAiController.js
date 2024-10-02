import OpenAI from "openai";
import "dotenv/config";
const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
  dangerouslyAllowBrowser: true,
});

class OpenAiController {
  static GenerateResume = async (req, res) => {
    try {
      const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Oie hihi vc me ama?" },
          { role: "user", content: "Oie hihi vc me ama?" },
        ],
      });

      res.status(200)(res);
    } catch (err) {
      res.status(500).send({
        message: `${err.message} We sorry, something wrong happend`,
      });
    }
  };
}

export default OpenAiController;
