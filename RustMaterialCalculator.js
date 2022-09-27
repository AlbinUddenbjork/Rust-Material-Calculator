export class RustMaterialCalculator {
  static WallCalculator (buildingTier, amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }

    materials[0] += 50 * amount
    
    materials = this.FoundationWallSupport (buildingTier, amount, materials)

    return materials
  }

  static SquareFoundationCalculator (buildingTier, amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }

    materials[0] += 50 * amount
    
    materials = this.FoundationWallSupport (buildingTier, amount, materials)

    return materials
  }

  static SquareFloorCalculator (buildingTier, amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }

    materials = this.FoundationWallSupport (buildingTier, amount, materials)

    return materials
  }

  static TriangleFoundationCalculator (buildingTier, amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }
    
    materials = this.TriangleFoundationSquareFloorSupport (buildingTier, amount, materials)

    return materials
  }

  static TriangleFloorCalculator (buildingTier, amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }

    materials[0] += 13 * amount

    if (buildingTier == 1) {
      materials[0] += 50 * amount
    } else if (buildingTier == 2) {
      materials[1] += 75 * amount
    } else if (buildingTier == 3) {
      materials[2] += 50 * amount
    } else if (buildingTier == 4) {
      materials[3] += 7 * amount
    }

    return materials
  }

  static DoorwayCalculator (buildingTier, amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }
    
    this.WindowDoorwaySupport(buildingTier, amount, materials)

    return materials
  }

  static WindowCalculator (buildingTier, amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }
    
    this.WindowDoorwaySupport(buildingTier, amount, materials)

    return materials
  }

  static StoneCalculator (pickaxeTier, amount, multiplier) {
    if (multiplier !== undefined && multiplier > 1) {
      amount = amount / multiplier
    }
    let nodeAmount
    
    if (pickaxeTier === 1) {
      nodeAmount = (amount / 375)
    } else if (pickaxeTier === 2) {
      nodeAmount = (amount / 795)
    } else if (pickaxeTier === 3) {
      nodeAmount = (amount / 1000)
    }

    nodeAmount = Math.ceil(nodeAmount)
    return nodeAmount
  }

  static MetalCalculator (pickaxeTier, amount, multiplier) {
    if (multiplier !== undefined && multiplier > 1) {
      amount = amount / multiplier
    }
    let nodeAmount
    
    if (pickaxeTier === 1) {
      nodeAmount = (amount / 250)
    } else if (pickaxeTier === 2) {
      nodeAmount = (amount / 475)
    } else if (pickaxeTier === 3) {
      nodeAmount = (amount / 600)
    }

    nodeAmount = Math.ceil(nodeAmount)
    return nodeAmount
  }

  static SulfurCalculator (pickaxeTier, amount, multiplier) {
    if (multiplier !== undefined && multiplier > 1) {
      amount = amount / multiplier
    }
    let nodeAmount

    if (pickaxeTier === 1) {
      nodeAmount = amount / 100
    } else if (pickaxeTier === 2) {
      nodeAmount = amount / 245
    } else if (pickaxeTier === 3) {
      nodeAmount = amount / 300
    }

    nodeAmount = Math.ceil(nodeAmount)
    return nodeAmount
  }

  static HighQualityMetalCalculator (amount, multiplier) {
    if (multiplier !== undefined && multiplier > 1) {
      amount / multiplier
    }

    let nodeAmount = amount / 2

    nodeAmount = Math.ceil(nodeAmount)
    return nodeAmount
  }

  static TreeCalculator (hatchetTier, amount, multiplier) {
    if (multiplier !== undefined && multiplier > 1) {
      amount = amount / multiplier
    }
    let treeAmountLow
    let treeAmountHigh
    
    // 1 = rock, 2 = stone hatchet, 3 = hatchet, 4 = salveged axe or chainsaw.
    if (hatchetTier === 1) {
      treeAmountLow = (amount / 250)
      treeAmountHigh = (amount / 500)
    } else if (hatchetTier === 2) {
      treeAmountLow = (amount / 406)
      treeAmountHigh = (amount / 810)
    } else if (hatchetTier === 3) {
      treeAmountLow = (amount / 434)
      treeAmountHigh = (amount / 867)
    } else if (hatchetTier === 4) {
      treeAmountLow = (amount / 500)
      treeAmountHigh = (amount / 1000)
    }

    treeAmountLow = Math.ceil(treeAmountLow)
    treeAmountHigh = Math.ceil(treeAmountHigh)
    const treeEstimate = {low:treeAmountLow, high:treeAmountHigh}
    return treeEstimate
  }

  // This function is used to support FouundationCalculator and WallCalculator.
  static FoundationWallSupport (buildingTier, amount, materials) {
    if (buildingTier == 1) {
      materials[0] += 200 * amount
    } else if (buildingTier == 2) {
      materials[1] += 300 * amount
    } else if (buildingTier == 3) {
      materials[2] += 200 * amount
    } else if (buildingTier == 4) {
      materials[3] += 25 * amount
    }

    return materials
  }

  // This function is used to support TriangelFloorCalculation and SquareFloorCalculator.
  static TriangleFoundationSquareFloorSupport (buildingTier, amount, materials) {
    
    materials[0] += 25 * amount
    
    if (buildingTier == 1) {
      materials[0] += 100 * amount
    } else if (buildingTier == 2) {
      materials[1] += 150 * amount
    } else if (buildingTier == 3) {
      materials[2] += 100 * amount
    } else if (buildingTier == 4) {
      materials[3] += 13 * amount
    }

    return materials
  }

  // This function is used to support WindowCalculator and DoorwayCalculator.
  static WindowDoorwaySupport (buildingTier, amount, materials) {
    
    materials[0] += 35 * amount
    
    if (buildingTier == 1) {
      materials[0] += 140 * amount
    } else if (buildingTier == 2) {
      materials[1] += 210 * amount
    } else if (buildingTier == 3) {
      materials[2] += 140 * amount
    } else if (buildingTier == 4) {
      materials[3] += 18 * amount
    }

    return materials
  }
}