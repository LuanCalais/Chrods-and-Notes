import api from "./api";

const path = "/openAi";

const OpenaiService = {
  GenerateResume: async () => {
    try {
      const res = await api.get(`${path}/generateResume`);
      return res;
    } catch (ex) {
      console.log(`OpenAI connection error: ${ex}`);
      return null;
    }
  },
};

export default OpenaiService;
