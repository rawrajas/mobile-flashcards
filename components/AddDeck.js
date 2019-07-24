import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { saveDeckTitle } from "../utils/api";

class AddDeck extends React.Component{

    render(){
        return (
            <View {styles.container}>
                <Text> This is the Add Deck Component </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})