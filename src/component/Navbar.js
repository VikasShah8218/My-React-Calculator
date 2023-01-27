import React, {useState} from 'react'
export default function Navbar(){
    const [cls,setCls] = useState("overlay")
    // const openMenu = () =>{
    //     setCls("overlay overlay--active");
    // }
    // const closeMenu = () =>{
    //     setCls("overlay");
    // }
    const test =() =>{
        if (cls==="overlay"){
            setCls("overlay overlay--active");
        }
        else if( cls === "overlay overlay--active"){
            setCls("overlay");
        }
    }
    return(
        <>
        <header>
            {/* <a className="logo" href="/"><img src="/images/logo.svg" alt="logo" /></a> */}
            <h2>Mr. Shah Claculator</h2>
            <nav>
                <ul className="nav__links">
                    <li><a href="/">Finance</a></li>
                    <li><a href="/">Maths</a></li>
                    <li><a href="/">Health</a></li>
                </ul>
            </nav>
            <a className="cta" href="/">Contact</a>
            <p onClick={test} className="menu cta">Menu</p>
        </header>
        <div className={cls}>
            <a onClick={test} href="/" className="close">&times;</a>
            <div className="overlay__content">
                <a href="/">Finance</a>
                <a href="/">Maths</a>
                <a href="/">Health</a>
            </div>
        </div>
        <script type="text/javascript" src="mobile.js"></script>
        </>
    )
}