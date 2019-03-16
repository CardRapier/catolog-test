import React, {Component} from 'react'
import FormComponent from './FormComponent';

class FormContainer extends Component {
    state = {
        firstName: "",
        lastName: "",
        isFriendly: false,
        gender: "",
        favColor: ""
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return(
            <FormComponent handleChange={this.handleChange} data={this.state}/>
        )
    }
}

export default FormContainer