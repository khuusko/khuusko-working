import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import layoutStyles from "./layout.module.css"

export default ({children}) => (
    <div className={layoutStyles.main}>
        <Header />
        <div className={layoutStyles.container}>
            {children}
        </div>
        <Footer />
    </div>
)