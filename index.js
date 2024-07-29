#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Enter firstnumber",
    type: "number",
    name: "firstnumber",
  },
  {
    message: "Enter secondnumber",
    type: "number",
    name: "secondnumber",
  },
  {
    message: "Select one of the operator to perform operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// Conditional Statement
if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("Please select valid operator");
}
