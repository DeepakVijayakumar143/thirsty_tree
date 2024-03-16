import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { json } from "@codemirror/lang-json";
import { javascript } from "@codemirror/lang-javascript";

const initializeCodeMirror = (textareaElement) => {
  const view = new EditorView({
    state: EditorState.create({
      doc: textareaElement.value,
      contentHeight: 0,
      extensions: [basicSetup, json(), EditorState.tabSize.of(100)],
    }),
    parent: textareaElement.parentElement,
  });
  const theme = EditorView.theme({
    ".cm-activeLine": {
      backgroundColor: "var(--codemirror-active-line)",
    },
    ".cm-content": {
      height: "var(--codemirror-height)",
    },
    ".cm-scroller": {
      overflow: "hidden",
    },
    ".cm-wrap": {
      height: "var(--codemirror-height)",
      border: "1px solid silver",
    },
  });

  textareaElement.style.display = "none";
};

export default initializeCodeMirror;
