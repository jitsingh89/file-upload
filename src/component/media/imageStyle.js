import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  thumbContainer: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "5px",
  },
  imgBox: {
    width: "100px",
    marginRight: "0px",
    position: "relative",
  },
  img: {
    width: "82px",
    height: "55px",
    borderRadius: "10px",
    marginTop: 10,
  },
  fileName: {
    color: "#1b436e",
  },
  closeBtn: {
    position: "absolute",
    top: "1px",
    right: "-10px",
    justifyContent: "flex-end",
    padding: "0px",
    margin: "0px",
    zindex: "9",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  closeIcon: {
    color: "#000000",
  },
});

export default useStyles;
