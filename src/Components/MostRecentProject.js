import { useState } from 'react';

const MostRecentProject = () => {
    const [Background, SetBackground] = useState("https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80");


    return (
        <>
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
        </>
    );
}
 
export default MostRecentProject;