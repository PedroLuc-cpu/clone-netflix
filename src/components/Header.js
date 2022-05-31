import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'back':''}>
           <div className="logo">
               <a href="/">
                   <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5-1.png"></img>
               </a>
           </div>

           <div className="header--user">
               <a href="/">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
               </a>
           </div>
        </header>
    )
}


