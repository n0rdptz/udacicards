import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Deck from 'components/Deck/Deck';
import NewDeck from 'components/NewDeck/NewDeck';
import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { purple, white } from './utils/colors'

function CardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Decks'
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    },
  }
}, {}
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck,
    // navigationOptions: {
    //   headerTintColor: white,
    //   headerStyle: {
    //     backgroundColor: purple,
    //   }
    // }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CardsStatusBar backgroundColor={purple} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}
