import * as React from "react";
import { useState } from "react";
import * as qrgen from "../styles/qrgen.module.css";

const Qrgenarator =()=>{
    const [message,setmessage]=useState("");
    const [img,setimg] = useState("https://api.qrserver.com/v1/create-qr-code/?data=helloworld&amp;size=200x200");
    const handleclick=(event) => {
        setimg(`https://api.qrserver.com/v1/create-qr-code/?data=${message}&amp;size=200x200`);
        console.log(img);
        event.preventDefault();
    }
    return( 
        
            <div className={qrgen.darktheme}>
                
                <form >
                <h1 id={qrgen.h1}>QR Generator</h1>
                <img id={qrgen.img} src={img} width={200} height={200} alt="Qr" style={{display: 'block'}}></img>
                
                
                <input id={qrgen.input} value={message} onChange={e=>{
                    setmessage(e.target.value);
                }}></input>
                <button id = {qrgen.btn} onClick={handleclick} style={{display: 'block'}}>Generate QR</button>
                </form>
                </div>
        
    )
}

export default Qrgenarator;