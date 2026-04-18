import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    mood: {
      veryBad: string;
      bad: string;
      normal: string;
      good: string;
      veryGood: string;
      default: string;
    };
  }

  interface PaletteOptions {
    mood?: {
      veryBad?: string;
      bad?: string;
      normal?: string;
      good?: string;
      veryGood?: string;
      default?: string;
    };
  }
}

export {};
