import React, { Component, PropTypes } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width

export default class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      text: ''
    }
  }

  render () {
    return (
      <View style={styles.container}>
            <View style={styles.inputContainer}>
               <TextInput
                  style={styles.textInput}
                  placeholder='请输入待办事宜'
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
                <View style={styles.line}/>
            </View>
            <TouchableOpacity activeOpacity={0.75} onPress={this.handleClick} style={styles.btn}
              >
              <View style={styles.btnText}>
                <Text style={{textAlign: 'center'}}>添加</Text>
              </View>
            </TouchableOpacity>
      </View>
      )
  }

  handleClick () {
    this.props.onAddClick(this.state.text)
    this.setState({text: ''})
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    paddingBottom: 10
  },
  inputContainer: {
    marginTop: 100,
    width: 300,
    marginLeft: (WIDTH - 300) / 2
  },
  line: {
    height: 1,
    backgroundColor: 'yellow'
  },
  textInput: {
    height: 30,
    borderBottomWidth: 1,
  },
  btn: {
    width: 200,
    marginLeft: (WIDTH - 200) / 2,
    marginTop: 10,
    marginBottom: 0
  },
  btnText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: '#CCCCCC',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}