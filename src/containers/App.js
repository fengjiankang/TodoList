import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from '../reducers/reducers'
import AppComponent from './AppComponent'

let store = createStore(todoApp)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    )
  }
}