import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

import Header from './components/Header';
import AddItem from './components/AddItem';
import Items from './components/Items';
import Timings from './components/Timings';
import Footer from './components/Footer';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  addItem = (event) => {
    this.state.items.push({
      id: Date.now(),
      itemName: event.target.itemName.value,
      cookingTime: parseInt(event.target.cookingTime.value)
    });
    this.state.items.sort(this.compare);
    this.forceUpdate();
  }

  compare(a, b) {
    const itemA = a.cookingTime;
    const itemB = b.cookingTime;
  
    let comparison = 0;
    if (itemA < itemB) {
      comparison = 1;
    } else if (itemA > itemB) {
      comparison = -1;
    }
    return comparison;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row border rounded mt-3 pt-1 pb-3">
            <div className="col-sm-8">
              <Header />
              <AddItem addItem={this.addItem} />    
            </div>
            <div className="col-sm-4">
              <Items items={this.state.items} />
            </div>
          </div>
          <div className="row border rounded mt-3 pt-1">
            <div className="col-sm-12">
              <Timings items={this.state.items} />
            </div>
          </div>
          <div className="row mt-3">
              <Footer />
          </div>
        </div>
      </div>
    );
  }


  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
