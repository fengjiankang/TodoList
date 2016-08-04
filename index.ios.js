'use strict'

import React from 'react'
import ReactNative from 'react-native'
import App from './src/containers/App'

const {
  AppRegistry
} = ReactNative

class TodoList extends React.Component {

  render () {
    return ( <App /> )
  }
}



AppRegistry.registerComponent('FJKFirst', () => TodoList)