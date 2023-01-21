import axios from "axios";

const base_url = "http://api.football-data.org";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "X-Auth-Token": "e71fb3252c4e40a2beb123fd3c5f8b7e",
  },
};

export default {
  GetAllAreas: async () => {
    try {
      // https://theaudiodb.com/api/v1/json/2/album.php?i=112024 // ini bisa digunakan
      const res = await axios.get(`${base_url}/v4/areas/`, config);
      console.log("RES GetAllAreas", res);
      return res;
    } catch (err) {
      console.error("ERR GetAllAreas", err);
      throw err;
    }
  },
  GetTeamDetail: async (payload) => {
    try {
      console.log("REQ GetTeamDetail ", payload);
      const res = await axios.get(
        `${base_url}/v4/teams/${payload.teamId}`,
        config
      );
      console.log("RES GetTeamDetail", res);
      return res;
    } catch (err) {
      console.error("ERR GetTeamDetail", err);
      throw err;
    }
  },
};
