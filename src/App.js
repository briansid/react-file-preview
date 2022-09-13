import FileInput from "./components/FileInput";
import FilePreview from "./components/FilePreview";
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <FileInput onChange={(file) => setFile(file)} />
        <FilePreview>{file}</FilePreview>
      </header>
    </div>
  );
}

export default App;
