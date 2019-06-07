import React from "react"
import footerStyles from "./footer.module.css"

export default () => (
    <footer className={footerStyles.siteFooter}>
        <div className={footerStyles.footerItem1}>
            <div>Instagram</div>
        </div>
        <div className={footerStyles.footerItem2}>
            <div>Twitter</div>
        </div>
        <div className={footerStyles.footerItem3}>
            <div>Youtube</div>
        </div>
    </footer>
)