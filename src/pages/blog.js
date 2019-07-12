import React from "react"
import Container from "../components/layout"
import Post from "../components/post"
import fontStyles from "../components/fonts.module.css"

export default () => (
    <Container>
            <h2 className={fontStyles.frontPageH2}>Blog</h2>
            <Post date="1.1.2017" text="This is a blog post!" />
            <Post date="1.2.2018" text="This is another blog post!" />
            <Post date="1.3.2019" text="This is a third blog post!" />
    </Container>
)
