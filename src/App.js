import { useState, useEffect } from 'react';
import './App.css';
import './Nav.css';
import './Main.css';
import './ProfileCard.css';

function App() {
  
  const updateTitle = (title) => {
    const new_title = "Matt Windle | " + title;
    document.title = new_title;
  }
  const [Background, SetBackground] = useState("https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80");

  return (
    <div className="container grid main-grid">     
    <aside>
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
        <h3 className="title">Most recent project</h3>
        <div className="most-recent-project large" style={{ backgroundImage: "url(" + Background + ")" }}>
          <div className="mrp-overlay">
              <h2>React blog</h2>
              <p>A simple blog made from React for the front end and Node.js to handle the backend requests.</p>
              <div className="mrp-btns">
                <a href="#" className="btn blue">Live project</a>
              <a href="#" className="btn border-white">Views docs</a>
              </div>
          </div>
        </div>

        <h3 className="title">Recent projects</h3>
        <div className="grid recent-projects-grid">
          <div>
            <div className="most-recent-project small" style={{ backgroundImage: "url(" + Background + ")" }}></div>
            <h2>React Covid App</h2>
          </div>
          <div>
            <div className="most-recent-project small" style={{ backgroundImage: "url(" + Background + ")" }}></div>
            <h2>React Covid App</h2>
          </div>
          <div>
            <div className="most-recent-project small" style={{ backgroundImage: "url(" + Background + ")" }}></div>
            <h2>React Covid App</h2>
          </div>
        </div>

    <div className="profile-card">
          <img src="https://lh3.googleusercontent.com/PKRoIWUndvfFZmbQgvkIXd87OBPF8OnbGjIodz41ULOUm9-QF0jrVg_omqirZH872eIMEeSXQ9AE5uuALBj4ObLQ3AMNvlJBW2ivFwxkIlLu_4dwPGRsas5LgXho_0zCjRQbov9dl9zJsQTnpP_RbNku-vMjPXaMiPwE8bdhVDTfq1hBILFr6Qc-aPLpawJl-Uy0_QmyZriMA1iUzRtoXImVIP3qs_GwS_GW2Z75wzl4O0xh2q68L25wo2OsJOuqXkNaj45oEDKP-Hs_WdKi_ywC9WiAV1FIOX33vTB9WLBVuUXqasMk-aiu_32-OoiLqwTgDg9Wh3ekcN63UTsSKZEO94wdWilhBmO933LIR9nhdmgrKaxJHTviBp-1XW4p1raR0woA0fJyaRuf0oyGo2GUttn3KrMcA0u9AdBRQyjE4PKMOFnScwP8TdYs0zmW7TAlsQJ5EocRTCrGYVeO1BeIlszLY4bzHfHsDveW7pAZSa9WFWhM7mfgfMn82ZWR3A08KMkf4m2oLIMhXSy8T_M9LrY3SII7FclBx5S94E2r3y0ZAhiFRa05EMP0z41KuYLwOrHsCPPG1CXg8UCuaEkTKJXyYBKzz2dulABmWEiNz95CWR2KHQTFJl7-uSGa3k9_qWkj2j6JguQ9AU9nWt2dE80Em5kuhqS1jJ3ASBW1E402ZAa1xplZYLnw7GML5vpMVtqnMayB_jeW6tdP=w675-h898-no?authuser=0" alt="" />
      <h3>Matt Windle</h3>
      <p>Web devloper & designer</p>
      <ul>
            <li><a href="https://github.com/MattWindle26">github.com/MattWindle26</a></li>
            <li><a href="https://www.instagram.com/mattwindle26/">instagram.com/mattwindle26/</a></li>
      </ul>
    </div>

    </main>
    </div>
  );
}

export default App;
