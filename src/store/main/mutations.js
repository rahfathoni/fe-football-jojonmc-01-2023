export const setAllAreas = (state, value) => {
  state.allAreas = value;
};

export const setTeamList = (state, value) => {
  if (!value) {
    state.teamLists = {
      area: "",
      list: [],
    };
    return;
  }
  state.teamLists = {
    area: value.competition.country,
    list: value.teams,
  };
};
