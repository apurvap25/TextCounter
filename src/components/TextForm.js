import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
       // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");
    }
    const handleLowClick=()=>{
      // console.log("Uppercase was clicked" + text);
       let newText=text.toLowerCase();
       setText(newText);
       props.showAlert("converted to lowercase!","success");
   }
   const setClear=()=>{
    // console.log("Uppercase was clicked" + text);
     let newText=(" ")
     setText(newText);
     props.showAlert("Cleared text!","success");
    }
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!","success");
    }
    const handleOnChange=(event)=>{
       // console.log("The change");
        setText(event.target.value); 
    }
 
    const [text, setText]= useState('');
   // text="new text"; //wrong way to change the state
    //setText("New text"); //correct way 
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#04274'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={setClear}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text.split(".").length} sentences</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
