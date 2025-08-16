import React, { useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  useEffect(() => {
    const starCount = 200;
    const starContainer = document.querySelector('.App');

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.opacity = Math.random();
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Hello World!</h1>
        <p>🚀 XI PPLG 2</p>
      </header>
      <footer>
        Created by <strong>gloisji</strong> with <span>❤</span>
      </footer>
    </div>
  );
}

export default App;
