import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import DeckList from "./components/DeckList";
import {blue} from "./utils/colors";
import { Constants } from 'expo';

function FlashCardsStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlashCardsStatusBar backgroundColor={blue} barStyle="light-content"/>
        <DeckList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
