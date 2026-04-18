import { Box, Card, Card as MUICard, styled } from "@mui/material";
import type { CardProps as MuiCardProps } from "@mui/material";
import type { FC } from "react";
import { DAILY_CARD_STATUSES_SX, DAILY_CARD_STATUS_DOT_SX } from "./const";
import {
  DAILY_CARD_CONTENT_SX,
  DAILY_CARD_DATE_SX,
  DAILY_CARD_MOOD_SX,
  DAILY_CARD_ROOT_SX,
} from "./const";

// type Mood = "veryBad" | "bad" | "normal" | "good" | "veryGood";

// type CalendarCardProps = Omit<MuiCardProps, "variant"> & {
//   variant: "calendar";
//   mood?: Mood;
// };

// type DefaultCardProps = Omit<MuiCardProps, "variant"> & {
//   variant?: Exclude<MuiCardProps["variant"], "calendar">;
//   mood?: never;
// };

// const CardRoot = styled(MUICard, {
//   shouldForwardProp: (prop) => prop !== "mood",
// })<{ mood?: Mood }>(({ theme, mood }) => {
//   const color = mood ? theme.palette.mood[mood] : theme.palette.mood.default;

//   return {
//     boxShadow: `inset 0 -6px 0 ${color}`,

//     "&::after": {
//       ...(mood !== undefined && {
//         backgroundColor: color,
//       }),

//       ...(mood === undefined && {
//         display: "none",
//       }),
//     },
//   };
// });

// export const Card: FC<Props> = ({ mood, children, ...props }) => {
//   return (
//     <CardRoot mood={mood} {...props}>
//       {children}
//     </CardRoot>
//   );
// };

export const UiDailyCard = () => {
  return (
    // <Box sx={DAILY_CARD_ROOT_SX}>
    //   <Box sx={DAILY_CARD_CONTENT_SX}></Box>
    //   <Box sx={DAILY_CARD_DATE_SX}></Box>
    //   <Box sx={DAILY_CARD_STATUSES_SX}>
    //     <Box sx={DAILY_CARD_STATUS_DOT_SX}></Box>
    //   </Box>
    //   <Box sx={DAILY_CARD_MOOD_SX}></Box>
    // </Box>
    <Card variant="calendar">aaa</Card>
  );
};
