import React, {useState} from 'react'
export default function Navbar(props){
   
    return(
        <>
        <header>
            {/* <a className="logo" href="javascript:void(0);"><img src="/images/logo.svg" alt="logo" /></a> */}
            <h2>Mr. Shah Claculator</h2>
            <nav>
                <ul className="nav__links">
                    <li><a href="javascript:void(0);" onClick={()=>props.Navigation("Finance")} >Finance</a></li>
                    <li><a href="javascript:void(0);" onClick={()=>props.Navigation("Stocks")} >Stocks</a></li>
                    <li><a href="javascript:void(0);" onClick={()=>props.Navigation("Maths")} >Maths</a></li>
                </ul>
            </nav>
            <a className="cta" href="javascript:void(0);">Contact</a>
            <p onClick={props.navToggle} className="menu cta">Menu</p>
        </header>
        <div className={props.cls}>
            <a onClick={props.navToggle} href="javascript:void(0);" className="close">&times;</a>
            <div className="overlay__content">
                <a href="javascript:void(0);" onClick={()=>props.Navigation("finance")}>Finance</a>
                <a href="javascript:void(0);" onClick={()=>props.Navigation("stocks")}>Stocks</a>
                <a href="javascript:void(0);" onClick={()=>props.Navigation("maths")}>Maths</a>
            </div>
        </div>
        <script type="text/javascript" src="mobile.js"></script>
        </>
    )
}