import React, {useState}from 'react'

    export default function TextForm(props) {

        const [text,setText]=useState("Enter Text Here");

        const convertUpperCase = ()=>{
            let newText = text.toUpperCase();
            setText(newText) ;
            props.showAlert("Converted to UpperCase","success : ")
        }

        const convertLowerCase = ()=>{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to LowerCase","success : ")
        }

        const clearText = ()=>{
            setText("") ;
            props.showAlert("Text Cleared","success : ")
        }

        const eachWordCapital=()=>{
            const arr = text.split(" ")
            let newText = arr.map(ch=>ch.charAt(0).toUpperCase() + ch.slice(1)).join(" ")
            setText(newText)
        }


        const handleOnChange = (event)=>{
            setText(event.target.value)
        }

    return (
        <>
         <div className='conatiner' style={{color : props.mode === 'light' ? '#042743' : 'white'}} >
            <h1>{props.heading}</h1>
            <div className='mb-3'>
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'light' ? 'white' : '#999999' , color : props.mode==='light'?'#042743':'white'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button type="button" onClick={convertUpperCase} className="btn btn-primary my-4 mx-3">Convert To UpperCase</button>
            <button type="button" onClick={convertLowerCase} className="btn btn-primary my-4 mx-3">Convert To LowerCase</button>
            <button type="button" onClick={clearText} className="btn btn-primary my-4 mx-3">Clear Text</button>
            <button type="button" onClick={eachWordCapital} className="btn btn-primary my-4 mx-3">Convert Each Word Capital</button>
            </div>
        </div>
        <div className='container'style={{color : props.mode === 'light' ? '#042743' : 'white'}}>
            <h2>Text Summery</h2>
            <p>Word : {text.split(" ").length} & Charecter : {text.length}</p>

        </div>

        <div className='container' style={{color : props.mode === 'light' ? '#042743' : 'white'}}>
            <h2>Text Preview</h2>
            <p>{text.length> 0 ? text : 'Enter something abouve to Preview it'}</p>

        </div>
        </>
    )
    }
