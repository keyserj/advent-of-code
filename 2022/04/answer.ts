import { loadInput } from "../../helper";
import _ from "lodash";

// const input = loadInput("test.txt");
const input = loadInput("input.txt");

const lines = input.split("\n").filter(line => line); // ignore empty lines
const pairs = lines.map(line => line.split(","));

const fullyContains = pairs.map(([first, second]) => {
  const [firstLower, firstUpper] = first.split("-").map(bound => Number(bound));
  const [secondLower, secondUpper] = second.split("-").map(bound => Number(bound));;

  const firstContains = secondLower >= firstLower && secondUpper <= firstUpper;
  const secondContains = firstLower >= secondLower && firstUpper <= secondUpper;

  return firstContains || secondContains;
});

const totalContains = fullyContains.filter(contains => contains).length;

// part 1: test answer is 2
console.log(totalContains);

// part 2: test answer is 4
const overlaps = pairs.map(([first, second]) => {
  const [firstLower, firstUpper] = first.split("-").map(bound => Number(bound));
  const [secondLower, secondUpper] = second.split("-").map(bound => Number(bound));;

  return !(firstUpper < secondLower || secondUpper < firstLower);
});

const totalOverlaps = overlaps.filter(contains => contains).length;

console.log(totalOverlaps);
