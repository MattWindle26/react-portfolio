import { useState, useEffect } from 'react';
import './App.css';
import './Nav.css';
import './Main.css';
import './ProfileCard.css';
import ProfileCard from './Components/ProfileCard';
import RecentProjects from './Components/RecentProjects';
import MostRecentProject from './Components/MostRecentProject';

function App() {
  
  const updateTitle = (title) => {
    const new_title = "Matt Windle | " + title;
    document.title = new_title;
  }

  return (
    <div className="container grid main-grid">     
    <aside>
        <a href="/" >
          <svg class="logo" width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4264 102.426C-5.00502 78.995 -5.00502 41.005 18.4264 17.5736C41.8579 -5.85786 79.8478 -5.85786 103.279 17.5736L135.099 49.3934C140.957 55.2513 140.957 64.7487 135.099 70.6066L103.279 102.426C79.8478 125.858 41.8579 125.858 18.4264 102.426Z" fill="#017AFF" />
            <path d="M44.936 28.5703L60.4585 72.3984L75.8979 28.5703H92.2505V89H79.7578V72.4814L81.0029 43.9683L64.6919 89H56.1421L39.8726 44.0098L41.1177 72.4814V89H28.6665V28.5703H44.936Z" fill="white" />
          </svg>
        </a>
        <h6>menu</h6>
        <nav>
          <ul>
            <li><i class="bi bi-house"></i><a href="#" className="active" onClick={() => { updateTitle("Home")}} ><span>Home</span></a></li>
            <li><i class="bi bi-person"></i><a href="#" onClick={() => { updateTitle("About") }}><span>About</span></a></li>
            <li><i class="bi bi-folder"></i><a href="#" onClick={() => { updateTitle("Projects") }}><span>Projects</span></a></li>
            <li><i class="bi bi-envelope-open"></i><a href="#" onClick={() => { updateTitle("Contact") }}><span>Contact</span></a></li>
          </ul>
        </nav>
        <h6>projects</h6>
        <nav>
          <ul>
            <li><i class="bi bi-file-code"></i><a href="#"><span>React blog</span></a></li>
            <li><i class="bi bi-file-code"></i><a href="#"><span>React Covid app</span></a></li>
            <li><i class="bi bi-file-code"></i><a href="#" ><span>React blog</span></a></li>
            <li><i class="bi bi-file-code"></i><a href="#"><span>React blog</span></a></li>
          </ul>
        </nav>
    </aside>
    <main>
      <div className="home-projects">
      <MostRecentProject />
      <RecentProjects />
      </div>
    </main>
    <aside>
        <ProfileCard />
    </aside>
    </div>
  );
}

export default App;
