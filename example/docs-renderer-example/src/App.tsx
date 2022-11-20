import React from "react";
import { useEffect, useState } from "react";
import { DocumentViewer } from "react-docs-renderer";
import "./App.css";

function App() {
  const [file, setFile] = useState<string | undefined>(undefined);

  useEffect(() => {
    setFile("fileTest.pdf");
  }, []);

  return <div className="App">{file && <DocumentViewer file={file} />}</div>;
}

export default App;
