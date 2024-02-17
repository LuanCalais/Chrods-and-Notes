import { useCallback, useState } from "react";
import styles from "./Dropzone.module.css";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";

const Dropzone = ({
  message,
  maxFilesSize,
  acceptedTypeFiles = 261676,
  onUpload,
  setBanner,
}) => {
  const [showDropzone, setShowDropzone] = useState(true);
  const [localFile, setLocalFile] = useState(null);

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

    onUpload(acceptedFiles[0]);
    setLocalFile(acceptedFiles[0]);
    setShowDropzone(false);
  }, []);

  const removeImage = () => {
    setShowDropzone(true);
    setLocalFile(null);
    setBanner(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      {showDropzone ? (
        <div>
          <h6>{message}</h6>
          <div {...getRootProps()} className={styles.dropzone}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drag your file here</p>
            ) : (
              <p>Drag and drop your file here, or click to select</p>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.image} onClick={removeImage}>
          <div className={styles.icon}>
            <i className="bx bx-trash"></i>
          </div>
          <img src={URL.createObjectURL(localFile)} alt={localFile.name} />
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Dropzone;
