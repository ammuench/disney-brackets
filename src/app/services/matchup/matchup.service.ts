import { Injectable } from '@angular/core';

import { Match } from '../../interfaces/match';

@Injectable()
export class MatchupService {
  public matchProgression = {
    A1: 1,
    A2: 1,
    A3: 2,
    A4: 2,
    A5: 3,
    A6: 3,
    A7: 4,
    A8: 4,
    A9: 5,
    A10: 5,
    A11: 6,
    A12: 6,
    A13: 7,
    A14: 7,
    A15: 8,
    A16: 8,
    A17: 9,
    A18: 9,
    A19: 10,
    A20: 10,
    A21: 11,
    A22: 11,
    A23: 12,
    A24: 12,
    A25: 13,
    A26: 13,
    A27: 14,
    A28: 14,
    A29: 15,
    A30: 15,
    A31: 16,
    A32: 16,
    B1: 1,
    B2: 1,
    B3: 2,
    B4: 2,
    B5: 3,
    B6: 3,
    B7: 4,
    B8: 4,
    B9: 5,
    B10: 5,
    B11: 6,
    B12: 6,
    B13: 7,
    B14: 7,
    B15: 8,
    B16: 8,
    C1: 1,
    C2: 1,
    C3: 2,
    C4: 2,
    C5: 3,
    C6: 3,
    C7: 4,
    C8: 4,
    D1: 1,
    D2: 1,
    D3: 2,
    D4: 2,
    E1: 1,
    E2: 1
  };

  public teams = [
    { id: 0, seed: 1, name: "Moana" },
    { id: 1, seed: 2, name: "Frozen" },
    { id: 2, seed: 3, name: "Coco" },
    { id: 3, seed: 4, name: "The Lion King" },
    { id: 4, seed: 5, name: "Inside Out" },
    { id: 5, seed: 6, name: "Beauty and the Beast" },
    { id: 6, seed: 7, name: "Aladdin" },
    { id: 7, seed: 8, name: "Mulan" },
    { id: 8, seed: 9, name: "Toy Story 3" },
    { id: 9, seed: 10, name: "Toy Story 2" },
    { id: 10, seed: 11, name: "The Little Mermaid" },
    { id: 11, seed: 12, name: "Wall-E" },
    { id: 12, seed: 13, name: "Toy Story" },
    { id: 13, seed: 14, name: "Tangled" },
    { id: 14, seed: 15, name: "Hercules" },
    { id: 15, seed: 16, name: "Wreck-It Ralph" },
    { id: 16, seed: 17, name: "Enchanted" },
    { id: 17, seed: 18, name: "Up" },
    { id: 18, seed: 19, name: "Pocahontas" },
    { id: 19, seed: 20, name: "Finding Nemo" },
    { id: 20, seed: 21, name: "A Goofy Movie" },
    { id: 21, seed: 22, name: "Mary Poppins" },
    { id: 22, seed: 23, name: "Zootopia" },
    { id: 23, seed: 24, name: "The Emperor's New Groove" },
    { id: 24, seed: 25, name: "The Princess and the Frog" },
    { id: 25, seed: 26, name: "Lilo & Stitch" },
    { id: 26, seed: 27, name: "Snow White" },
    { id: 27, seed: 28, name: "Big Hero 6" },
    { id: 28, seed: 29, name: "Cars" },
    { id: 29, seed: 30, name: "Monster's Inc" },
    { id: 30, seed: 31, name: "The Jungle Book" },
    { id: 31, seed: 32, name: "Peter Pan" },
    { id: 32, seed: 33, name: "The Good Dinosaur" },
    { id: 33, seed: 34, name: "Ratatouille" },
    { id: 34, seed: 35, name: "Winnie the Pooh" },
    { id: 35, seed: 36, name: "A Bug's Life" },
    { id: 36, seed: 37, name: "Sleeping Beauty" },
    { id: 37, seed: 38, name: "Fantasia" },
    { id: 38, seed: 39, name: "Brave" },
    { id: 39, seed: 40, name: "One Hundred and One Dalmatians" },
    { id: 40, seed: 41, name: "Monsters University" },
    { id: 41, seed: 42, name: "Pete's Dragon" },
    { id: 42, seed: 43, name: "Pinocchio" },
    { id: 43, seed: 44, name: "Tarzan" },
    { id: 44, seed: 45, name: "Cinderella" },
    { id: 45, seed: 46, name: "Nightmare Before Christmas" },
    { id: 46, seed: 47, name: "DuckTales the Movie" },
    { id: 47, seed: 48, name: "Brother Bear" },
    { id: 48, seed: 49, name: "Oliver & Company" },
    { id: 49, seed: 50, name: "The Rescuers" },
    { id: 50, seed: 51, name: "The Aristocats" },
    { id: 51, seed: 52, name: "The Hunchback of Notre Dame" },
    { id: 52, seed: 53, name: "Lady and the Tramp" },
    { id: 53, seed: 54, name: "The Fox and the Hound" },
    { id: 54, seed: 55, name: "FrankenWeenie" },
    { id: 55, seed: 56, name: "Cars 3" },
    { id: 56, seed: 57, name: "The Black Cauldron" },
    { id: 57, seed: 58, name: "The Sword in the Stone" },
    { id: 58, seed: 59, name: "Robin Hood" },
    { id: 59, seed: 60, name: "Treasure Planet" },
    { id: 60, seed: 61, name: "Chicken Little" },
    { id: 61, seed: 62, name: "Alice in Wonderland" },
    { id: 62, seed: 63, name: "Atlantis: The Lost Empire" },
    { id: 63, seed: 64, name: "The Tigger Movie" },
  ];

  public matchesA: Match[] = [
    {
      id: 'A1',
      team1: this.teams[0],
      team2: this.teams[63]
    },
    {
      id: 'A2',
      team1: this.teams[31],
      team2: this.teams[32]
    },
    {
      id: 'A3',
      team1: this.teams[16],
      team2: this.teams[47]
    },
    {
      id: 'A4',
      team1: this.teams[15],
      team2: this.teams[48]
    },
    {
      id: 'A5',
      team1: this.teams[8],
      team2: this.teams[55]
    },
    {
      id: 'A6',
      team1: this.teams[23],
      team2: this.teams[40]
    },
    {
      id: 'A7',
      team1: this.teams[24],
      team2: this.teams[39]
    },
    {
      id: 'A8',
      team1: this.teams[7],
      team2: this.teams[56]
    },
    {
      id: 'A9',
      team1: this.teams[3],
      team2: this.teams[60]
    },
    {
      id: 'A10',
      team1: this.teams[28],
      team2: this.teams[35]
    },
    {
      id: 'A11',
      team1: this.teams[19],
      team2: this.teams[44]
    },
    {
      id: 'A12',
      team1: this.teams[12],
      team2: this.teams[51]
    },
    {
      id: 'A13',
      team1: this.teams[11],
      team2: this.teams[52]
    },
    {
      id: 'A14',
      team1: this.teams[20],
      team2: this.teams[43]
    },
    {
      id: 'A15',
      team1: this.teams[27],
      team2: this.teams[36]
    },
    {
      id: 'A16',
      team1: this.teams[4],
      team2: this.teams[59]
    },
    {
      id: 'A17',
      team1: this.teams[1],
      team2: this.teams[62]
    },
    {
      id: 'A18',
      team1: this.teams[30],
      team2: this.teams[33]
    },
    {
      id: 'A19',
      team1: this.teams[17],
      team2: this.teams[46]
    },
    {
      id: 'A20',
      team1: this.teams[14],
      team2: this.teams[49]
    },
    {
      id: 'A21',
      team1: this.teams[9],
      team2: this.teams[54]
    },
    {
      id: 'A22',
      team1: this.teams[22],
      team2: this.teams[41]
    },
    {
      id: 'A23',
      team1: this.teams[25],
      team2: this.teams[38]
    },
    {
      id: 'A24',
      team1: this.teams[6],
      team2: this.teams[57]
    },
    {
      id: 'A25',
      team1: this.teams[2],
      team2: this.teams[61]
    },
    {
      id: 'A26',
      team1: this.teams[29],
      team2: this.teams[34]
    },
    {
      id: 'A27',
      team1: this.teams[18],
      team2: this.teams[45]
    },
    {
      id: 'A28',
      team1: this.teams[13],
      team2: this.teams[50]
    },
    {
      id: 'A29',
      team1: this.teams[10],
      team2: this.teams[53]
    },
    {
      id: 'A30',
      team1: this.teams[21],
      team2: this.teams[42]
    },
    {
      id: 'A31',
      team1: this.teams[26],
      team2: this.teams[37]
    },
    {
      id: 'A32',
      team1: this.teams[5],
      team2: this.teams[58]
    },
  ];

  public matchesB: Match[] = [{ id: "B1" }, { id: "B2" }, { id: "B3" }, { id: "B4" }, { id: "B5" }, { id: "B6" }, { id: "B7" }, { id: "B8" }, { id: "B9" }, { id: "B10" }, { id: "B11" }, { id: "B12" }, { id: "B13" }, { id: "B14" }, { id: "B15" }, { id: "B16" }]

  public matchesC: Match[] = [{ id: "C1" }, { id: "C2" }, { id: "C3" }, { id: "C4" }, { id: "C5" }, { id: "C6" }, { id: "C7" }, { id: "C8" }];

  public matchesD: Match[] = [{ id: "D1" }, { id: "D2" }, { id: "D3" }, { id: "D4" }];

  public matchesE: Match[] = [{ id: "E1" }, { id: "E2" }];

  public matchF = { id: "F1" };

  constructor() { }

}
