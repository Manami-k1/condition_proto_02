import type { Components, Theme } from "@mui/material/styles";

import "@mui/material/Card";

export const MuiCard: Components<Theme>["MuiCard"] = {
  variants: [
    {
      props: { variant: "calendar" },
      style: ({ theme }) => ({
        padding: theme.spacing(1.4, 1),
        background: "#ffffffdd",
        boxShadow: "none",
        position: "relative",
        isolation: "isolate",
        aspectRatio: "7 / 8",
        overflow: "hidden",
        borderRadius: Number(theme.shape.borderRadius) * 1.5,

        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          clipPath: "polygon(0 100%, 0 76%, 40% 100%)",
        },
      }),
    },
  ],
};
