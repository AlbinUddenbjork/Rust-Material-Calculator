export class RustMaterialCalculator {
  static WallCalculator (buildingTier, Amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }

    materials[0] += 50 * Amount
    
    materials = this.FoundationWallSupport (buildingTier, Amount, materials)

    return materials
  }

  static SquareFoundationCalculator (buildingTier, Amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }

    materials[0] += 50 * Amount
    
    materials = this.FoundationWallSupport (buildingTier, Amount, materials)

    return materials
  }

  static SquareFloorCalculator (buildingTier, Amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }

    materials = this.FoundationWallSupport (buildingTier, Amount, materials)

    return materials
  }

  static SquareFloorCalculator (buildingTier, Amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }

    materials = this.FoundationWallSupport (buildingTier, Amount, materials)

    return materials
  }

  static TriangleFoundationCalculator (buildingTier, Amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }
    
    materials = this.TriangleFoundationSquareFloorSupport (buildingTier, Amount, materials)

    return materials
  }

  static TriangleFloorCalculator (buildingTier, Amount, materials) {
    if (materials === undefined) {
      const materials = [0, 0, 0, 0]
    }

    materials[0] += 13 * Amount

    if (buildingTier == 1) {
      materials[0] += 50 * Amount
    } else if (buildingTier == 2) {
      materials[1] += 75 * Amount
    } else if (buildingTier == 3) {
      materials[2] += 50 * Amount
    } else if (buildingTier == 4) {
      materials[3] += 7 * Amount
    }

    return materials
  }

  static DoorwayCalculator (buildingTier, Amount, materials) {
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
  static FoundationWallSupport (buildingTier, Amount, materials) {
    if (buildingTier == 1) {
      materials[0] += 200 * Amount
    } else if (buildingTier == 2) {
      materials[1] += 300 * Amount
    } else if (buildingTier == 3) {
      materials[2] += 200 * Amount
    } else if (buildingTier == 4) {
      materials[3] += 25 * Amount
    }

    return materials
  }

  // This function is used to support TriangelFloorCalculation and SquareFloorCalculator.
  static TriangleFoundationSquareFloorSupport (buildingTier, Amount, materials) {
    
    materials[0] += 25 * Amount
    
    if (buildingTier == 1) {
      materials[0] += 100 * Amount
    } else if (buildingTier == 2) {
      materials[1] += 150 * Amount
    } else if (buildingTier == 3) {
      materials[2] += 100 * Amount
    } else if (buildingTier == 4) {
      materials[3] += 13 * Amount
    }

    return materials
  }

  // This function is used to support WindowCalculator and DoorwayCalculator.
  static WindowDoorwaySupport (buildingTier, Amount, materials) {
    
    materials[0] += 35 * Amount
    
    if (buildingTier == 1) {
      materials[0] += 140 * Amount
    } else if (buildingTier == 2) {
      materials[1] += 210 * Amount
    } else if (buildingTier == 3) {
      materials[2] += 140 * Amount
    } else if (buildingTier == 4) {
      materials[3] += 18 * Amount
    }

    return materials
  }
}