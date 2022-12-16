import { loadInput } from "../../helper";
import _ from "lodash";

const winsAgainst = new Map([
  [1, 2],
  [2, 3],
  [3, 1],
]);

const scoreBattle = (theirs: number, mine: number) => {
  if (theirs == mine) return 3;
  else if (winsAgainst.get(theirs) == mine) return 6;
  else return 0;
}

const convertTheirChoice = (theirs: string) => theirs.charCodeAt(0) - "A".charCodeAt(0) + 1;
const convertMyChoice = (mine: string) => mine.charCodeAt(0) - "X".charCodeAt(0) + 1;

// const input = loadInput("test.txt");
const input = loadInput("input.txt");

const rounds = input.split("\n").filter(round => round); // ignore empty lines

const choiceStringsPerRound = rounds.map((round) => round.split(" "));
const choicesPerRound = choiceStringsPerRound.map(([theirsString, mineString]) => {
  return [convertTheirChoice(theirsString), convertMyChoice(mineString)]
});

const pointsPerRound = choicesPerRound.map(([theirs, mine]) => mine + scoreBattle(theirs, mine));
const totalPoints = _.sum(pointsPerRound);

// part 1
console.log(totalPoints); // answer for test: 15

// part 2
const losesAgainst = new Map(Array.from(winsAgainst, entry => [entry[1], entry[0]]));

type XYZ = "X" | "Y" | "Z";
const determineMyChoice = (theirs: number, neededResult: XYZ) => {
  switch(neededResult) {
    case "X": return losesAgainst.get(theirs);
    case "Y": return theirs;
    case "Z": return winsAgainst.get(theirs);
  }
}

const choicesPerRoundPart2 = choiceStringsPerRound.map(([theirsString, neededResult]) => {
  const theirs = convertTheirChoice(theirsString);
  const mine = determineMyChoice(theirs, neededResult as XYZ);
  return [theirs as number, mine as number] // for some reason ts-node can't tell that these aren't undefined, yet vscode can
});

const pointsPerRoundPart2 = choicesPerRoundPart2.map(([theirs, mine]) => mine + scoreBattle(theirs, mine));
const totalPointsPart2 = _.sum(pointsPerRoundPart2);

console.log(totalPointsPart2); // 12
