import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default class Footer extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  renderFilter (filter, name) {
    return (
      <TouchableOpacity style={{flex: 1}} onPress={ () => {
        this.props.onFilterChange(filter)
       }}>
         <View style={[styles.btnText, {backgroundColor: filter == this.props.filter ? 'yellow' : null}]}>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
      )
  }

  render () {
    return (
      <View style={{backgroundColor: '#f4f4f4', flexDirection: 'column'}}>
        <Text style={{fontSize: 20}}>Show:</Text>
        <View style={{flexDirection: 'row'}}>
          {this.renderFilter('SHOW_ALL', 'All')}
          {this.renderFilter('SHOW_COMPLETED', 'Completed')}
          {this.renderFilter('SHOW_ACTIVE', 'Active')}
        </View>
      </View>
      )
  }
}

let styles = StyleSheet.create({
   btnText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#CCCCCC',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
    ]).isRequired
}