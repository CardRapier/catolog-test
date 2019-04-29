import React, {Component} from 'react'
import Navigation from './Navigation'
import Game from './Game/Game'
import Meme from './MemeGenerator/AppGenerator'
import Todo from './TodoItem/AppTodoItem'
import Api from './Api/AppAPI'
import Form from './Form/AppForm'
import Error from './Error'
import { BrowserRouter, Route, Switch } from 'react-router-dom' 

class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <Navigation/>   
                <Switch>
                    <Route path='/Game' component={Game} />
                    <Route path='/Meme' component={Meme} />
                    <Route path='/Todo' component={Todo} />
                    <Route path='/Api' component={Api} />
                    <Route path='/Form' component={Form} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App