import FusePageCarded from "@fuse/core/FusePageCarded";
import { styled } from "@mui/material/styles";

export const FusePageCardPwaLayout = styled(FusePageCarded)(({ theme }) => ({
  "& .FusePageCarded-header": {
    minHeight: 72,
    height: 72,
    marginTop: "8px",

    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      minHeight: 136,
      height: 136,
    },
  },
  "& .FusePageCarded-content": {
    display: "flex",
  },
  "& .FusePageCarded-contentCard": {
    marginTop: "11px",
    overflow: "hidden",
  },
  "& .FusePageCarded-topBg": {
    background:
      "linear-gradient(90deg, rgba(29,85,125,1) 4%, rgba(10,90,124,1) 57%, rgba(31,82,116,1) 74%, rgba(7,79,129,1) 100%)",
  },
}));
