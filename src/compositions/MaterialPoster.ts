import { defineComposition, type CompositionSetup } from "framediff";
import source from "./MaterialPoster.html?raw";
import document from "./MaterialPoster.comp.json";

type MaterialPosterDocument = { phases: Array<{ until: number; word: string }> };

const materialPosterSetup: CompositionSetup = ({ document: value, onFrame, query }) => {
  const phases = (value as MaterialPosterDocument | undefined)?.phases ?? document.phases;
  const root = query<HTMLElement>(".title")?.parentElement;
  const frameLabel = query<HTMLElement>(".frame");
  const phaseLabel = query<HTMLElement>(".phase");
  if (!root || !frameLabel || !phaseLabel) throw new Error("Material Poster template is incomplete.");
  return onFrame(({ frame, durationInFrames }) => {
    const wholeFrame = Math.max(0, Math.min(durationInFrames - 1, Math.round(frame)));
    const progress = wholeFrame / (durationInFrames - 1);
    const phase = phases.find((item) => wholeFrame < item.until) ?? phases.at(-1);
    root.style.setProperty("--progress", progress.toFixed(5));
    frameLabel.textContent = String(wholeFrame).padStart(3, "0");
    phaseLabel.textContent = phase?.word ?? "";
  });
};

export const materialPosterComposition = defineComposition(source, {
  document,
  setup: materialPosterSetup,
  meta: {
    authoring: { timeline: "hidden", transport: "always", directManipulation: true },
    document: { file: "src/compositions/MaterialPoster.comp.json" },
  },
});
