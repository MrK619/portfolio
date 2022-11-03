import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "gatsby";


const IndexPage = () => {
  return (
    <main>
      <h1>Karthik Ambani R</h1>
      <p>
        You can find me on GitHub:{" "}
        <a href="https://github.com/MrK619">https://github.com/MrK619</a>{" "}
      </p>
      <Link href="/contact">Contact me</Link>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Karthik</title>;
