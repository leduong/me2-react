/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Text,
  View
} from 'react-native';

import LoginForm from './components/LoginForm';

export default class myApp extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.wrapper}>
            <Image source={require('../img/d.png')} />
            <Text style={styles.welcome}>
              Welcome to My App!
            </Text>
          </View>
          <View>
              <LoginForm />
            </View>
          <View>
            <Text style={styles.footer}>© 2017 leduong.com</Text>
          </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(39, 174, 96,1.0)',
  },
  wrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  footer: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15,
  },
});

AppRegistry.registerComponent('myApp', () => myApp);
