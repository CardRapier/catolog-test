import React, {Component} from 'react'
import allApps from './apps'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    state = {
        apps: allApps
    }

    render() {
        const tabs = this.state.apps.map(
            tab => <li> <NavLink key={tab.key} to={""+ tab.name}>{tab.text}</NavLink> </li> 
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