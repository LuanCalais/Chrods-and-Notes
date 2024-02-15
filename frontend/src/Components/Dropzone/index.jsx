import { useCallback } from "react";
import styles from "./Dropzone.module.css";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ message }) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <h6>{message}</h6>
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drag your file here</p>
        ) : (
          <p>Drag and drop your file here, or click to select</p>
        )}
      </div>
    </>
  );
};

export default Dropzone;
