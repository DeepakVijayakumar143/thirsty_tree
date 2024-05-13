import React, { useRef, useEffect } from "react";
import { Table } from "./Table";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { json } from "@codemirror/lang-json";
import { basicSetup } from "codemirror";
import { getFirstLevelChildren, countChildren } from "../modules/codemirror";
import { useState } from "react";
import { SplitButton } from "./SplitButton";
import "../css/Editor.css";
import { foldAll } from "@codemirror/language";
export const Editor = ({ id }) => {
  const [childCountArray, setChildCountArray] = useState([]);
  const [filter, setFilter] = useState("root");

  const editor = useRef();
  let updateListernerExtension = EditorView.updateListener.of((view) => {
    if (view.docChanged) {
      setChildCountArray([]);
      setFilter("root");
      getFirstLevelChildren(JSON.parse(view.state.doc));
      setChildCountArray(countChildren(JSON.parse(view.state.doc)));
      foldAll(view.state.doc);
    }
  });

  useEffect(() => {
    const startState = EditorState.create({
      doc: " ",
      extensions: [
        keymap.of(defaultKeymap),
        basicSetup,
        json(),
        updateListernerExtension,
      ],
    });

    const view = new EditorView({ state: startState, parent: editor.current });
    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div className="editor-container">
      <div className="editor-widget">
        {/* <SplitButton options={options} handleClick={handleClick}></SplitButton> */}
      </div>
      <div ref={editor}></div>
      <Table
        childCountArray={childCountArray}
        id={id}
        filter={filter}
        setFilter={setFilter}
      ></Table>
    </div>
  );
};
