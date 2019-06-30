# React Statebase
React binding for [Statebase](https://github.com/ee92/statebase "Statebase"). Inspired by react-redux.

### example usage

Install:
```
npm install react-statebase --save
```

Include and initialize with default state:
```js
import React from 'react'
import ReactDOM from 'react-dom'
import {StatebaseProvider} from 'react-statebase'
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

Connect a component to your statebase and 'use' part of it:
```js
import React from 'react'
import {withStatebase, useStatebase} from 'react-statebase'

function App(props) {

    const userRef = props.statebase.ref('user')
    const todosRef = props.statebase.ref('todos')
    const [user, setUser] = useStatebase(userRef)
    const [todos] = useStatebase(todosRef)
    function signIn() {
        someFakeAuthentication()
        .then(authResult => setUser(authResult.user))
    }
    function signOut() {
        setUser(null)
    }
    return (
        <div>
            <h1>Greetings {user ? user.name : 'stranger'}</h1>
            <button onClick={() => user ? signOut() : signIn()}>
                {user ? 'sign out' : 'sign in'}
            </button>
            <h2>Todo:</h2>
            {!todos && <div>no todos yet...</div>}
            {todos.map(todo => 
                <div>{todo.task}</div>
            )}
        </div>
    )
}
export default withStatebase(App) 
```

### License

MIT
