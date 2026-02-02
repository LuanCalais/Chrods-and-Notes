import api from "./api";

const path = "/gemini";

const GeminiService = {
  GenerateMusicResume: async (musicName, bandName) => {
    try {
      const encodedMusicName = encodeURIComponent(musicName);
      const encodedBandName = encodeURIComponent(bandName);

      const res = await api.get(
        `${path}/generateMusicResume?musicName=${encodedMusicName}&bandName=${encodedBandName}`,
      );
      return res.data;
    } catch (ex) {
      console.log(`Gemini connection error: ${ex}`);
      return null;
    }
  },
};

export default GeminiService;
