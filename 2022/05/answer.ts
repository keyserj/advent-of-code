import { loadInput } from "../../helper";
import _, { range } from "lodash";

// const input = loadInput("test.txt");
const input = loadInput("input.txt");

const [drawing, instructions] = input.split("\n\n").map((half) => half.split("\n").filter(x => x));

const stackNumbers = drawing[drawing.length - 1].split(" ").filter((result) => result).map(Number);
const numStacks = stackNumbers[stackNumbers.length - 1];

const stacks = Object.fromEntries(stackNumbers.map((stackNumber) => [stackNumber, [] as string[]]));

// populate stacks
const SPACES_BETWEEN_CRATES = 4;
drawing.slice(0, -1).reverse().forEach((row) => {
  stackNumbers.forEach((stackNumber) => {
    const crateIndex = 1 + (stackNumber - 1) * SPACES_BETWEEN_CRATES;
    const crate = row[crateIndex];

    if (crate.trim()) { stacks[stackNumber].push(crate) }
  });
});

// run instructions
const numberedInstructions = instructions.map((instruction) => {
  return instruction
    .split(" ")
    .map(Number)
    .filter((num) => num);
});

const stacks1 = JSON.parse(JSON.stringify(stacks)) as typeof stacks;
numberedInstructions.forEach(([cratesToMove, fromStackNum, toStackNum]) => {
  range(cratesToMove).forEach(() => {
    const fromStack = stacks1[fromStackNum];
    const toStack = stacks1[toStackNum];

    const crate = fromStack.pop();
    if (crate) toStack.push(crate);
  });
});

const tops = Object.values(stacks1).map((stack) => stack[stack.length - 1]).join("");

// part 1
console.log(tops);

// part 2
const stacks2 = JSON.parse(JSON.stringify(stacks)) as typeof stacks;
numberedInstructions.forEach(([cratesToMove, fromStackNum, toStackNum]) => {
  const fromStack = stacks2[fromStackNum];
  const toStack = stacks2[toStackNum];

  const crates = fromStack.splice(fromStack.length - cratesToMove, cratesToMove);
  toStack.push(...crates);
});

const tops2 = Object.values(stacks2).map((stack) => stack[stack.length - 1]).join("");

console.log(tops2);
