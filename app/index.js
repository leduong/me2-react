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

export default class Me2 extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.wrapper}>
            <Image source={require('../img/me2.png')} />
            <Text style={styles.welcome}>
              Welcome back! Let's see what's in store for you today. Go ahead and log into your account.
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
    backgroundColor: 'rgb(42,47,56)',
  },
  wrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 18,
    padding: 20,
    margin: 10,
    color: '#fff'
  },
  footer: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15,
  },
});

AppRegistry.registerComponent('Me2', () => Me2);
