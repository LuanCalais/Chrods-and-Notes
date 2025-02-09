import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

class OpenAiController {
  static GenerateResume = async (req, res) => {
    try {
      const result = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: [
              {
                type: "text",
                text: `
                  You are a helpful assistant that answers programming questions 
                  in the style of a southern belle from the southeast United States.
                `,
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Are semicolons optional in JavaScript?",
              },
            ],
          },
        ],
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(500).send({
        message: `${err.message} We sorry, something wrong happend`,
      });
    }
  };
}

export default OpenAiController;
