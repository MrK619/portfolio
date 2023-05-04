import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/header";

import * as index from "../styles/index.module.css";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <body className={index.main}>
        <NavBar />
        <div className={index.section1}>
          <h1>Hey I am Karthik</h1>
          <h2>a web developer</h2>
        </div>
        <div className={index.wrapper}>
          <h2 className={index.project}>These are some of my projects</h2>
          <div className={index.section2}>
            <Link style={{ textDecoration: "none", color: "#F0F0F0" }} to="/rot">
              <div className={index.grid1}>
                <img
                  alt="dummy"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  width={100}
                  height={20}
                ></img>
                <h1>Rot13</h1>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "#F0F0F0" }} to="/qr-generator">
              <div className={index.grid2}>
                <img
                alt="dummy"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  width={100}
                  height={20}
                ></img>
                <h1>QR Generator</h1>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "#F0F0F0" }} to="/rot">
              <div className={index.grid3}>
                <img
                alt="dummy"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  width={100}
                  height={20}
                ></img>
                <h1>rot13</h1>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "#F0F0F0" }} to="/rot">
              <div className={index.grid4}>
                <img
                alt="dummy"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  width={100}
                  height={20}
                ></img>
                <h1>rot13</h1>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "#F0F0F0" }} to="/rot">
              <div className={index.grid5}>
                <img
                alt="dummy"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  width={100}
                  height={20}
                ></img>
                <h1>rot13</h1>
              </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "#F0F0F0" }} to="/rot">
              <div className={index.grid6}>
                <img
                alt="dummy"
                  src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  width={100}
                  height={20}
                ></img>
                <h1>rot13</h1>
              </div>
            </Link>
          </div>
        </div>
      </body>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Karthik</title>;
