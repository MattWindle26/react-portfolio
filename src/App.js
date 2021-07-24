import { useState, useEffect } from 'react';
import './App.css';
import './Nav.css';
import './Main.css';

function App() {
  
  const updateTitle = (title) => {
    const new_title = "Matt Windle | " + title;
    document.title = new_title;
  }
  const [Background, SetBackground] = useState("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5")

  return (
    <div className="container grid main-grid">     
    <aside>
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="" /> */}

        <svg viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45.9619 137.886C20.5779 112.502 20.5779 71.346 45.9619 45.9619V45.9619C71.346 20.5779 112.502 20.5779 137.886 45.9619L173.241 81.3173C179.099 87.1751 179.099 96.6726 173.241 102.53L137.886 137.886C112.502 163.27 71.346 163.27 45.9619 137.886V137.886Z" fill="#017AFF" />
          <path d="M77.665 60.5703L93.1875 104.398L108.627 60.5703H124.979V121H112.487V104.481L113.732 75.9683L97.4209 121H88.8711L72.6016 76.0098L73.8467 104.481V121H61.3955V60.5703H77.665Z" fill="white" />
        </svg>

        <h6>menu</h6>
        <nav>
          <ul>
            <li><a href="#" className="active" onClick={() => { updateTitle("Home")}} ><span>Home</span></a></li>
            <li><a href="#" onClick={() => { updateTitle("About") }}><span>About</span></a></li>
            <li><a href="#" onClick={() => { updateTitle("Projects") }}><span>Projects</span></a></li>
            <li><a href="#" onClick={() => { updateTitle("Contact") }}><span>Contact</span></a></li>
          </ul>
        </nav>
        <h6>projects</h6>
        <nav>
          <ul>
            <li><a href="#"><span>React blog</span></a></li>
            <li><a href="#"><span>React Covid app</span></a></li>
            <li><a href="#" ><span>React blog</span></a></li>
            <li><a href="#"><span>React blog</span></a></li>
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
                <a href="#" className="btn blue">Live project</a>
              <a href="#" className="btn border-white">Views docs</a>
              </div>
          </div>
        </div>
    </main>
    </div>
  );
}

export default App;
