import api from "./api";

const path = "/bands";

const BandService = {
  getBandByUserId: async (userId) => {
    try {
      const res = await api.get(`${path}/user/${userId}`);
      return res.data;
    } catch (err) {
      return err.response;
    }
  },

  createBand: async (band) => {
    try {
      const res = await api.post(path, band);
      return res;
    } catch (err) {
      return err.response;
    }
  },

  editBand: async (body, bandId) => {
    try {
      const res = await api.put(`${path}/${bandId}`, body);
      return res.data;
    } catch (err) {
      return err.response;
    }
  },

  deleteBand: async (bandId) => {
    try {
      const res = await api.delete(`${path}/${bandId}`);
      return res;
    } catch (err) {
      return err.response;
    }
  },
};

export default BandService;
