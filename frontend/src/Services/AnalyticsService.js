import api from "./api";

const path = "/analytics";

const AnalyticsService = {
  getMusicCountByBand: async (userId) => {
    try {
      const res = await api.get(`${path}/musicByBand/${userId}`);
      return res.data;
    } catch (err) {
      return err.response;
    }
  },

  getGenderCountByBand: async (userId) => {
    try {
      const res = await api.get(`${path}/genderByBand/${userId}`);
      return res.data;
    } catch (err) {
      return err.response;
    }
  },
};

export default AnalyticsService;
