import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

export default function AddTodos({submitHandler}) {
    const [text, setText] = useState('')
    const onChangeHandler = (val) => {
        setText(val);
    }
    // const onPress = () => {

    // }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="New Todos...."
            onChangeText={onChangeHandler} />
            <Button onPress={() => submitHandler(text)} title='Add Todos' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
