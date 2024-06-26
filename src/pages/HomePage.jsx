import React from "react";
import { Editor } from "../components/Editor";
import { NavBar } from "../components/NavBar";
import "../css/HomePage.css";
export const HomePage = ({ setCustomTheme, customTheme }) => {
  return (
    <>
      <NavBar
        setCustomTheme={setCustomTheme}
        customTheme={customTheme}
      ></NavBar>
      <div className="container">
        <Editor id={1}></Editor>
        <Editor id={2}></Editor>
      </div>
    </>
  );
};

{
  /* <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            getFoldGutterLineNumbers(view);
          }}
        >
          Log JSON
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setTextareaData(view.state.doc.lines);
          }}
        >
          Total Lines
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setTextareaData(
              view.state.sliceDoc(
                view.state.selection.main.from,
                view.state.selection.main.to
              )
            );
          }}
        >
          Print selected
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            countChildren(view.state.doc);
          }}
        >
          First Level of Children
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setTextareaData(view.state.selection.main.head);
          }}
        >
          Get Cursor
        </Button> */
}
