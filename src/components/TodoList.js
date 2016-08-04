import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ListView,
  Dimensions,
  StyleSheet
} from 'react-native'

const WIDTH = Dimensions.get('window').width

export default class TodoList extends Component {

  constructor(props) {
    super(props)

    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.state = {
      dataSource: this.ds
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      dataSource: this.ds.cloneWithRows(props.todos)
    })
  }

  _renderRow (rowData: object, sectionId: number, rowId: number) {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.5}
          style={styles.item}
          onPress={() => this.props.onTodoClick(rowId)} >
          <Text>{rowData.text}</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: '#999999', height: 1}}></View>
      </View>
      )
  }

  render () {
    return (
      <View style={styles.list}>
        <ListView
          initialListSize={6}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}/>
      </View>
      )
  }
}

let styles = StyleSheet.create({
  list: {
    height: 200,
    backgroundColor: 'yellow'
  },
  item: {
    width: WIDTH,
    height: 30,
    backgroundColor: 'yellow'
  }
})

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}