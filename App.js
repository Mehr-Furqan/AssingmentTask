import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './Store/Store';

import MyStack from './src/mainStack';
import {colors} from './src/Constants/color';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <>
          <StatusBar
            translucent
            backgroundColor={colors.background}
            barStyle={'dark-content'}
          />

          <MyStack />
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
