import React from "react"
import Container from "../components/layout"
import layoutStyles from "../components/layout.module.css"
import Instagram from "../components/instagram"

export default () => (
    <Container>
        <div className={layoutStyles.pageContent}>
            <div className={layoutStyles.bLeft}>
                <h2>Hello there.</h2>
                <p>
                    I'm Kaisa. This is my website. Surprised, huh?
                </p>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className={layoutStyles.bRight}>
                <h2>Social</h2>
                <Instagram />
            </div>
        </div>
    </Container>
)
