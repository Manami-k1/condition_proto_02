import { createTheme } from "@mui/material/styles";
import { FONT, FONT_FAMILY, KeyColors } from "./const";
import { MuiCard } from "./theme/components/muiCards";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2Bold: true;
    h2: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: FONT_FAMILY,
    ...FONT,
  },
  components: {
    MuiCard: MuiCard,
    // MuiButton: {
    //   styleOverrides: {
    //     root: {},
    //   },
    //   variants: [
    //     {
    //       props: { variant: "contained" },
    //       style: {},
    //     },
    //     {
    //       props: { variant: "outlined" },
    //       style: {
    //         // color: KeyColors.PRIMARY_600,
    //         "&:hover": {
    //           //   backgroundColor: KeyColors.PRIMARY_700,
    //           //   color: GrayColors.GRAY_00,
    //         },
    //       },
    //     },
    //   ],
    // },
  },
});
