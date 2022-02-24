import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
      
        console.log("upper case envoked");
        let mahajan=text.toUpperCase();
        setText(mahajan);
        props.showAlert("you want to  upper case","success");
    }
    const handleOnChange =(event)=>{
        console.log("ON CHANGE");
        setText(event.target.value);//NOW I ABLE TO CHANGE THE TEXT IN THE BOX
    }
    const handlelowClick =()=>{
      console.log("LOWER case envoked");
        let mahajans=text.toLowerCase();
        setText(mahajans);
    }
    const  handleClear =()=>{
      let gupta=text.replace(text," ");
     
      setText(gupta);
    }
   
    const handlereverse =()=>{
      let aman=[];
      let lengths=text.length-1;
      for(let i=lengths;i>=0;i--){
        aman.push(text[i]);
      }
      setText(aman.join(""));
    
    }
    const handleColor =()=>{
     let aman1=document.getElementById("myBox");
     aman1.style.color="red";
     aman1.style.fontFamily="italic"
    }
    const handleNormal =()=>{
      let aman2=document.getElementById("myBox");
      aman2.style.color="black";
      aman2.style.fontFamily="Normal";
    }
    const handleCopy =()=>{
      let aman3=document.getElementById("myBox");
      aman3.select();
navigator.clipboard.writeText(aman3.value);
    }
    const[text,setText]=useState("");
    // text="aman gupta" its wrong youcannnot update this
    // for updationyou can use only setText for updation
    // setText("new text put here");
  return (
    <>
     <div className='container'style={{color : props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3 ">
  {/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text}></textarea>
</div>
<button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-info mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
<button className="btn btn-danger mx-1" onClick={handleClear}>Clear the text area</button>
<button className="btn btn-primary mx-1" onClick={handlereverse}>Reverse Text</button>
<button className="btn btn-success mx-1" onClick={handleColor}>Red Text+Italic font</button>
<button className="btn btn-warning mx-1" onClick={handleNormal}>Normal Text</button>
<button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy Text</button>
</div>
    
    <div className="container my-4 mx-1" style={{color : props.mode==='dark'?'white':'black'}}>
      <div className="row">
      <h2>your text summary</h2>
      <p>
        {/* to calcilate the length and number of words */}
       {text.length!==0?text.split(" ").length-1:0} words and {text.length!==0?text.length-1:0} characters 
      </p>
      <p>
        {text.length>0?0.008*text.split(" ").length:0} Minute taken by user to read
      </p>
      <h1>preview</h1>
      <div className="col-sm-12">
      <p id="mahajan">
        {text.length>0?text:"please enter something to preview"}
      </p>
      </div>
    
    </div>
    
      </div>
      
    </>
   
  )
}
