import type { Theme } from "@mui/material";

export const DAILY_CARD_ROOT_SX = (theme: Theme) => ({
  p: theme.spacing(1.4, 1),
  background: "#ffffffdd",
  boxShadow: "none",
  position: "relative",
  isolation: "isolate",
  aspectRatio: "7 / 8",
  overflow: "hidden",
  borderRadius: Number(theme.shape.borderRadius) * 1.5,

  //   "&::after": {
  //     content: '""',
  //     position: "absolute",
  //     inset: 0,
  //     clipPath: "polygon(0 100%, 0 76%, 40% 100%)",
  //   },
});

export const DAILY_CARD_DATE_SX = {};

export const DAILY_CARD_STATUSES_SX = {};

export const DAILY_CARD_STATUS_DOT_SX = {};

export const DAILY_CARD_CONTENT_SX = {};

export const DAILY_CARD_MOOD_SX = {};
