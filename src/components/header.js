import React from "react"
import {Link} from "gatsby"
import headerStyles from "../components/header.module.css"
import logo from "../images/glasses.png"

export default () => (
    <header className={headerStyles.siteHeader}>
        <div className={headerStyles.headerItem2}>
            <Link to="/about/">About</Link>
        </div>
        <div className={headerStyles.headerItem1}>
            <img src={logo} className={headerStyles.logoImg} alt="glasses-logo" />
        </div>
        <div className={headerStyles.headerItem3}>
            <Link to="/blog/">Blog</Link>
        </div>
    </header>
)