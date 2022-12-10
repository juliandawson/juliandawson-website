import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>
        <p>
          Julian Dawson, CTO at{" "}
          <a href="https://www.shma.co.uk/" target="_blank" rel="noreferrer">
            Shakespeare Martineau
          </a>
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/juliandawsonuk/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/juliandawson/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p>
          &copy; Julian Dawson {new Date().getFullYear()}{" "}
          <a href="mailto:hello@juliandawson.co.uk">hello@juliandawson.co.uk</a>
        </p>
      </div>
    </div>
  );
}

export default App;
