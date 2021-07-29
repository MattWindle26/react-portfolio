const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="pc-top">
                <img src="https://lh3.googleusercontent.com/PKRoIWUndvfFZmbQgvkIXd87OBPF8OnbGjIodz41ULOUm9-QF0jrVg_omqirZH872eIMEeSXQ9AE5uuALBj4ObLQ3AMNvlJBW2ivFwxkIlLu_4dwPGRsas5LgXho_0zCjRQbov9dl9zJsQTnpP_RbNku-vMjPXaMiPwE8bdhVDTfq1hBILFr6Qc-aPLpawJl-Uy0_QmyZriMA1iUzRtoXImVIP3qs_GwS_GW2Z75wzl4O0xh2q68L25wo2OsJOuqXkNaj45oEDKP-Hs_WdKi_ywC9WiAV1FIOX33vTB9WLBVuUXqasMk-aiu_32-OoiLqwTgDg9Wh3ekcN63UTsSKZEO94wdWilhBmO933LIR9nhdmgrKaxJHTviBp-1XW4p1raR0woA0fJyaRuf0oyGo2GUttn3KrMcA0u9AdBRQyjE4PKMOFnScwP8TdYs0zmW7TAlsQJ5EocRTCrGYVeO1BeIlszLY4bzHfHsDveW7pAZSa9WFWhM7mfgfMn82ZWR3A08KMkf4m2oLIMhXSy8T_M9LrY3SII7FclBx5S94E2r3y0ZAhiFRa05EMP0z41KuYLwOrHsCPPG1CXg8UCuaEkTKJXyYBKzz2dulABmWEiNz95CWR2KHQTFJl7-uSGa3k9_qWkj2j6JguQ9AU9nWt2dE80Em5kuhqS1jJ3ASBW1E402ZAa1xplZYLnw7GML5vpMVtqnMayB_jeW6tdP=w675-h898-no?authuser=0" alt="" />
                <h3>Matt Windle</h3>
                <p>Web developer & designer</p>
            </div>
            <div className="pc-bottom">
                <ul className="profile-links">
                    <li>
                        <i class="bi bi-github"></i>
                        <a href="https://github.com/MattWindle26">MattWindle26</a></li>
                    <li>
                        <i class="bi bi-instagram"></i>
                        <a href="https://www.instagram.com/mattwindle26/">MattWindle26</a></li>
                    <li>
                        <i class="bi bi-linkedin"></i>
                        <a href="https://www.linkedin.com/in/mattwindle/">MattWindle</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default ProfileCard;