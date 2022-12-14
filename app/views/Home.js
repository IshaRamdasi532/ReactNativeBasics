import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';
import { Hero } from '../sections/Hero.js';
import { Menu } from '../sections/Menu.js';
import { StackNavigator } from 'react-navigation';

export class Home extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        //const { navigate } = navigator;
        return (
            <View style={styles.container}>
                <Header navigate = {this.props.navigation.navigate} message = 'Press to login' />
                <Hero />
                <Menu navigate = {this.props.navigation.navigate} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
  });

  