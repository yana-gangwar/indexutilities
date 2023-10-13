import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
   // console.log("upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Case","Success");
  };
  const handleLoClick = () => {
    // console.log("upper case was clicked");
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("Converted To Lower Case","Success");


   };
   const handleClearClick = () => {
    // console.log("upper case was clicked");
     let newText = '';
     setText(newText);
     props.showAlert("Cleared Text","Success");

   };
   const handleCopy = () => {
    // console.log("upper case was clicked");
     var text = document.getElementById('myBox');
     text.select()
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied","Success");
   };
 


  const handleOnChange = (event) => {
    console.log("upper case was clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
    <div  className="container" style={{color: props.mode==='dark'?'white':'black'}}     >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          rows="8"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className=" btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>

      <button className=" btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>

      <button className=" btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className=" btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
    </div>
  
<div className="container my-4"   style={{color: props.mode==='dark'?'white':'black'}}           >
<h2>Your text summary</h2>
<p>{text.split(" ").length} words, {text.length} characters</p>
<p>  {0.008*text.split(" ").length}  Minutes Read </p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>

</>











  );
}
