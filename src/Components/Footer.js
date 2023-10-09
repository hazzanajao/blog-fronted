import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();
    return(
<footer  className="footer-date">
    <div style={{textAlign:"center",backgroundColor:"black ",padding:"25px", color:"white"}}>
        Copyright © {currentYear}
    </div>
</footer>

        )
}

export default Footer;
