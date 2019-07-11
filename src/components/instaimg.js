import React from "react"
import imageStyles from "./images.module.css"

function InstaImg({props}) {
    const source = props.images.thumbnail.url
    
    return(
        <div className={imageStyles.card}>
            <img src={source} alt="Instagram"/>
        </div>
    )
}

export default InstaImg