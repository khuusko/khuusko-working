import React from "react"
import Container from "../components/layout"
import PageHeader from "../components/pageHeader"
import Post from "../components/post"

export default () => (
    <Container>
            <PageHeader headerText="Blog" />
            <Post date="1.1.2017" text="This is a blog post!" />
            <Post date="1.2.2018" text="This is another blog post!" />
            <Post date="1.3.2019" text="This is a third blog post!" />
    </Container>
)
