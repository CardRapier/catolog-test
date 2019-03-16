import React, {Component} from 'react'
import Tab from './Tab'
import allApps from './apps'
import './Navigation.css'

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            apps: allApps
        }
    }

    render() {
        const tabs = this.state.apps.map(
            tab => <Tab handleAppChange={this.props.handleAppChange} key={tab.key} name={tab.name} text={tab.text}/>
        )

        return (
            <div>
                <ul>
                    {tabs}
                </ul>
                <br />
            </div>
            
        )
    }
}

export default Navigation