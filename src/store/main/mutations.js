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
