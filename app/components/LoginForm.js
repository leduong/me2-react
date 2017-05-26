'use strict';

import React, { Component } from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
  View,
} from 'react-native';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="email-address"
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255, 0.7)"
          onSubmitEditting={() => this.passwordInput.focus()}
        />
        <TextInput 
          style={styles.input}
          secureTextEntry
          returnKeyType="go"
          placeholder="password"
          placeholderTextColor="rgba(255,255,255, 0.7)"
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity 
          style={styles.submit}>
          <Text style={styles.login}>LOGIN</Text>
        </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  input: {
    height: 40,
    color: '#fff',
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)'
  },
  submit: {
    paddingVertical: 15,
    backgroundColor: 'rgba(46, 204, 113,1.0)'
  },
  login: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff',
    fontSize: 20
  }
});


export default LoginForm;