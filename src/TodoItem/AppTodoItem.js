import React, {Component} from "react"
import todosData from './todosData'
import TodoItem from './TodoItem'

class AppTodoItem extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updateTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return{
                todos: updateTodos
            }
        })
    }

    render()  {
        const todoItems = this.state.todos.map(
            item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
        )

        return (
            <div>
                {todoItems}
            </div>
        )
    }
}

export default AppTodoItem