# React Statebase
Statebase bindings for React. Inspired by react-redux.

### example usage

Include and initialize with default state:
```
import React from 'react'
import ReactDOM from 'react-dom'
import {StatebaseProvider, withStatebase} from 'react-statebase'
import App from './App.js'

var initialState = {
    user: null,
    todos: []
}
ReactDOM.render(
    <StatebaseProvider initialState={initialState}>
        <App/>
    </StatebaseProvider>,
    document.getElementById('root')
)
```

Connect a component to your statebase:
```
function App(props) {
    var user = props.statebase.ref('user').val()
    return (
        <div>
            Greetings {user ? user.name : 'stranger'}
            <Todos/>
        </div>
    )
}
export withStatebase(App) 
```
