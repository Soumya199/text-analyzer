import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  function handleOnclick() {
    if (text === "") {
    } else {
      const res = text.toUpperCase();
      console.log("buttonclicked", res);
      setText(res);
      props.allert("Text changed to Upper Case", "success");
    }
  }

  function handleOnChange(event) {
    setText(event.target.value);
    console.log("changed");
  }
  function clearOnclick() {
    setText("");
    props.allert("Text Cleared", "danger");
  }
  function copyOnclick() {
    navigator.clipboard.writeText(text);
    props.allert("Text Copied to clipboard", "success");
    document.getSelection().removeAllRanges()
  }
  function removeWSOnclick() {
    var repl = text.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    setText(repl);
    props.allert("whitespace removed", "warning");
  }
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnclick}>
          Convert
        </button>
        <button className="btn btn-primary mx-2" onClick={clearOnclick}>
          ClearText
        </button>
        <button className="btn btn-primary mx-2" onClick={copyOnclick}>
          copytoClipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={removeWSOnclick}>
          Remove White Space
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summery</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length} time to Read</p>
      </div>
    </>
  );
}
