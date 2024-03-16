import React, { useEffect, useRef } from "react";
import initializeCodeMirror from "./codemirror-editor.js";
import "../css/editor.css";
export const CodeEditor = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      initializeCodeMirror(textareaRef.current);
    }
  }, []);
  // initializeCodeMirror(textareaRef.current);

  return (
    <div>
      <textarea ref={textareaRef}></textarea>
    </div>
  );
};
