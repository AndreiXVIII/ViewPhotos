import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './src/reducers/Reducer'
import Screen from './src/screen/Screen'

const store = createStore(reducer, applyMiddleware(ReduxThunk))

const App = () => {
    return (
        <Provider store={ store }>
            <Screen />
        </Provider>
    )
}

export default App