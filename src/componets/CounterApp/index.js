import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from './styles'
import {connect} from 'react-redux'

 class CounterApp extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.holder}>
        <TouchableOpacity onPress={()=>this.props.increseCounter()}><Text>Increment</Text></TouchableOpacity>
        <Text>{this.props.counter}</Text>
        <TouchableOpacity onPress={()=>this.props.decreseCounter()}><Text>Decrement</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CounterApp)

function mapDispatchToProps(dispatch)
{
  return{
    increseCounter: ()=>dispatch({type:'INCREASE_COUNTER'}),
    decreseCounter: ()=>dispatch({type:'DECREASE_COUNTER'}),
  }
}

function mapStateToProps(state){
  return{
    counter: state.counter
  }
}