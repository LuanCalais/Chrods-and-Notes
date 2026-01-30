import api from "./api";

const path = "/gemini";

const GeminiService = {
  GenerateResume: async () => {
    try {
      const res = await api.get(`${path}/generateResume`);
      return res;
    } catch (ex) {
      console.log(`Gemini connection error: ${ex}`);
      return null;
    }
  },
};

export default GeminiService;
