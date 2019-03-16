import React, {Component} from 'react'

class Tab extends Component {
    render() {
        return (
            <div>
                {/* eslint-disable-next-line */}
                <li><a href="#" onClick={this.props.handleAppChange} name={this.props.name}>{this.props.text}</a></li>
            </div>
        )
    }
}

export default Tab