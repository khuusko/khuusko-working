import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"
import PageHeader from "../components/pageHeader"
import Navigation from "../components/navigation"

export default () => (
    <Container >
        <Header />
        <body>
            <Navigation />
            <PageHeader headerText="About" />
        </body>
        <Footer />
    </Container>
)