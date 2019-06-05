import React from "react"
import { Link } from "gatsby"

export default() => (
    <nav>
        <Link to="/">Index</Link>
        <Link to="/about/">About</Link>
        <Link to="/blog/">Blog</Link>
    </nav>
)