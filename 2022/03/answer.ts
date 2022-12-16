import { loadInput } from "../../helper";
import _ from "lodash";

const getPriority = (itemType: string) => {
  if (itemType == itemType.toLowerCase()) {
    return itemType.charCodeAt(0) - "a".charCodeAt(0) + 1;
  } else {
    return itemType.charCodeAt(0) - "A".charCodeAt(0) + 1 + 26;
  }
};

// const input = loadInput("test.txt");
const input = loadInput("input.txt");

const lines = input.split("\n").filter(line => line); // ignore empty lines

const halves = lines.map(line => {
  const halfway = line.length / 2;
  return [line.slice(0, halfway), line.slice(halfway)]
});

const commonTypes = halves.map(([firstHalf, secondHalf]) => {
  const seen = new Set(firstHalf.split(""));
  return secondHalf.split("").find(type => seen.has(type)) as string; // appease ts-node despite vscode knowing the type
});

const priorities = commonTypes.map(type => getPriority(type));
const sumPriorities = _.sum(priorities);

// part 1
console.log(sumPriorities); // answer for test is 157

// part 2
const triples = _.chunk(lines, 3)
const badges = triples.map(([first, second, third]) => {
  const seen = new Set(first.split(""));
  const seenBoth = new Set(second.split("").filter(type => seen.has(type)));
  return third.split("").find(type => seenBoth.has(type)) as string; // appease ts-node despite vscode knowing the type
});

const badgePriorities = badges.map(type => getPriority(type));
const sumBadgePriorities = _.sum(badgePriorities);

console.log(sumBadgePriorities); // answer for test is 70
