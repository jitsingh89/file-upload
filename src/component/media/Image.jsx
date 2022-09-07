import React from "react";
import Button from "@mui/material/Button";
import useStyles from "./imageStyle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Thumbs = ({ images, handleCancelCta }) => {
  const styles = useStyles();

  return (
    <div className={styles.thumbContainer}>
      {images.map((file, index) => (
        <div key={file.name} className={styles.imgBox}>
          <img src={file} alt="No found" className={styles.img} />
          <div className={styles.fileName}>{file.name}</div>
          <Button
            className={styles.closeBtn}
            startIcon={<HighlightOffIcon onClick={(i) => handleCancelCta(i, index)} className={styles.closeIcon} />}
          ></Button>
        </div>
      ))}
    </div>
  );
};

export default Thumbs;
