const GRINDERS = [
  {
    id: "niche-zero",
    name: "Niche Zero",
    type: "stepless",
    espressoMin: 10,
    espressoMax: 20,
    baseline: 15,
    stepSize: 0.5,
    displayFormat: "whole",
    notes: "Stepless dial — small movements make a big difference."
  },
  {
    id: "eureka-mignon-specialita",
    name: "Eureka Mignon Specialita",
    type: "stepless",
    espressoMin: 1,
    espressoMax: 3,
    baseline: 2,
    stepSize: 0.1,
    displayFormat: "decimal",
    notes: "Rotate clockwise for finer. Very small range for espresso — tiny adjustments matter."
  },
  {
    id: "baratza-sette-270",
    name: "Baratza Sette 270",
    type: "stepped",
    espressoMin: 3,
    espressoMax: 9,
    baseline: 5,
    stepSize: 1,
    displayFormat: "macro-micro",
    notes: "Macro ring (1–9) sets the range; micro ring fine-tunes within each step."
  },
  {
    id: "baratza-encore-esp",
    name: "Baratza Encore ESP",
    type: "stepped",
    espressoMin: 1,
    espressoMax: 20,
    baseline: 10,
    stepSize: 1,
    displayFormat: "whole",
    notes: "Settings 1–20 are tuned for espresso; 21–40 are for filter coffee."
  },
  {
    id: "breville-barista-express",
    name: "Breville Barista Express",
    type: "stepped",
    espressoMin: 1,
    espressoMax: 18,
    baseline: 8,
    stepSize: 1,
    displayFormat: "whole",
    notes: "Internal upper burr can be adjusted if you run out of range on the dial."
  },
  {
    id: "breville-barista-touch-impress",
    name: "Breville Barista Touch Impress",
    type: "stepped",
    espressoMin: 1,
    espressoMax: 30,
    baseline: 8,
    stepSize: 1,
    displayFormat: "whole",
    notes: "30 settings on the external dial. Internal upper burr adjustable for extended range."
  },
  {
    id: "breville-smart-grinder-pro",
    name: "Breville Smart Grinder Pro",
    type: "stepped",
    espressoMin: 1,
    espressoMax: 20,
    baseline: 10,
    stepSize: 1,
    displayFormat: "whole",
    notes: "Digital display shows setting number. Upper burr is adjustable."
  },
  {
    id: "delonghi-magnifica",
    name: "DeLonghi Magnifica",
    type: "stepped",
    espressoMin: 1,
    espressoMax: 7,
    baseline: 3,
    stepSize: 1,
    displayFormat: "whole",
    notes: "Only adjust one notch at a time while the grinder is running."
  },
  {
    id: "rancilio-rocky",
    name: "Rancilio Rocky",
    type: "stepped",
    espressoMin: 5,
    espressoMax: 10,
    baseline: 7,
    stepSize: 1,
    displayFormat: "whole",
    notes: "55 total settings. Espresso lives in a narrow band around 5–10."
  },
  {
    id: "gaggia-mdf",
    name: "Gaggia MDF",
    type: "stepped",
    espressoMin: 2,
    espressoMax: 10,
    baseline: 6,
    stepSize: 1,
    displayFormat: "whole",
    notes: "Higher number = coarser grind. Most espresso shots land between 2–10."
  },
  {
    id: "fellow-opus",
    name: "Fellow Opus",
    type: "stepped",
    espressoMin: 1,
    espressoMax: 11,
    baseline: 5,
    stepSize: 1,
    displayFormat: "whole",
    notes: "41 total settings. Espresso range is on the finer end."
  },
  {
    id: "1zpresso-jx-pro",
    name: "1Zpresso JX-Pro",
    type: "stepped",
    espressoMin: 48,
    espressoMax: 80,
    baseline: 64,
    stepSize: 2,
    displayFormat: "whole",
    notes: "Manual hand grinder. Each click = ~12.5 microns. Count clicks from fully closed."
  },
  {
    id: "mazzer-mini",
    name: "Mazzer Mini",
    type: "stepless",
    espressoMin: 0,
    espressoMax: 10,
    baseline: 5,
    stepSize: 0.5,
    displayFormat: "decimal",
    notes: "Professional-grade stepless grinder. Very precise adjustments."
  },
  {
    id: "comandante-c40",
    name: "Comandante C40",
    type: "stepped",
    espressoMin: 12,
    espressoMax: 20,
    baseline: 16,
    stepSize: 1,
    displayFormat: "whole",
    notes: "Manual hand grinder. Count clicks from fully closed position."
  }
];
