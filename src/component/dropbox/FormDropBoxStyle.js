import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  dropBox: {
    display: "flex",
    alignItems: "flex-end",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: "10px",
    fontSize: "16px",
    color: "#666666",
  },
  clousIcon: {
    color: "#999999",
    width: "100px",
    height: "100px",
  },
  imageBody: {
    display: "flex",
    flexWrap: "wrap",
  },
  dropBoxBrowse: {
    color: "#1B436E",
    textDecoration: "none",
  },
});

export default useStyles;
