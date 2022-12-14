import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const aboutGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattis iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

const whatGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattis iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

export class About extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/arch640.jpg')}/>

                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../sections/img/computer640.jpg')}/>
                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>
                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20,
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
});