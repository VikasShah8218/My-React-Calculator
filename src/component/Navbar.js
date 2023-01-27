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
            {/* <a className="logo" href="javascript:void(0);"><img src="/images/logo.svg" alt="logo" /></a> */}
            <h2>Mr. Shah Claculator</h2>
            <nav>
                <ul className="nav__links">
                    <li><a href="javascript:void(0);">Finance</a></li>
                    <li><a href="javascript:void(0);">Maths</a></li>
                    <li><a href="javascript:void(0);">Health</a></li>
                </ul>
            </nav>
            <a className="cta" href="javascript:void(0);">Contact</a>
            <p onClick={test} className="menu cta">Menu</p>
        </header>
        <div className={cls}>
            <a onClick={test} href="javascript:void(0);" className="close">&times;</a>
            <div className="overlay__content">
                <a href="javascript:void(0);">Finance</a>
                <a href="javascript:void(0);">Maths</a>
                <a href="javascript:void(0);">Health</a>
            </div>
        </div>
        <script type="text/javascript" src="mobile.js"></script>
        </>
    )
}