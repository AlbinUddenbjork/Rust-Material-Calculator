import { RustMaterialCalculator } from './RustMaterialCalculator.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const scanner = readline.createInterface({ input, output });
let done = true
let materials = [0, 0, 0, 0]

while (done) {
  let buildingType = await scanner.question('What would you like to calculate? 1. Wall 2. Square foundation 3. Square floor 4. Triangle foundation 5. Triangle floor 6. Doorway 7. Window ')
  buildingType = parseInt(buildingType)

  let buildingTier = await scanner.question('What material? 1. Wood 2. Stone 3. Metal 4. High Quality Metal ')
  buildingTier = parseInt(buildingTier)

  let buildingAmount = await scanner.question('How many will you need? ')
  buildingAmount = parseInt(buildingAmount)

  materials = calculateBuilding(buildingType, buildingAmount, buildingTier, materials)
  let answer 
  answer = await scanner.question('Are you done? y/n ')
  if (answer === 'y') {
    done = false
  }

  console.log('So far you need ' + materials[0] + ' wood, ' + materials[1] + ' stone, ' + materials[2] + ' metal, ' + materials[3] + ' high quality metal, ' )
  console.log()
}

if (materials[1] > 0) {
  stoneTest(materials)
}
if (materials[2] > 0) {
  metalTest(materials)
}
if (materials[3] > 0) {
  const metalNodeAmount = RustMaterialCalculator.HighQualityMetalCalculator(materials[3])
  console.log('You need to break ' + metalNodeAmount + ' metal nodes to get ' + materials[3] + ' high quality metal. For this to be accurate you need a stone hatchet or better.')
}

sulfurTest()
treeTest(materials)
scanner.close();

function calculateBuilding (buildingType, buildingAmount, buildingTier, materials) {
  if (buildingType === 1) {
    materials = RustMaterialCalculator.WallCalculator(buildingTier, buildingAmount, materials)
  } else if (buildingType === 2) {
    materials = RustMaterialCalculator.SquareFoundationCalculator(buildingTier, buildingAmount, materials)
  } else if (buildingType === 3) {
    materials = RustMaterialCalculator.SquareFloorCalculator(buildingTier, buildingAmount, materials)
  } else if (buildingType === 4) {
    materials = RustMaterialCalculator.TriangleFoundationCalculator(buildingTier, buildingAmount, materials)
  } else if (buildingType === 5) {
    materials = RustMaterialCalculator.TriangleFloorCalculator(buildingTier, buildingAmount, materials)
  } else if (buildingType === 6) {
    materials = RustMaterialCalculator.DoorwayCalculator(buildingTier, buildingAmount, materials)
  } else if (buildingType === 7) {
    materials = RustMaterialCalculator.WindowCalculator(buildingTier, buildingAmount, materials)
  }

  return materials
}

function stoneTest (materials) {
  let stoneNodes

  stoneNodes = RustMaterialCalculator.StoneCalculator(1, materials[1])
  console.log("If you mine stone nodes with your rock you'll need to mine " + stoneNodes + " stone nodes.")
  stoneNodes = RustMaterialCalculator.StoneCalculator(2, materials[1])
  console.log("If you mine stone nodes with a stone pickaxe you'll need to mine " + stoneNodes + " stone nodes.")
  stoneNodes = RustMaterialCalculator.StoneCalculator(3, materials[1])
  console.log("If you mine stone nodes with a pickaxe or better you'll need to mine " + stoneNodes + " stone nodes.")

  stoneNodes = RustMaterialCalculator.StoneCalculator(1, materials[1], 3)
  console.log("If you mine stone nodes with your rock you'll need to mine " + stoneNodes + " stone nodes with the multiplier of 3.")
  stoneNodes = RustMaterialCalculator.StoneCalculator(2, materials[1], 3)
  console.log("If you mine stone nodes with a stone pickaxe you'll need to mine " + stoneNodes + " stone nodes with the multiplier of 3")
  stoneNodes = RustMaterialCalculator.StoneCalculator(3, materials[1], 3)
  console.log("If you mine stone nodes with a pickaxe or better you'll need to mine " + stoneNodes + " stone nodes with the multiplier of 3")
  console.log()
}

function metalTest (materials) {
  let metalNodes

  metalNodes = RustMaterialCalculator.MetalCalculator(1, materials[1])
  console.log("If you mine metal nodes with your rock you'll need to mine " + metalNodes + " metal nodes.")
  metalNodes = RustMaterialCalculator.MetalCalculator(2, materials[1])
  console.log("If you mine metal nodes with a stone pickaxe you'll need to mine " + metalNodes + " metal nodes.")
  metalNodes = RustMaterialCalculator.MetalCalculator(3, materials[1])
  console.log("If you mine metal nodes with a pickaxe or better you'll need to mine " + metalNodes + " metal nodes.")

  metalNodes = RustMaterialCalculator.MetalCalculator(1, materials[1], 3)
  console.log("If you mine metal nodes with your rock you'll need to mine " + metalNodes + " metal nodes with the multiplier of 3.")
  metalNodes = RustMaterialCalculator.MetalCalculator(2, materials[1], 3)
  console.log("If you mine metal nodes with a stone pickaxe you'll need to mine " + metalNodes + " metal nodes with the multiplier of 3")
  metalNodes = RustMaterialCalculator.MetalCalculator(3, materials[1], 3)
  console.log("If you mine metal nodes with a pickaxe or better you'll need to mine " + metalNodes + " metal nodes with the multiplier of 3")
  console.log()
}

function sulfurTest () {
  let sulfurNodes

  sulfurNodes = RustMaterialCalculator.SulfurCalculator(1, 15000)
  console.log("If you mine sulfur nodes with your rock you'll need to mine " + sulfurNodes + " sulfur nodes.")
  sulfurNodes = RustMaterialCalculator.SulfurCalculator(2, 15000)
  console.log("If you mine sulfur nodes with a stone pickaxe you'll need to mine " + sulfurNodes + " sulfur nodes.")
  sulfurNodes = RustMaterialCalculator.SulfurCalculator(3, 15000)
  console.log("If you mine sulfur nodes with a pickaxe or better you'll need to mine " + sulfurNodes + " sulfur nodes.")

  sulfurNodes = RustMaterialCalculator.SulfurCalculator(1, 15000, 3)
  console.log("If you mine sulfur nodes with your rock you'll need to mine " + sulfurNodes + " sulfur nodes with the multiplier of 3.")
  sulfurNodes = RustMaterialCalculator.SulfurCalculator(2, 15000, 3)
  console.log("If you mine sulfur nodes with a stone pickaxe you'll need to mine " + sulfurNodes + " sulfur nodes with the multiplier of 3")
  sulfurNodes = RustMaterialCalculator.SulfurCalculator(3, 15000, 3)
  console.log("If you mine sulfur nodes with a pickaxe or better you'll need to mine " + sulfurNodes + " sulfur nodes with the multiplier of 3")
  console.log()
}

function treeTest (materials) {
  let trees

  trees = RustMaterialCalculator.TreeCalculator(1, materials[0])
  console.log("If you chop trees with your rock you'll need to chop between " + trees.low + " and " + trees.high + " trees.")
  trees = RustMaterialCalculator.TreeCalculator(2, materials[0])
  console.log("If you chop trees with your stone hatchet you'll need to chop between " + trees.low + " and " + trees.high + " trees.")
  trees = RustMaterialCalculator.TreeCalculator(3, materials[0])
  console.log("If you chop trees with your hatchet you'll need to chop between " + trees.low + " and " + trees.high + " trees.")
  trees = RustMaterialCalculator.TreeCalculator(4, materials[0])
  console.log("If you chop trees with your salvaged axe or better you'll need to chop between " + trees.low + " and " + trees.high + " trees.")
  console.log()

  trees = RustMaterialCalculator.TreeCalculator(1, materials[0], 3)
  console.log("If you chop trees with your rock you'll need to chop between " + trees.low + " and " + trees.high + " trees with a multiplier of 3.")
  trees = RustMaterialCalculator.TreeCalculator(2, materials[0], 3)
  console.log("If you chop trees with your stone hatchet you'll need to chop between " + trees.low + " and " + trees.high + " tree with a multiplier of 3.")
  trees = RustMaterialCalculator.TreeCalculator(3, materials[0], 3)
  console.log("If you chop trees with your hatchet you'll need to chop between " + trees.low + " and " + trees.high + " trees with a multiplier of 3.")
  trees = RustMaterialCalculator.TreeCalculator(4, materials[0], 3)
  console.log("If you chop trees with your salvaged axe or better you'll need to chop between " + trees.low + " and " + trees.high + " trees with a multiplier of 3.")
  console.log()
}