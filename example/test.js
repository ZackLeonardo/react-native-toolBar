import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TopToolBar, BottomToolBar } from 'react-native-toolBar';

export default class Test extends Component {
  render() {
    const thisProps = {
      displayed: true,
      title: 'test',
      onBack: ()=>{console.log('onBack press');},
    };
    return (
      <View style={styles.container}>
        <TopToolBar {...thisProps}
        />
        <BottomToolBar {...thisProps}
        />
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
