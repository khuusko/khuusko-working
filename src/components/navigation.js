import React from "react"
import { Link } from "gatsby"
import navStyles from "../components/navstyles.module.css"

export default() => (
    <nav>
        <ul className={navStyles.navList}>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
        </ul>
    </nav>
)