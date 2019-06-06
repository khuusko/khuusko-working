import React from "react"
import layoutStyles from "./layout.module.css"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({children}) => (
    <div className={layoutStyles.main}>
        <Header className={layoutStyles.header} />
        <div className={layoutStyles.container}>
            {children}
        </div>
        <Footer className={layoutStyles.footer} />
    </div>
)