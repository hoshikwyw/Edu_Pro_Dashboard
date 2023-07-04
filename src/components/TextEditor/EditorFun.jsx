import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./Editor.css";
// import { document } from "postcss";

const EditorFun = ({ initialize, setValueF }) => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("<p>Text your description</p>");

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
