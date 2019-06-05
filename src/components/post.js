import React from "react"
import postStyles from "./blogpost.module.css"

export default props => (
    <div className={postStyles.post}>
        <p className={postStyles.date}>{props.date}</p>
        <p className={postStyles.postText}>{props.text}</p>
    </div>
)