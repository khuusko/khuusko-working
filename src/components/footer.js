import React from "react"
import footerStyles from "./footer.module.css"

export default () => (
    <footer className={footerStyles.siteFooter}>
        <div className={footerStyles.footerItem1}>
            Instagram
        </div>
        <div className={footerStyles.footerItem2}>
            Twitter
        </div>
        <div className={footerStyles.footerItem3}>
            Youtube
        </div>
    </footer>
)