import React from 'react';
import { View, StatusBar } from 'react-native';
import SingleDeck from './components/Deck/SingleDeck';
import NewCard from './components/NewCard/NewCard';
import Quiz from './components/Quiz/Quiz';
import DeckList from './components/DeckList/DeckList';
import NewDeck from './components/NewDeck/NewDeck';
import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { green, black } from './utils/colors';
import { setLocalNotification } from './utils/notifications';

function CardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
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
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: black,
    style: {
      height: 56,
      backgroundColor: green,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  SingleDeck: {
    screen: SingleDeck,
    navigationOptions: {
      headerTintColor: black,
      headerStyle: {
        backgroundColor: green,
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'Add card',
      headerTintColor: black,
      headerStyle: {
        backgroundColor: green,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: black,
      headerStyle: {
        backgroundColor: green,
      }
    }
  },
});

export default class App extends React.Component {
  componentDidMount() {
    //setLocalNotification();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <CardsStatusBar backgroundColor={green} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}
