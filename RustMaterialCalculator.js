export class RustMaterialCalculator {
  static WallCalculator (buildingTier, Amount, materials) {
    materials[0] += 50 * Amount
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
}