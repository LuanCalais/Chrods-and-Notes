import api from "./api";

const path = "/musics";

const MusicService = {
  createMusic: async (music) => {
    try {
      const res = await api.post(path, music);
      return res;
    } catch (err) {
      return err.response;
    }
  },

  editMusic: async (body, musicId) => {
    try {
      const res = await api.put(`${path}/${musicId}`, body);
      return res.data;
    } catch (err) {
      return err.response;
    }
  },

  deleteMusic: async (musicId) => {
    try {
      const res = await api.delete(`${path}/${musicId}`);
      return res;
    } catch (err) {
      return err.response;
    }
  },
};

export default MusicService;
