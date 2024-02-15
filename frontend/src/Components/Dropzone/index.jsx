import { useCallback } from "react";
import styles from "./Dropzone.module.css";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";

const Dropzone = ({ message, maxFilesSize, acceptedTypeFiles = 261676 }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const hasAcceptedExtensionsExtension =
      Number(acceptedTypeFiles.indexOf(acceptedFiles[0].type)) !== -1
        ? true
        : false;

    if (
      acceptedFiles[0].size > maxFilesSize ||
      !hasAcceptedExtensionsExtension
    ) {
      toast.error("Type unsuported or file is too large", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

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
      <ToastContainer />
    </>
  );
};

export default Dropzone;
