import { loadInput } from "../../helper";
import _ from "lodash";

// const input = loadInput("test.txt");
const input = loadInput("input.txt");

const inputLinesByElf = input.split("\n\n");

const caloriesByElf = inputLinesByElf
  .map((linesByElf) => linesByElf
    .split("\n")
    .map((caloriesString) => Number(caloriesString))
    .reduce((total, calories) => total + calories, 0)
  );

// part one
const mostCalories = _.max(caloriesByElf);
console.log(mostCalories);

// part two
const sortedCalories = caloriesByElf.sort((a, b) => b - a); // descending
const topThreeSummed = _(sortedCalories).take(3).sum();

console.log(topThreeSummed);
