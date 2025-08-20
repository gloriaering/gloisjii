import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Article from "./article.js";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    if (page === "home") {
      const starCount = 200;
      const starContainer = document.querySelector(".App");

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.opacity = Math.random();
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starContainer.appendChild(star);
      }
    }
  }, [page]);

  if (page === "article") {
    return <Article onBack={() => setPage("home")} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Hello World!</h1>
        <p>🚀 create by glory</p>

        <button className="btn-glow" onClick={() => setPage("article")}>
          Baca Artikel
        </button>
      </header>
      <footer>
        © {new Date().getFullYear()} gloryaering. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
