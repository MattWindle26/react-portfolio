import { useState, useEffect } from 'react';

const RecentProjects = () => {
    const [Background, SetBackground] = useState("https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80");
    return (
        <>
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
                <div>
                    <div className="most-recent-project small" style={{ backgroundImage: "url(" + Background + ")" }}></div>
                    <h2>React Covid App</h2>
                </div>
            </div>
        </>
    );
}
 
export default RecentProjects;