import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    };
  }

  increseCounter()
  {
    var count = this.state.counter + 1
    this.setState({counter: count})
  }

  decreseCounter()
  {
    if(this.state.counter != 0 )
    {
      var count = this.state.counter - 1
      this.setState({counter: count})
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.holder}>
        <TouchableOpacity onPress={()=>this.increseCounter()}><Text>Increment</Text></TouchableOpacity>
        <Text>{this.state.counter}</Text>
        <TouchableOpacity onPress={()=>this.decreseCounter()}><Text>Decrement</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
