import { RustMaterialCalculator } from './RustMaterialCalculator.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const scanner = readline.createInterface({ input, output });
let done = false

while (done === false) {
let buildingType = await scanner.question('What would you like to calculate? 1. Wall 2. Foundation 3. Floor 4. Triangle Foundation 5. Triangle FLoor 6. Doorway 7. Window ')
let buildingAmount = await scanner.question('How many will you need? ')

let answer = await scanner.question('Are you done? y/n ')
if (answer = 'y') {
  done = true
}

console.log(RustMaterialCalculator.test)
}

scanner.close();