// const services = require("@/services/index").default;
const servicesMock = require("@/services/mock").default;

export const inquiryAllAreas = async ({ commit }) => {
  try {
    const res = await servicesMock.GetAllAreas();
    commit("setAllAreas", res.areas);
  } catch (err) {
    commit("setAllAreas", []);
  }
};

export const inquiryTeamList = async ({ commit }, payload) => {
  try {
    const res = await servicesMock.GetAreaTeams(payload);
    commit("setTeamList", res);
  } catch (err) {
    commit("setTeamList");
  }
};

export const inquiryTeamDetail = async ({ commit }, payload) => {
  try {
    const res = await servicesMock.GetTeamDetail(payload);
    commit("setTeamDetail", res);
  } catch (err) {
    commit("setTeamDetail");
  }
};
