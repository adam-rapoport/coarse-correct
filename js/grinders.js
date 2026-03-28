const GRINDERS = [
  // ── Existing grinders (migrated to methods format) ──────────────────

  {
    id: "niche-zero",
    name: "Niche Zero",
    type: "stepless",
    stepSize: 0.5,
    displayFormat: "whole",
    notes: "Stepless dial — small movements make a big difference.",
    methods: {
      espresso: { min: 10, max: 20, baseline: 15 },
      v60:      { min: 20, max: 30, baseline: 25 },
      chemex:   { min: 25, max: 35, baseline: 30 }
    }
  },
  {
    id: "eureka-mignon-specialita",
    name: "Eureka Mignon Specialita",
    type: "stepless",
    stepSize: 0.1,
    displayFormat: "decimal",
    notes: "Rotate clockwise for finer. Very small range for espresso — tiny adjustments matter.",
    methods: {
      espresso: { min: 1, max: 3, baseline: 2 },
      v60:      { min: 3, max: 5, baseline: 4 },
      chemex:   { min: 4, max: 6, baseline: 5 }
    }
  },
  {
    id: "baratza-sette-270",
    name: "Baratza Sette 270",
    type: "stepped",
    stepSize: 1,
    displayFormat: "macro-micro",
    notes: "Macro ring (1–9) sets the range; micro ring fine-tunes within each step.",
    methods: {
      espresso: { min: 3, max: 9, baseline: 5 },
      v60:      { min: 9, max: 15, baseline: 12 },
      chemex:   { min: 13, max: 20, baseline: 16 }
    }
  },
  {
    id: "baratza-encore-esp",
    name: "Baratza Encore ESP",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Settings 1–20 are tuned for espresso; 21–40 are for filter coffee.",
    methods: {
      espresso: { min: 1, max: 20, baseline: 10 },
      v60:      { min: 20, max: 30, baseline: 25 },
      chemex:   { min: 25, max: 35, baseline: 30 }
    }
  },
  {
    id: "breville-barista-express",
    name: "Breville Barista Express",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Internal upper burr can be adjusted if you run out of range on the dial.",
    methods: {
      espresso: { min: 1, max: 18, baseline: 8 }
    }
  },
  {
    id: "breville-barista-touch-impress",
    name: "Breville Barista Touch Impress",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "30 settings on the external dial. Internal upper burr adjustable for extended range.",
    methods: {
      espresso: { min: 1, max: 30, baseline: 8 }
    }
  },
  {
    id: "breville-smart-grinder-pro",
    name: "Breville Smart Grinder Pro",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Digital display shows setting number. Upper burr is adjustable.",
    methods: {
      espresso: { min: 1, max: 20, baseline: 10 },
      v60:      { min: 25, max: 40, baseline: 32 },
      chemex:   { min: 35, max: 50, baseline: 42 }
    }
  },
  {
    id: "delonghi-magnifica",
    name: "DeLonghi Magnifica",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Only adjust one notch at a time while the grinder is running.",
    methods: {
      espresso: { min: 1, max: 7, baseline: 3 }
    }
  },
  {
    id: "rancilio-rocky",
    name: "Rancilio Rocky",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "55 total settings. Espresso lives in a narrow band around 5–10.",
    methods: {
      espresso: { min: 5, max: 10, baseline: 7 },
      v60:      { min: 20, max: 30, baseline: 25 },
      chemex:   { min: 25, max: 35, baseline: 30 }
    }
  },
  {
    id: "gaggia-mdf",
    name: "Gaggia MDF",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Higher number = coarser grind. Most espresso shots land between 2–10.",
    methods: {
      espresso: { min: 2, max: 10, baseline: 6 },
      v60:      { min: 14, max: 22, baseline: 18 },
      chemex:   { min: 18, max: 26, baseline: 22 }
    }
  },
  {
    id: "fellow-opus",
    name: "Fellow Opus",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "41 total settings. Espresso range is on the finer end.",
    methods: {
      espresso: { min: 1, max: 11, baseline: 5 },
      v60:      { min: 15, max: 25, baseline: 20 },
      chemex:   { min: 22, max: 32, baseline: 27 }
    }
  },
  {
    id: "1zpresso-jx-pro",
    name: "1Zpresso JX-Pro",
    type: "stepped",
    stepSize: 2,
    displayFormat: "whole",
    notes: "Manual hand grinder. Each click = ~12.5 microns. Count clicks from fully closed.",
    methods: {
      espresso: { min: 48, max: 80, baseline: 64 },
      v60:      { min: 100, max: 140, baseline: 120 },
      chemex:   { min: 130, max: 170, baseline: 150 }
    }
  },
  {
    id: "mazzer-mini",
    name: "Mazzer Mini",
    type: "stepless",
    stepSize: 0.5,
    displayFormat: "decimal",
    notes: "Professional-grade stepless grinder. Very precise adjustments.",
    methods: {
      espresso: { min: 0, max: 10, baseline: 5 },
      v60:      { min: 10, max: 20, baseline: 15 },
      chemex:   { min: 15, max: 25, baseline: 20 }
    }
  },
  {
    id: "comandante-c40",
    name: "Comandante C40",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Manual hand grinder. Count clicks from fully closed position.",
    methods: {
      espresso: { min: 12, max: 20, baseline: 16 },
      v60:      { min: 22, max: 30, baseline: 26 },
      chemex:   { min: 28, max: 36, baseline: 32 }
    }
  },

  // ── New grinders ────────────────────────────────────────────────────

  {
    id: "timemore-c2",
    name: "Timemore C2",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Budget hand grinder. Count clicks from fully closed. Great for pour-over.",
    methods: {
      espresso: { min: 10, max: 15, baseline: 12 },
      v60:      { min: 18, max: 24, baseline: 21 },
      chemex:   { min: 22, max: 28, baseline: 25 }
    }
  },
  {
    id: "timemore-chestnut-x",
    name: "Timemore Chestnut X",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Premium hand grinder with dual-bearing stabilization. Count clicks from closed.",
    methods: {
      espresso: { min: 8, max: 14, baseline: 11 },
      v60:      { min: 18, max: 26, baseline: 22 },
      chemex:   { min: 24, max: 32, baseline: 28 }
    }
  },
  {
    id: "df64",
    name: "DF64 (Turin)",
    type: "stepless",
    stepSize: 0.5,
    displayFormat: "whole",
    notes: "Single-dose flat burr grinder. Numeric dial 0–80. Small adjustments near espresso range.",
    methods: {
      espresso: { min: 10, max: 25, baseline: 17 },
      v60:      { min: 30, max: 45, baseline: 37 },
      chemex:   { min: 40, max: 55, baseline: 47 }
    }
  },
  {
    id: "baratza-encore",
    name: "Baratza Encore",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "The most popular starter grinder. 40 settings, best suited for filter and pour-over.",
    methods: {
      v60:    { min: 12, max: 20, baseline: 16 },
      chemex: { min: 18, max: 26, baseline: 22 }
    }
  },
  {
    id: "baratza-virtuoso-plus",
    name: "Baratza Virtuoso+",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "40 stepped settings with a digital timer. Versatile across brew methods.",
    methods: {
      espresso: { min: 1, max: 8, baseline: 4 },
      v60:      { min: 12, max: 20, baseline: 16 },
      chemex:   { min: 18, max: 26, baseline: 22 }
    }
  },
  {
    id: "eureka-mignon-notte",
    name: "Eureka Mignon Notte",
    type: "stepless",
    stepSize: 0.1,
    displayFormat: "decimal",
    notes: "Budget-friendly Eureka. Same mechanism as the Specialita with fewer features.",
    methods: {
      espresso: { min: 1, max: 3, baseline: 2 },
      v60:      { min: 3, max: 5, baseline: 4 },
      chemex:   { min: 4, max: 6, baseline: 5 }
    }
  },
  {
    id: "hario-skerton-pro",
    name: "Hario Skerton Pro",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Affordable ceramic burr hand grinder. Better for pour-over than espresso.",
    methods: {
      v60:    { min: 6, max: 10, baseline: 8 },
      chemex: { min: 9, max: 13, baseline: 11 }
    }
  },
  {
    id: "kingrinder-k6",
    name: "Kingrinder K6",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Mid-tier hand grinder with stainless steel burrs. Count clicks from fully closed.",
    methods: {
      espresso: { min: 40, max: 70, baseline: 55 },
      v60:      { min: 90, max: 130, baseline: 110 },
      chemex:   { min: 120, max: 160, baseline: 140 }
    }
  },
  {
    id: "fellow-ode-gen2",
    name: "Fellow Ode Gen 2",
    type: "stepped",
    stepSize: 1,
    displayFormat: "whole",
    notes: "Designed specifically for pour-over and filter. 31 grind settings on the Gen 2.",
    methods: {
      v60:    { min: 3, max: 7, baseline: 5 },
      chemex: { min: 6, max: 11, baseline: 8 }
    }
  },
  {
    id: "lagom-mini",
    name: "Lagom Mini",
    type: "stepless",
    stepSize: 0.1,
    displayFormat: "decimal",
    notes: "Compact single-dose flat burr grinder. Very precise stepless adjustment.",
    methods: {
      espresso: { min: 0, max: 3, baseline: 1.5 },
      v60:      { min: 4, max: 8, baseline: 6 },
      chemex:   { min: 7, max: 11, baseline: 9 }
    }
  }
];
