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
```js
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

### License

MIT
