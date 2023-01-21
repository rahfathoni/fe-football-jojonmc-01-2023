// mock data mostly based on http://api.football-data.org

export default {
  GetAllAreas: () =>
    new Promise((resolve) => {
      const data = {
        count: 4,
        filters: {},
        areas: [
          {
            id: 2072,
            name: "England",
            countryCode: "ENG",
            flag: "https://crests.football-data.org/770.svg",
            parentAreaId: 2077,
            parentArea: "Europe",
          },
          {
            id: 2088,
            name: "Germany",
            countryCode: "DEU",
            flag: "https://crests.football-data.org/759.svg",
            parentAreaId: 2077,
            parentArea: "Europe",
          },
          {
            id: 2081,
            name: "France",
            countryCode: "FRA",
            flag: "https://crests.football-data.org/773.svg",
            parentAreaId: 2077,
            parentArea: "Europe",
          },
          {
            id: 2032,
            name: "Brazil",
            countryCode: "BRA",
            flag: "https://crests.football-data.org/764.svg",
            parentAreaId: 2220,
            parentArea: "South America",
          },
        ],
      };
      console.log("RES GetAllAreas ", data);
      resolve(data);
    }),
  GetAreaTeams: (payload) =>
    new Promise((resolve) => {
      console.log("REQ GetAreaTeams ", payload);
      const dataENG = {
        filters: {
          season: "2022",
        },
        competition: {
          id: 2021,
          name: "Premier League",
          code: "PL",
          country: "England",
          type: "LEAGUE",
          emblem: "https://crests.football-data.org/PL.png",
        },
        season: {
          id: 1490,
          startDate: "2022-08-05",
          endDate: "2023-05-28",
          currentMatchday: 21,
          winner: null,
        },
        teams: [
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 57,
            name: "Arsenal FC",
            shortName: "Arsenal",
            tla: "ARS",
            crest: "https://crests.football-data.org/57.png",
            address: "75 Drayton Park London N5 1BU",
            website: "http://www.arsenal.com",
            founded: 1886,
            clubColors: "Red / White",
            venue: "Emirates Stadium",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 58,
            name: "Aston Villa FC",
            shortName: "Aston Villa",
            tla: "AVL",
            crest: "https://crests.football-data.org/58.png",
            address: "Villa Park Birmingham B6 6HE",
            website: "http://www.avfc.co.uk",
            founded: 1872,
            clubColors: "Claret / Sky Blue",
            venue: "Villa Park",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 61,
            name: "Chelsea FC",
            shortName: "Chelsea",
            tla: "CHE",
            crest: "https://crests.football-data.org/61.png",
            address: "Fulham Road London SW6 1HS",
            website: "http://www.chelseafc.com",
            founded: 1905,
            clubColors: "Royal Blue / White",
            venue: "Stamford Bridge",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 62,
            name: "Everton FC",
            shortName: "Everton",
            tla: "EVE",
            crest: "https://crests.football-data.org/62.png",
            address: "Goodison Park Liverpool L4 4EL",
            website: "http://www.evertonfc.com",
            founded: 1878,
            clubColors: "Blue / White",
            venue: "Goodison Park",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 63,
            name: "Fulham FC",
            shortName: "Fulham",
            tla: "FUL",
            crest: "https://crests.football-data.org/63.svg",
            address: "Craven Cottage, Stevenage Road London SW6 6HH",
            website: "http://www.fulhamfc.com",
            founded: 1879,
            clubColors: "White / Black",
            venue: "Craven Cottage",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 64,
            name: "Liverpool FC",
            shortName: "Liverpool",
            tla: "LIV",
            crest: "https://crests.football-data.org/64.png",
            address: "Anfield Road Liverpool L4 0TH",
            website: "http://www.liverpoolfc.tv",
            founded: 1892,
            clubColors: "Red / White",
            venue: "Anfield",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 65,
            name: "Manchester City FC",
            shortName: "Man City",
            tla: "MCI",
            crest: "https://crests.football-data.org/65.png",
            address: "SportCity Manchester M11 3FF",
            website: "https://www.mancity.com",
            founded: 1880,
            clubColors: "Sky Blue / White",
            venue: "Etihad Stadium",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 66,
            name: "Manchester United FC",
            shortName: "Man United",
            tla: "MUN",
            crest: "https://crests.football-data.org/66.png",
            address: "Sir Matt Busby Way Manchester M16 0RA",
            website: "http://www.manutd.com",
            founded: 1878,
            clubColors: "Red / White",
            venue: "Old Trafford",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 67,
            name: "Newcastle United FC",
            shortName: "Newcastle",
            tla: "NEW",
            crest: "https://crests.football-data.org/67.png",
            address: "Sports Direct Arena Newcastle upon Tyne NE1 4ST",
            website: "http://www.nufc.co.uk",
            founded: 1881,
            clubColors: "Black / White",
            venue: "St. James' Park",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 354,
            name: "Crystal Palace FC",
            shortName: "Crystal Palace",
            tla: "CRY",
            crest: "https://crests.football-data.org/354.png",
            address: "Whitehorse Lane London SE25 6PU",
            website: "http://www.cpfc.co.uk",
            founded: 1905,
            clubColors: "Red / Blue",
            venue: "Selhurst Park",
          },
          {
            area: {
              id: 2072,
              name: "England",
              code: "ENG",
              flag: "https://crests.football-data.org/770.svg",
            },
            id: 397,
            name: "Brighton & Hove Albion FC",
            shortName: "Brighton Hove",
            tla: "BHA",
            crest: "https://crests.football-data.org/397.svg",
            address: "44 North Road Brighton & Hove BN1 1YR",
            website: "http://www.seagulls.co.uk",
            founded: 1898,
            clubColors: "Blue / White",
            venue: "The American Express Community Stadium",
          },
        ],
      };
      const dataOther = {
        count: 18,
        filters: {
          season: "2022",
        },
        competition: {
          id: 2002,
          name: "Bundesliga",
          code: "BL1",
          country: "Germany",
          type: "LEAGUE",
          emblem: "https://crests.football-data.org/BL1.png",
        },
        season: {
          id: 1495,
          startDate: "2022-08-05",
          endDate: "2023-05-27",
          currentMatchday: 16,
          winner: null,
        },
        teams: [
          {
            area: {
              id: 2088,
              name: "Germany",
              code: "DEU",
              flag: "https://crests.football-data.org/759.svg",
            },
            id: 1,
            name: "1. FC Köln",
            shortName: "1. FC Köln",
            tla: "KOE",
            crest: "https://crests.football-data.org/1.png",
            address: "Franz-Kremer-Allee 1 Köln 50937",
            website: "http://www.fc-koeln.de",
            founded: 1948,
            clubColors: "Red / White",
            venue: "RheinEnergieSTADION",
          },
          {
            area: {
              id: 2088,
              name: "Germany",
              code: "DEU",
              flag: "https://crests.football-data.org/759.svg",
            },
            id: 2,
            name: "TSG 1899 Hoffenheim",
            shortName: "Hoffenheim",
            tla: "TSG",
            crest: "https://crests.football-data.org/2.png",
            address: "Horrenberger Straße 58 Zuzenhausen 74939",
            website: "http://www.achtzehn99.de",
            founded: 1921,
            clubColors: "Blue / White",
            venue: "PreZero Arena",
          },
          {
            area: {
              id: 2088,
              name: "Germany",
              code: "DEU",
              flag: "https://crests.football-data.org/759.svg",
            },
            id: 3,
            name: "Bayer 04 Leverkusen",
            shortName: "Leverkusen",
            tla: "B04",
            crest: "https://crests.football-data.org/3.png",
            address: "Bismarckstr. 122-124 Leverkusen 51373",
            website: "http://www.bayer04.de",
            founded: 1904,
            clubColors: "Red / White / Black",
            venue: "BayArena",
          },
          {
            area: {
              id: 2088,
              name: "Germany",
              code: "DEU",
              flag: "https://crests.football-data.org/759.svg",
            },
            id: 4,
            name: "Borussia Dortmund",
            shortName: "Dortmund",
            tla: "BVB",
            crest: "https://crests.football-data.org/4.png",
            address: "Rheinlanddamm 207-209 Dortmund 44137",
            website: "http://www.bvb.de",
            founded: 1909,
            clubColors: "Black / Yellow",
            venue: "Signal Iduna Park",
          },
          {
            area: {
              id: 2088,
              name: "Germany",
              code: "DEU",
              flag: "https://crests.football-data.org/759.svg",
            },
            id: 5,
            name: "FC Bayern München",
            shortName: "Bayern",
            tla: "FCB",
            crest: "https://crests.football-data.org/5.svg",
            address: "Säbenerstr. 51 München 81547",
            website: "http://www.fcbayern.de",
            founded: 1900,
            clubColors: "Red / White / Blue",
            venue: "Allianz Arena",
          },
        ],
      };

      let res = "";
      if (payload === "ENG") {
        res = dataENG;
      } else {
        res = dataOther;
      }
      console.log("RES GetAreaTeams ", res);
      resolve(res);
    }),
  GetTeamDetail: (payload) =>
    new Promise((resolve) => {
      console.log("REQ GetTeamDetail ", payload);
      const dataENG = {
        area: {
          id: 2072,
          name: "England",
          code: "ENG",
          flag: "https://crests.football-data.org/770.svg",
        },
        id: 57,
        name: "Arsenal FC",
        shortName: "Arsenal",
        tla: "ARS",
        crest: "https://crests.football-data.org/57.png",
        address: "75 Drayton Park London N5 1BU",
        website: "http://www.arsenal.com",
        founded: 1886,
        clubColors: "Red / White",
        venue: "Emirates Stadium",
        runningCompetitions: [
          {
            id: 2021,
            name: "Premier League",
            code: "PL",
            type: "LEAGUE",
            emblem: "https://crests.football-data.org/PL.png",
          },
          {
            id: 2139,
            name: "Football League Cup",
            code: "FLC",
            type: "CUP",
            emblem: "https://crests.football-data.org/FLC.png",
          },
          {
            id: 2146,
            name: "UEFA Europa League",
            code: "EL",
            type: "CUP",
            emblem: "https://crests.football-data.org/EL.png",
          },
          {
            id: 2055,
            name: "FA Cup",
            code: "FAC",
            type: "CUP",
            emblem: "https://crests.football-data.org/FA_CUP.png",
          },
        ],
        coach: {
          id: 11619,
          firstName: "Mikel",
          lastName: null,
          name: "Arteta",
          dateOfBirth: "1982-03-26",
          nationality: "Spain",
          contract: {
            start: null,
            until: null,
          },
        },
        squad: [
          {
            id: 5530,
            name: "Aaron Ramsdale",
            position: "Goalkeeper",
            dateOfBirth: "1998-05-14",
            nationality: "England",
          },
          {
            id: 76936,
            name: "Matt Turner",
            position: "Goalkeeper",
            dateOfBirth: "1994-06-24",
            nationality: "United States",
          },
          {
            id: 3244,
            name: "Cédric",
            position: "Defence",
            dateOfBirth: "1991-08-31",
            nationality: "Portugal",
          },
          {
            id: 6154,
            name: "Ben White",
            position: "Defence",
            dateOfBirth: "1997-10-08",
            nationality: "England",
          },
          {
            id: 7784,
            name: "Rob Holding",
            position: "Defence",
            dateOfBirth: "1995-09-20",
            nationality: "England",
          },
          {
            id: 7889,
            name: "Oleksandr Zinchenko",
            position: "Defence",
            dateOfBirth: "1996-12-15",
            nationality: "Ukraine",
          },
          {
            id: 9034,
            name: "Takehiro Tomiyasu",
            position: "Defence",
            dateOfBirth: "1998-11-05",
            nationality: "Japan",
          },
          {
            id: 15615,
            name: "Kieran Tierney",
            position: "Defence",
            dateOfBirth: "1997-06-05",
            nationality: "Scotland",
          },
          {
            id: 23128,
            name: "Gabriel",
            position: "Defence",
            dateOfBirth: "1997-12-19",
            nationality: "Brazil",
          },
          {
            id: 80171,
            name: "William Saliba",
            position: "Defence",
            dateOfBirth: "2001-03-24",
            nationality: "France",
          },
          {
            id: 110,
            name: "Thomas Partey",
            position: "Midfield",
            dateOfBirth: "1993-06-13",
            nationality: "Ghana",
          },
          {
            id: 3477,
            name: "Granit Xhaka",
            position: "Midfield",
            dateOfBirth: "1992-09-27",
            nationality: "Switzerland",
          },
          {
            id: 3755,
            name: "Mohamed El Neny",
            position: "Midfield",
            dateOfBirth: "1992-07-11",
            nationality: "Egypt",
          },
          {
            id: 7427,
            name: "Martin Ødegaard",
            position: "Midfield",
            dateOfBirth: "1998-12-17",
            nationality: "Norway",
          },
          {
            id: 8862,
            name: "Albert Sambi Lokonga",
            position: "Midfield",
            dateOfBirth: "1999-10-22",
            nationality: "Belgium",
          },
          {
            id: 85570,
            name: "Emile Smith Rowe",
            position: "Midfield",
            dateOfBirth: "2000-07-28",
            nationality: "England",
          },
          {
            id: 112948,
            name: "Fabio Vieira",
            position: "Midfield",
            dateOfBirth: "2000-05-30",
            nationality: "Portugal",
          },
          {
            id: 169277,
            name: "Marquinhos",
            position: "Midfield",
            dateOfBirth: "2003-04-07",
            nationality: "Brazil",
          },
          {
            id: 3236,
            name: "Gabriel Jesus",
            position: "Offence",
            dateOfBirth: "1997-04-03",
            nationality: "Brazil",
          },
          {
            id: 7799,
            name: "Reiss Nelson",
            position: "Offence",
            dateOfBirth: "1999-12-10",
            nationality: "England",
          },
          {
            id: 7800,
            name: "Eddie Nketiah",
            position: "Offence",
            dateOfBirth: "1999-05-30",
            nationality: "England",
          },
          {
            id: 61450,
            name: "Martinelli",
            position: "Offence",
            dateOfBirth: "2001-06-18",
            nationality: "Brazil",
          },
          {
            id: 99813,
            name: "Bukayo Saka",
            position: "Offence",
            dateOfBirth: "2001-09-05",
            nationality: "England",
          },
        ],
        staff: [],
        lastUpdated: "2022-02-10T19:48:56Z",
      };

      const dataOther = {
        area: {
          id: 2088,
          name: "Germany",
          code: "DEU",
          flag: "https://crests.football-data.org/759.svg",
        },
        id: 4,
        name: "Borussia Dortmund",
        shortName: "Dortmund",
        tla: "BVB",
        crest: "https://crests.football-data.org/4.png",
        address: "Rheinlanddamm 207-209 Dortmund 44137",
        website: "http://www.bvb.de",
        founded: 1909,
        clubColors: "Black / Yellow",
        venue: "Signal Iduna Park",
        runningCompetitions: [
          {
            id: 2011,
            name: "DFB-Pokal",
            code: "DFB",
            type: "CUP",
            emblem: "https://crests.football-data.org/DFB_CUP.png",
          },
          {
            id: 2001,
            name: "UEFA Champions League",
            code: "CL",
            type: "CUP",
            emblem: "https://crests.football-data.org/CL.png",
          },
          {
            id: 2002,
            name: "Bundesliga",
            code: "BL1",
            type: "LEAGUE",
            emblem: "https://crests.football-data.org/BL1.png",
          },
        ],
        coach: {
          id: 111241,
          firstName: "Edin",
          lastName: null,
          name: "Edin Terzić",
          dateOfBirth: "1982-10-30",
          nationality: "Croatia",
          contract: {
            start: null,
            until: null,
          },
        },
        squad: [
          {
            id: 334,
            name: "Gregor Kobel",
            position: "Goalkeeper",
            dateOfBirth: "1997-12-06",
            nationality: "Switzerland",
          },
          {
            id: 9389,
            name: "Alexander Meyer",
            position: "Goalkeeper",
            dateOfBirth: "1991-04-13",
            nationality: "Germany",
          },
          {
            id: 111021,
            name: "Luca Unbehaun",
            position: "Goalkeeper",
            dateOfBirth: "2001-02-27",
            nationality: "Germany",
          },
          {
            id: 151077,
            name: "Marcel Lotka",
            position: "Goalkeeper",
            dateOfBirth: "2001-05-25",
            nationality: "Poland",
          },
          {
            id: 312,
            name: "Nico Schulz",
            position: "Defence",
            dateOfBirth: "1993-04-01",
            nationality: "Germany",
          },
          {
            id: 350,
            name: "Mats Hummels",
            position: "Defence",
            dateOfBirth: "1988-12-16",
            nationality: "Germany",
          },
          {
            id: 351,
            name: "Niklas Süle",
            position: "Defence",
            dateOfBirth: "1995-09-03",
            nationality: "Germany",
          },
          {
            id: 401,
            name: "Felix Passlack",
            position: "Defence",
            dateOfBirth: "1998-05-29",
            nationality: "Germany",
          },
          {
            id: 3246,
            name: "Raphaël Guerreiro",
            position: "Defence",
            dateOfBirth: "1993-12-22",
            nationality: "Portugal",
          },
          {
            id: 3650,
            name: "Thomas Meunier",
            position: "Defence",
            dateOfBirth: "1991-09-12",
            nationality: "Belgium",
          },
          {
            id: 6714,
            name: "Marius Wolf",
            position: "Defence",
            dateOfBirth: "1995-05-27",
            nationality: "Germany",
          },
          {
            id: 58521,
            name: "Antonios Papadopoulos",
            position: "Defence",
            dateOfBirth: "1999-09-10",
            nationality: "Germany",
          },
          {
            id: 75539,
            name: "Nico Schlotterbeck",
            position: "Defence",
            dateOfBirth: "1999-12-01",
            nationality: "Germany",
          },
          {
            id: 120984,
            name: "Mateu Morey",
            position: "Defence",
            dateOfBirth: "2000-03-02",
            nationality: "Spain",
          },
          {
            id: 170075,
            name: "Soumaïla Coulibaly",
            position: "Defence",
            dateOfBirth: "2003-10-14",
            nationality: "France",
          },
          {
            id: 171757,
            name: "Tom Rothe",
            position: "Defence",
            dateOfBirth: "2004-10-29",
            nationality: "Germany",
          },
          {
            id: 138,
            name: "Marco Reus",
            position: "Midfield",
            dateOfBirth: "1989-05-31",
            nationality: "Germany",
          },
          {
            id: 158,
            name: "Mahmoud Dahoud",
            position: "Midfield",
            dateOfBirth: "1996-01-01",
            nationality: "Germany",
          },
          {
            id: 201,
            name: "Salih Özcan",
            position: "Midfield",
            dateOfBirth: "1998-01-11",
            nationality: "Turkey",
          },
          {
            id: 3183,
            name: "Emre Can",
            position: "Midfield",
            dateOfBirth: "1994-01-12",
            nationality: "Germany",
          },
          {
            id: 3655,
            name: "Thorgan Hazard",
            position: "Midfield",
            dateOfBirth: "1993-03-29",
            nationality: "Belgium",
          },
          {
            id: 125010,
            name: "Jude Bellingham",
            position: "Midfield",
            dateOfBirth: "2003-06-29",
            nationality: "England",
          },
          {
            id: 161415,
            name: "Abdoulaye Kamara",
            position: "Midfield",
            dateOfBirth: "2004-11-06",
            nationality: "Guinea",
          },
          {
            id: 171856,
            name: "Goktan Gurpuz",
            position: "Midfield",
            dateOfBirth: "2003-01-22",
            nationality: "Germany",
          },
          {
            id: 179460,
            name: "Jamie Bynoe-Gittens",
            position: "Midfield",
            dateOfBirth: "2004-08-08",
            nationality: "England",
          },
          {
            id: 148,
            name: "Julian Brandt",
            position: "Offence",
            dateOfBirth: "1996-05-02",
            nationality: "Germany",
          },
          {
            id: 6721,
            name: "Sébastien Haller",
            position: "Offence",
            dateOfBirth: "1994-06-22",
            nationality: "Cote d'Ivoire",
          },
          {
            id: 7457,
            name: "Donyell Malen",
            position: "Offence",
            dateOfBirth: "1999-01-19",
            nationality: "Netherlands",
          },
          {
            id: 21528,
            name: "Anthony Modeste",
            position: "Offence",
            dateOfBirth: "1988-04-14",
            nationality: "France",
          },
          {
            id: 82515,
            name: "Karim Adeyemi",
            position: "Offence",
            dateOfBirth: "2002-01-18",
            nationality: "Germany",
          },
          {
            id: 136733,
            name: "Gio Reyna",
            position: "Offence",
            dateOfBirth: "2002-11-13",
            nationality: "United States",
          },
          {
            id: 150817,
            name: "Youssoufa Moukoko",
            position: "Offence",
            dateOfBirth: "2004-11-20",
            nationality: "Germany",
          },
        ],
        staff: [],
        lastUpdated: "2022-02-25T16:50:16Z",
      };

      let res = "";
      if (payload.country === "ENG") {
        res = dataENG;
      } else {
        res = dataOther;
      }

      console.log("RES GetTeamDetail ", res);
      resolve(res);
    }),
  GetSquadDetail: (payload) =>
    new Promise((resolve) => {
      console.log("REQ GetSquadDetail ", payload);
      const dataENG = {
        id: 99813,
        name: "Bukayo Saka",
        firstName: "Bukayo",
        lastName: null,
        dateOfBirth: "2001-09-05",
        nationality: "England",
        position: "Right Midfield",
        shirtNumber: 7,
        lastUpdated: "2020-09-07T20:49:31Z",
        currentTeam: {
          id: 57,
          name: "Arsenal FC",
          shortName: "Arsenal",
          tla: "ARS",
          crest: "https://crests.football-data.org/57.png",
          address: "75 Drayton Park London N5 1BU",
          website: "http://www.arsenal.com",
          founded: 1886,
          clubColors: "Red / White",
          venue: "Emirates Stadium",
          contract: {
            start: "2019-07",
            until: "2024-06",
          },
        },
      };
      const dataOther = {
        id: 138,
        name: "Marco Reus",
        firstName: "Marco",
        lastName: null,
        dateOfBirth: "1989-05-31",
        nationality: "Germany",
        position: "Attacking Midfield",
        shirtNumber: 11,
        lastUpdated: "2021-01-20T15:20:07Z",
        currentTeam: {
          id: 4,
          name: "Borussia Dortmund",
          shortName: "Dortmund",
          tla: "BVB",
          crest: "https://crests.football-data.org/4.png",
          address: "Rheinlanddamm 207-209 Dortmund 44137",
          website: "http://www.bvb.de",
          founded: 1909,
          clubColors: "Black / Yellow",
          venue: "Signal Iduna Park",
          contract: {
            start: "2012-07",
            until: "2023-06",
          },
        },
      };

      let res = "";
      if (payload.country === "ENG") {
        res = dataENG;
      } else {
        res = dataOther;
      }
      console.log("RES GetSquadDetail ", res);
      resolve(res);
    }),
};
