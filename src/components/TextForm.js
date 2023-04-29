import React from "react";
import { useState } from "react"; //usestate will help to make new state *variable* and *setstate fun*

const TextForm = (props) => {
  //props is used to pass values fromm app.js to components
  const handleUpClick = () => {
    console.log("uppper case was clicked " + text);

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Upper Case", "success")
    
  };

  const handleLoClick = () => {
    console.log("lower case was clicked " + text);

    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleELPClick = () => {
    console.log("Each Letter Uppercase Clicked");
    let newText = text.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setText(newText);
  };
  /* word.splice(1) is a method used on an array in JavaScript. It removes elements from the array starting at the index specified as the first argument, and then continues removing elements for the number of elements specified as the second argument. If the second argument is not provided, it will remove all elements starting from the specified index.

In the case of word.splice(1), it will remove the first element of the array word. It is important to note that the splice() method modifies the original array and returns the removed elements as a new array. If you just want to remove an element from an array without modifying the original array, you can use the slice() method instead.*/
  
  const handleClearClick= () =>{
    console.log("clear clicked");
    setText("");
  }
  const handleOnChange = (e) => {
    console.log("on changed clicked");
    setText(e.target.value); //on change text was the value of text area, which is here set to text means we are updating  the text comes from textarea value
  };
   const countA = () => {
    const count = (text.match(/a/gi) || []).length;
    return count;
  };

  const [text, setText] = useState(""); //text is a variable, set text is a function used to update texxt variable, in react you cant update variable directly you have to use function  to update varible
  const aCount = countA(); // it has to be called here 
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-group">
          {/* on change will help us to enter text dynamically */}
          <textarea style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}}
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            value={text}
            rows="10"
          ></textarea>
        </div>
        <div className="container">
        {/* onclick the text value gathered from onchange funtion will be converted to uppercase using newText varible and that newtext varible set to the text variable */}
        <button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-3 my-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-3 my-2" onClick={handleELPClick}>
          Convert To EachLetterToUpper
        </button>
        <button className="btn btn-primary mx-3 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        </div>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {text.split(" ").length}{" "}
          {/* split(" ") splits string which end with blanck space and *add them seperately in an array .length  will help us to  find the length of the array which is actual number of words in entered text*  */}{" "}
          Words, {text.length}{" "}
          {/* To find the number of charecters we use * text.lenth here */}{" "}
          Charecters
        </p>
        <p> {.008 * text.split(" ").length } Minutes To Read </p>
        <h2>Preview</h2>
        {/* preview only text enters or else it shows "enter text to preview here" */}
        <p> {text.length>0 ? text: "Enter Text To Preview Here"} </p> 
        <p>Number of a's in "{text}" is: {aCount}</p>
      </div>
    </>
  );
};

export default TextForm;
