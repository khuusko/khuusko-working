import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"
import PageHeader from "../components/pageHeader"

export default () => (
    <Container>
        <Header />
        <body>
            <PageHeader headerText="About" />
        </body>
        <Footer />
    </Container>
)