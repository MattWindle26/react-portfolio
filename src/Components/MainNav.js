const MainNav = () => {

    const updateTitle = (title) => {
        const new_title = "Matt Windle | " + title;
        document.title = new_title;
    }   

    return ( 
        <>
            <h6>menu</h6>
            <nav>
                <ul>
                    <li><i class="bi bi-house"></i><a href="#" className="active" onClick={() => { updateTitle("Home") }} ><span>Home</span></a></li>
                    <li><i class="bi bi-person"></i><a href="#" onClick={() => { updateTitle("About") }}><span>About</span></a></li>
                    <li><i class="bi bi-folder"></i><a href="#" onClick={() => { updateTitle("Projects") }}><span>Projects</span></a></li>
                    <li><i class="bi bi-envelope-open"></i><a href="#" onClick={() => { updateTitle("Contact") }}><span>Contact</span></a></li>
                </ul>
            </nav>
        </>
     );
}
 
export default MainNav;