import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Header extends Component {
  render() {
    return (
      <View className="pb-1">
        <Text>Cooking Timer</Text>
      </View>
    )
  }
}

export default Header
