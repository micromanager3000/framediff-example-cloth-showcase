import { defineCompositionRegistry } from "framediff";
import { clothShowcaseComposition } from "./compositions/ClothShowcase";
import { kineticClothComposition } from "./compositions/KineticCloth";
import { materialPosterComposition } from "./compositions/MaterialPoster";

export const composition = clothShowcaseComposition;
export const COMPOSITIONS = defineCompositionRegistry({
  "cloth-showcase": composition,
  "kinetic-cloth": kineticClothComposition,
  "material-poster": materialPosterComposition,
});
