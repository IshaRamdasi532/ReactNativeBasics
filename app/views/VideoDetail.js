import React from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'
//import { SafeAreaView } from 'react-navigation';

export class VideoDetail extends React.Component {
    static navigationOptions = {
        header: null
    };
     
    render() {

        let tubeId = this.props.navigation.getParam('ytubeId', 'NO VIDEO');
        let tubeUrl = 'https://www.youtube.com/embed/${tubeId}';  
        console.log('tubeurl: ',tubeUrl);
        return (
            <SafeAreaView style={{ flex:1 }}>
                <Button
                    title="Go back" onPress={() => this.props.navigation.goBack()}
                />
                <WebView 
                    style={{marginTop: 20}}
                    javaScriptEnabled={true} 
                    source={{uri: tubeUrl }}
                />
            </SafeAreaView>
        );
    }
}
