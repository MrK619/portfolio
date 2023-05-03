import * as React from "react";
import { useState } from "react";
import * as rot from "../styles/rot.module.css";
import Navbar from "../components/header";

const Rot = () => {
  const [message, setmessage] = useState(" ");
  const [key, setkey] = useState(" ");
  const handlesumbit = () => {
    setkey(
      message.replace(/[a-zA-Z]/g, (c) =>
        String.fromCharCode(
          ((c = c.charCodeAt(0) + 13) > 90 && c < 97) || c > 122 ? c - 26 : c
        )
      )
    );
  };
  const handle = (event) => {
    setmessage(event.target.value);
  };
  return (

    <main>
      
      <body className={rot.darktheme}>
        <div >
            <h1>Rot13 Algorithm</h1>
          <input
            type="text"
            id={rot.input}
            value={message}
            onChange={handle}
          ></input>
          <button onClick={handlesumbit} id={rot.btn}>
            encode/decode
          </button>

          <input type="text" value={key} id={rot.output} readOnly></input>
        </div>
      </body>
    </main>
  );
};

export default Rot;
