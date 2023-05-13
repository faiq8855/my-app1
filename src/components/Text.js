import React, {useState} from 'react'

export default function Text(props) {
    const handleUpClick =() =>{
        let newtext = text.toUpperCase();
        setext(newtext);
        props.showAlert("Converted to upper case", "success");
    }

    const lowerCase =() =>{
        let newtext = text.toLocaleLowerCase();
        setext(newtext);
    }

    const copyText =() =>{
        let copy = document.getElementById("my-Box");
        copy.select();
        navigator.clipboard.writeText(copy.value);
    }

    const removeGap =()=>{
      
        let spc = text.split(/[" "]+/);
        setext(spc.join(" "));
    }

    const ClickToChange = (event) =>{
        setext(event.target.value);
    }
    const [text, setext] = useState('');
    return(
             <>
               <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
                      <h1 >{props.heading}</h1>
                   <div className="mb-3">
                       <textarea value = {text} className="form-control" style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'? 'white':'#042743'}} id="my-Box" onChange={ClickToChange} rows="8"></textarea>
                     </div>
                     <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Up</button>
                     <button className="btn btn-primary mx-1" onClick={lowerCase}>Convert Lower Case</button>
                     <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
                     <button className="btn btn-primary mx-1" onClick={removeGap}>Remove White Space</button>
               </div>
               <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
                <h1>Here your text summary</h1>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{0.008 * text.split("").length} take minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Text Here"}</p>
               </div>
             </>
        
    );
}