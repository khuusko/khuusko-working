import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import PageHeader from "../components/pageHeader"

export default () => (
    <div id="site">
        <Header />
        <body>
            <PageHeader headerText="About" />
        </body>
        <Footer />
    </div>
)