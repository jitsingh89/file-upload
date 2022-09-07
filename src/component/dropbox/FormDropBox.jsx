import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Thumbs from "../media/Image";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import useStyles from "./FormDropBoxStyle";

const FormDropBox = ({ label, paraText2, paraText1 }) => {
  const styles = useStyles();

  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((element) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevState) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(element);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "imaage/*",
  });

  const handleCreateActionCancelCta = (img, index) => {
    const newFiles = [...images];
    newFiles.splice(index, 1);
    setImages(newFiles);
  };

  return (
    <>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginTop: "20px",
          margin: "0px auto;",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px dashed gray",
          }}
        >
          <div className={styles.dropBox}>{label}</div>
          <div className="dropbox" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <div>
                <p>{paraText1}</p>
              </div>
            ) : (
              <div>
                <CloudUploadOutlinedIcon
                  style={{
                    fontSize: "50px",
                    textAlign: "center",
                    display: "flex",
                    margin: "0px auto",
                  }}
                  className={styles.clousIcon}
                />
                <p>{paraText2}</p>
              </div>
            )}
          </div>
        </div>
        <div className="imageBody">
          <Thumbs
            handleCancelCta={handleCreateActionCancelCta}
            images={images}
          />
        </div>
      </div>
    </>
  );
};

export default FormDropBox;
