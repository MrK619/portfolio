import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/header";
import { Link } from "gatsby";
import * as index from "../styles/index.module.css";

 


const IndexPage = () => {
  return (
    <main>
      <body
        className={index.main}
         
      >
        <NavBar />
        <h1>Karthik Ambani R</h1>
        <p>
          You can find me on GitHub:{" "}
          <a href="https://github.com/MrK619">https://github.com/MrK619</a>{" "}
        </p>
        <Link to="/contact">Contact me</Link>
        
      </body>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Karthik</title>;
