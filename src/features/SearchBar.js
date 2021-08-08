import React, {useState, useEffect} from 'react'
import { View, TextInput, StyleSheet} from 'react-native'


export default SearchBar = ({setSearchBarText})=>{

    const [textInput, setTextInput] = useState('')

    useEffect(()=>{
      setSearchBarText(textInput.trim().toLowerCase())
    }, [textInput])


    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search for a post"
          style={styles.input}
          value={textInput}
          onChange={({ nativeEvent }) => {
            console.log(textInput)
            setTextInput(nativeEvent.text);
          }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 20,
        //backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    input: {
    fontSize: 20,
    borderWidth: 0,
    backgroundColor: 'white',
    height: 60,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 12,
    shadowOpacity: 0.25,
    borderRadius: 30,
    padding: 20,
    }
})