import { useState, useEffect } from 'react';
import './App.css';
import './Nav.css';
import './Main.css';

function App() {

  const [Background, SetBackground] = useState("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5")

  return (
    <div className="container grid main-grid">     
    <aside>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="" />
        <h6>menu</h6>
        <nav>
          <ul>
            <li><a href="" className="active"><span>Home</span></a></li>
            <li><a href=""><span>About</span></a></li>
            <li><a href="" ><span>Projects</span></a></li>
            <li><a href=""><span>Contact</span></a></li>
          </ul>
        </nav>
        <h6>projects</h6>
        <nav>
          <ul>
            <li><a href=""><span>React blog</span></a></li>
            <li><a href=""><span>React blog</span></a></li>
            <li><a href="" ><span>React blog</span></a></li>
            <li><a href=""><span>React blog</span></a></li>
          </ul>
        </nav>
    </aside>
    <main>
        <h3>Most recent project</h3>
        <div className="most-recent-project" style={{ backgroundImage: "url(" + Background + ")" }}>
          <div className="mrp-overlay">
              <h2>React blog</h2>
              <p>A simple blog made from React for the front end and Node.js to handle the backend requests.</p>
              <div className="mrp-btns">
                <a href="" className="btn blue">Live project</a>
              <a href="" className="btn border-white">Views docs</a>
              </div>
          </div>
        </div>
    </main>
    </div>
  );
}

export default App;
