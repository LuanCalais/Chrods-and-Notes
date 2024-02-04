import axios from "axios";

const path = "/bands";

const BandService = {
  getBands: async (userId) => {
    try {
      const res = await axios.get(`http://localhost:3001${path}/${userId}`);
      return res.data;
    } catch (err) {
      return err.response;
    }
  },

  createBand: async (band) => {
    try {
      const res = await axios.post(`http://localhost:3001${path}`, band);
      return res;
    } catch (err) {
      return err.response;
    }
  },
};

export default BandService;
