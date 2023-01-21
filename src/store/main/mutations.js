export const resetAll = (state) => {
  state.allAreas = [];
  state.teamList = {
    area: "",
    list: [],
  };
  state.teamDetail = "";
  state.teamArea = "";
  state.squadDetail = "";
};

export const setAllAreas = (state, value) => {
  state.allAreas = value;
};

export const setTeamList = (state, value) => {
  if (!value) {
    state.teamList = {
      area: "",
      list: [],
    };
    return;
  }
  state.teamList = {
    area: value.competition.country,
    list: value.teams,
  };
};

export const setTeamDetail = (state, value) => {
  if (!value) {
    state.teamDetail = "";
    state.teamArea = "";
    return;
  }
  state.teamDetail = value;
  state.teamArea = value.area;
};

export const setSquadDetail = (state, value) => {
  if (!value) {
    state.squadDetail = "";
    return;
  }
  state.squadDetail = value;
};
