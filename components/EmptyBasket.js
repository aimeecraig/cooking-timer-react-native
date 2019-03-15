import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class EmptyBasket extends Component {
  render() {
    return (
      <View>
        <Text>No items.</Text>
      </View>
    )
  }
}

export default EmptyBasket
