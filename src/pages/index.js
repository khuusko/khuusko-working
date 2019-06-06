import React from "react"
import Container from "../components/layout"
import layoutStyles from "../components/layout.module.css"

export default () => (
    <Container>
        <div className={layoutStyles.pageContent}>
            <div className={layoutStyles.pHead}>
                Index
            </div>
            <div className={layoutStyles.bLeft}>
                Kokoo
            </div>
            <div className={layoutStyles.bRight}>
                Kokoo 2
            </div>
        </div>
    </Container>
)
