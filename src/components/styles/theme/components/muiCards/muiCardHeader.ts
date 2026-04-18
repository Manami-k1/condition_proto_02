import type { Components, Theme } from "@mui/material/styles";

export const MuiCardHeader: Components<Theme>["MuiCardHeader"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      position: "absolute",
      bottom: theme.spacing(3.2),
      right: theme.spacing(1.8),
    }),
    title: ({ theme }) => ({
      fontSize: 15,
      fontWeight: theme.typography.fontWeightBold,
      width: "fit-content",
    }),
  },
};
