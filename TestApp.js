import { RustMaterialCalculator } from './RustMaterialCalculator.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const scanner = readline.createInterface({ input, output });
let done = false
const materials = [0, 0, 0, 0]

while (done === false) {
  let buildingType = await scanner.question('What would you like to calculate? 1. Wall 2. Foundation 3. Floor 4. Triangle Foundation 5. Triangle FLoor 6. Doorway 7. Window ')
  buildingType = parseInt(buildingType)

  let buildingTier = await scanner.question('What material? 1. Wood 2. Stone 3. Metal 4. High Quality Metal ')
  buildingTier = parseInt(buildingTier)

  let buildingAmount = await scanner.question('How many will you need? ')
  buildingAmount = parseInt(buildingAmount)

  calculateBuilding(buildingType, buildingAmount, buildingTier, materials)
  let answer = await scanner.question('Are you done? y/n ')
  if (answer = 'y') {
    done = true
  }

  console.log(materials)
}

scanner.close();

function calculateBuilding (buildingType, buildingAmount, buildingTier, materials) {
  console.log('smh')
  if (buildingType === 1) {
    console.log('t')
    RustMaterialCalculator.WallCalculator(buildingTier, buildingAmount, materials)
  } else if (buildingType === 7) {
    RustMaterialCalculator.DoorwayCalculator(buildingTier, buildingAmount, materials)
  }

}