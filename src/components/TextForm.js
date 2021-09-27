import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked ", text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleOnChange = (event)=>{
        console.log("Handle on change");
        setText(event.target.value);
        
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#032234'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" 
                 style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#032234'}}/>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#032234'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} to read the words</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textbox'}</p>
        </div>
        </>
    )
}
