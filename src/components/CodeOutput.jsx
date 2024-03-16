import React, { useRef } from "react";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";

export const CodeOutput = () => {
  const inputTextareaRef = useRef(null);
  const outputTextareaRef = useRef(null);

  const compileCode = () => {
    const inputCode = inputTextareaRef.current.value;
    const editorState = EditorState.create({
      doc: inputCode,
      extensions: [basicSetup, javascript()],
    });

    const view = new EditorView({
      state: editorState,
      parent: outputTextareaRef.current,
    });
  };

  return (
    <div>
      <textarea ref={inputTextareaRef} rows="10" cols="50" />
      <button onClick={compileCode}>Compile</button>
      <textarea ref={outputTextareaRef} rows="10" cols="50" readOnly />
    </div>
  );
};
