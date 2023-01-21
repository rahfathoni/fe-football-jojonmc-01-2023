import { convertDate } from "@/utils";

export const getAllAreas = (state) => state.allAreas;

export const getTeamList = (state) => state.teamList;

export const getTeamDetail = (state) => state.teamDetail;

export const getTeamArea = (state) => state.teamArea;

export const getTeamProfile = (state) => {
  const detail = state.teamDetail;
  const area = state.teamArea;
  const lastUpdated = convertDate(detail.lastUpdated);

  return [
    { field: "Name", value: detail.name, isLink: false },
    { field: "Country", value: area.name, isLink: false },
    { field: "Founded", value: detail.founded, isLink: false },
    { field: "Address", value: detail.address, isLink: false },
    { field: "Website", value: detail.website, isLink: true },
    { field: "Color", value: detail.clubColors, isLink: false },
    { field: "Stadium", value: detail.venue, isLink: false },
    { field: "Last Updated", value: lastUpdated, isLink: false },
  ];
};

export const getTeamSquad = (state) => {
  const coach = state.teamDetail.coach;
  let squad = state.teamDetail.squad;
  if (state.teamDetail.coach) {
    const addCoach = {
      id: coach.id,
      name: `${coach.firstName || ""} ${coach.name || ""} ${
        coach.lastName || ""
      }`,
      position: "Coach",
      dateOfBirth: coach.dateOfBirth,
      nationality: coach.nationality,
    };
    squad.push(addCoach);
  }
  return squad;
};
