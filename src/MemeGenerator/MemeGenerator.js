import React, {Component} from 'react'

class MemeGenerator extends Component {
    state = {
        topText: "",
        botText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImage: randMemeImg })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.topText} name="topText" placeholder="Top Text" onChange={this.handleChange}/> <br />
                    <input type="text" value={this.state.botText} name="botText" placeholder="Bottom Text" onChange={this.handleChange}/> <br />
                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImage} alt="LMAO" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.botText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator