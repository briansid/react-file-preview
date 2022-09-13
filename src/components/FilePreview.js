import React, { useState } from "react";
import PdfView from "./PdfView";

export default function FileInput({ children: file }) {
  const [text, setText] = useState(null);

  function fileSwitcher() {
    switch (file.type) {
      case "application/pdf":
        return <PdfView file={file} />;
      case "text/plain":
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function (e) {
          const text = e.target.result;
          setText(text);
        };
        return <div style={{ whiteSpace: "pre-line" }}>{text}</div>;
      case "image/png":
      case "image/jpeg":
        let src = URL.createObjectURL(file);
        return <img src={src} alt="Input" />;

      default:
        return <p>`File type: ${file.type} is not supported`</p>;
    }
  }

  if (file) {
    return fileSwitcher();
  }
}
