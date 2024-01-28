import axios from "axios";

const path = "/bands";

const BandService = {
  createBand: async (band) => {
    try {
      const res = await axios.post(`http://localhost:3001${path}`, band);
      return res;
    } catch (err) {
      return err.response;
    }
  },
};

export default BandService
