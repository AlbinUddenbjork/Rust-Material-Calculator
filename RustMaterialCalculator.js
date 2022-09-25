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
  }

  static DoorwayCalculator (buildingTier, Amount, materials) {
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
}