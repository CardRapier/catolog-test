import React, {Component} from 'react'

class FormComponent extends Component {
    render() {
        return (
            <form>
                <input type="text" value={this.props.data.firstName} name="firstName" placeholder="First Name" onChange={this.props.handleChange} />
                <br />

                <input type="text" value={this.props.data.lastName} name="lastName" placeholder="Last Name" onChange={this.props.handleChange}/>
                <br />

                <input type="checkbox" name="isFriendly" checked={this.props.data.isFriendly} onChange={this.props.handleChange}/> Is Friendly?
                <br />

                <label>
                    <input type="radio" name="gender" value="female" checked={this.props.data.gender === "female"} onChange={this.props.handleChange}/> Female
                    <input type="radio" name="gender" value="male" checked={this.props.data.gender === "male"} onChange={this.props.handleChange}/> Male
                </label>
                <br />

                <label>Favorite color: </label>
                <select value={this.props.data.favColor} onChange={this.props.handleChange} name="favColor">
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                </select>

                <h1>{this.props.data.firstName} {this.props.data.lastName}</h1>
                <h2> You are {this.props.data.gender} and your favortie color is {this.props.data.favColor} </h2>

                <button>Submit</button>
            </form>
        )
    }
}

export default FormComponent