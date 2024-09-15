import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const OpenaiService = {
  GenerateResume: async () => {
    try {
      const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Oie hihi vc me ama?" },
          { role: "user", content: "Oie hihi vc me ama?" },
        ],
      });

      return res;
    } catch (ex) {
      console.log(`OpenAI connection error: ${ex}`);
      return null;
    }
  },
};

export default OpenaiService;
