import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./Editor.css";

const EditorFun = ({ initialize, setValueF }) => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("<p>Text your description</p>");

  const body = document.querySelector("#body");
  const iframe = document.querySelector(".tox-edit-area__iframe");
  const contentBody = document.querySelector(".tox-editor-header");
  const menubar = document.querySelector(".tox-menubar");
  const overload = document.querySelector(".tox-toolbar-overlord");
  const toolBarPrimary = document.querySelector(".tox-toolbar__primary");
  const statusbar = document.querySelector(".tox-statusbar");
  const border = document.querySelector("tox-tinymce");
  const selectorBg = document.querySelectorAll(".tox-tbtn--bespoke");
  const labelColor = document.querySelectorAll(".tox-mbtn__select-label");
  const inputChoiceColor = document.querySelectorAll(".tox-tbtn__select-label");
  const wordCountFooterColor = document.querySelector(
    ".tox-statusbar__wordcount"
  );
  const contentText = document.querySelector(".mce-content-body");

  const htmltagAll = document.querySelectorAll(".tox-statusbar__path");
  const borderBody = document.querySelector(".tox-tinymce");

  useEffect(() => {
    const iconSvgColor = document.querySelectorAll(".tox-tbtn svg");
    if (iframe) iframe.style.backgroundColor = "transparent";
    if (contentBody) contentBody.style.backgroundColor = "transparent";
    if (menubar) menubar.style.backgroundColor = "transparent";
    if (overload) overload.style.backgroundColor = "transparent";
    if (toolBarPrimary) toolBarPrimary.style.backgroundColor = "transparent";
    if (statusbar) {
      statusbar.style.backgroundColor = "transparent";
      statusbar.style.borderTop = "1px solid transparent";
    }
    if (border) border.style.border = "2px solid transparent";
    if (selectorBg) {
      [...selectorBg].map(
        (selector) => (selector.style.backgroundColor = "transparent")
      );
      // selectorBg.style.backgroundColor = "transparent";
    }
    if (labelColor) {
      // labelColor.style.color = "#ffffffd9";
      [...labelColor].map((label) => (label.style.color = "#ffffffd9"));
    }
    if (inputChoiceColor) {
      [...inputChoiceColor].map(
        (inputchoice) => (inputchoice.style.color = "#ffffffd9")
      );
    }
    if (wordCountFooterColor) wordCountFooterColor.style.color = "#ffffffd9";
    if (contentText) {
      contentText.style.color = "#ffffffd9";
      console.log(contentText);
      initialValue.style.color = "#ffffffd9";
    }
    if (iconSvgColor) {
      [...iconSvgColor].map((svg) => (svg.style.fill = "#ffffffd9"));
    }
    if (htmltagAll) {
      [...htmltagAll].map((htmltag) => (htmltag.style.color = "#ffffffd9"));
    }
    if (borderBody) borderBody.style.border = "2px solid transparent";
  }, [body, border, iframe, selectorBg, htmltagAll, window.innerWidth]);

  return (
    <Editor
      apiKey="1eexsiwrc00i8rc99wqs0zay6fxn5xqink1b0who7jnedkv1"
      onEditorChange={(newValue, editor) => {
        setValue(newValue);
        setText(editor.getContent({ format: "text" }));
        setValueF(value);
      }}
      initialValue="Text your description"
      value={value}
      onInit={(evt, editor) => {
        setText(editor.getContent({ format: "text" }));
      }}
      init={{
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage  tableofcontents footnotes mergetags autocorrect typography inlinecss",

        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        selector: `textarea`, // change this value according to your HTML
        browser_spellcheck: true,
        contextmenu: false,
        add_form_submit_trigger: false,
        height: "300",
      }}
    />
  );
};

export default EditorFun;
