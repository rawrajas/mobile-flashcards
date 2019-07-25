import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import SubmitButton from './SubmitButton'
import { white, darkBlue } from '../utils/colors'

class AddDeck extends React.Component {

    state = {
        text: ''
    }

    submitName = () => {
        const { text } = this.state

        if(this.state.text){
            saveDeckTitle(text)
            this.props.dispatch(addDeck(text))
            this.props.navigation.navigate('DeckView', { entryId: text })
            this.setState({ text: '' })
        }
    }


    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What would you like to call the new deck?</Text>
                <TextInput style={styles.input}
                           onChangeText={(text) => this.setState({ text: text })}
                           value={this.state.text}>
                </TextInput>
                <SubmitButton style={styles.submitBtn} onPress={(this.submitName)}/>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 50,
        borderRadius: 8
    },
    title: {
        fontSize: 30,
        color: darkBlue,
        textAlign: 'center'
    },
    submitBtn: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 10,
        backgroundColor: white,
        borderRadius: 7,
        overflow: 'hidden'
    },
})


export default connect()(AddDeck)