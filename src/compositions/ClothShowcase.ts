import { defineComposition, defineTimelineDocument } from "framediff";
import source from "./ClothShowcase.html?raw";
import timeline from "./ClothShowcase.timeline.json";

export const clothShowcaseComposition = defineComposition(source, {
  timeline: defineTimelineDocument(timeline),
  meta: { timelineFile: "src/compositions/ClothShowcase.timeline.json" },
});
