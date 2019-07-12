import React, { Component } from "react"
import imageStyles from "./images.module.css"

class Instagram extends Component {
    constructor() {
        super()
        this.state = {
            images: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=7489548432.1677ed0.50ff65c2a19249e3b74b63f57abc8521&count=9")
        .then(res => res.json())
        .then(res => {
            const {data} = res
            this.setState({ images: data, loading: false })
        })
        .catch(console.log)
    }

    render() {
        return (
            <div className={imageStyles.cards}>
                {this.state.loading ? <p>Loading</p> : ""}
                {this.state.images.map(item =>
                    <div className={imageStyles.card}>
                        <img key={item.id} src={item.images.standard_resolution.url} alt="Instagram" />
                    </div>
                )}
            </div>
        )
    }
}

export default Instagram