import React, { useState } from 'react'


export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");


    }
    const ClearOnClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Removed","success");


    }
    const handleOnChange = (event) => {
        // console.log('change')
        setText(event.target.value);
        
    }
    const handleCopy = () => {
        // var text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed","success");

    }


    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ClearOnClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text summery</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
                <h2>Preview</h2>
                <p> {text.length>0?text:"Nothing to preview it here!!"} </p>

            </div>
        </>
    )
}
