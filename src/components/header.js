import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
 
import * as header from "../styles/header.module.css";
 


const NavBar = () => {
    return (
        
            <header>
                
                <div className={header.nav_container}>
                    
                    <div className={header.nav_right}>
                        <ul>
                            <li><a href="#" >About</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>        
            </header>
        
    );
};

export default NavBar;

