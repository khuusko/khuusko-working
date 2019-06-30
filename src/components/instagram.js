import React, { Component } from "react"
import InstaImg from "./instaimg"

class Instagram extends Component {
    constructor() {
        super()
        this.state = {
            images: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=7489548432.1677ed0.50ff65c2a19249e3b74b63f57abc8521")
        .then(res => res.json())
        .then((data) => {
            this.setState({ images: data })
            console.log(this.state.images)
        })
        .catch(console.log)
    }

    render() {
        const imageList = this.state.images.data.map(item => <InstaImg key={item.id} link={item.link} />)

        return (
            <div>
                {imageList}
            </div>
        )
    }
}

export default Instagram