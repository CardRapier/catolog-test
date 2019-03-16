import React, {Component} from 'react'
import Game from './Game/Game'
import MemeGenerator from './MemeGenerator/AppGenerator'
import Todo from './TodoItem/AppTodoItem'
import Navigation from './Navigation'
import Api from './Api/AppAPI'
import Form from './Form/AppForm'

class App extends Component {
    state = {
        app: <Game />
    }

    handleAppChange = (event) => {
        const {name} = event.target
        if(name === 'Meme') {this.setState({app: <MemeGenerator /> })}
        else if(name === 'Todo') {this.setState({app: <Todo /> })}
        else if(name === 'Api') {this.setState({app: <Api /> })}
        else if(name === 'Form') {this.setState({app: <Form /> })}
        else {this.setState({app: <Game /> })}
    }

    render() {
        return(
            <div>
                <Navigation handleAppChange={this.handleAppChange}/>
                {this.state.app}
            </div>
        )
    }
}

export default App