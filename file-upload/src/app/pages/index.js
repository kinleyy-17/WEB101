import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxSize: 2000000, // 2MB
    multiple: false,
  });

  const handleUpload = async () => {
    if (!acceptedFiles.length) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    try {
      await axios.post("/api/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percent);
        },
      });

      alert("Upload successful!");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Upload (Drag & Drop)</h2>

      {/* 🔽 DROPZONE REPLACES INPUT FIELD */}
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed gray",
          padding: "40px",
          textAlign: "center",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select</p>
      </div>

      {/* Show selected file */}
      {acceptedFiles.length > 0 && (
        <p>Selected File: {acceptedFiles[0].name}</p>
      )}

      <button onClick={handleUpload}>Upload</button>

      <p>Progress: {progress}%</p>
    </div>
  );
}