import React from "react"
import {Link} from "gatsby"
import headerStyles from "../components/header.module.css"

export default () => (
    <header className={headerStyles.siteHeader}>
        <div className={headerStyles.headerItem2}>
            <Link to="/about/">About</Link>
        </div>
        <div className={headerStyles.headerItem1}>
            <h1>KAISA HUUSKO</h1>
        </div>
        <div className={headerStyles.headerItem3}>
            <Link to="/blog/">Blog</Link>
        </div>
    </header>
)