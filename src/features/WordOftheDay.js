import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, TouchableOpacity,  Modal, View, Linking, ScrollView} from 'react-native'


const wordDefined = {word: 'Amphibious', phonetics: 'æmˈfɪb.i.əs', definitions: [{partOfSpeech: 'adjective', definition: 'of or relating to a type of animal that lives both on land and in water', example: ['amphibious animals']}, {partOfSpeech: 'adjective', definition: 'relating to vehicles that operate both on land and in water', example: ['amphibious vehicles/aircraft', 'an amphibious landing/attack (= from the sea onto the land)']}]}

const Definition = ({wordDefinition}) =>{
    return (
        <View>
            {wordDefinition.map((wordDef, index)=>{
                const examplesArray =  []
                for (let i = 0; i <wordDef.example.length; i++){
                    examplesArray.push(<Text style={{fontSize: 15, paddingBottom: 20, fontStyle: 'italic', paddingLeft: 20}}>- {wordDef.example[i]}</Text>)
                }
                return (
                    <View>
                        <Text style={{fontSize: 20, padding: 15}}>{index + 1}. {wordDef.partOfSpeech}</Text>
                        <Text style={{fontSize: 15, padding: 10, fontWeight: '300'}}>{wordDef.definition}</Text>
                        {examplesArray}        
                    </View>
                )
            })}
        </View>
    )
}



const WordOftheDay = () => {

    const [word, setWord] = useState(wordDefined)
    const [isVisible, setIsVisible] = useState(false)

   
 
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{setIsVisible(true)}}>
            <Modal animationType="fade" visible={isVisible} swipeDirection="down" onSwipeComplete={(e) => { setIsVisible(false) }} presentationStyle='pageSheet'>
                <TouchableOpacity style={{backgroundColor: '#ff5c40', margin: 10, width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', shadowOffset: {
        width: 5,
        height: 5,
        },
        shadowRadius: 12,
        shadowOpacity: 0.25,
    borderRadius: 30,}} onPress={()=>setIsVisible(false)}>
                    <Text style={{textAlign: 'center'}}>X</Text>
                </TouchableOpacity>
                <ScrollView>
                    <Text style={styles.word}>{word.word}</Text> 
                    <Text style={styles.phonetics}>{word.phonetics}</Text>
                    <Definition wordDefinition={word.definitions}/>
                    <Text style={{color: 'blue', textDecorationLine: 'underline', paddingLeft: 10, textAlign: 'center', paddingTop: 100, paddingBottom: 30}}
                    onPress={() => Linking.openURL('https://dictionary.cambridge.org/dictionary/english/amphibious')}>
                View Cambridge Dictionary
                    </Text>
                </ScrollView>


               
            </Modal> 
            <Text style={{fontWeight: 'bold', fontSize:40,}}>Word of the Day</Text>
            <Text style={{fontSize: 30, padding: 20, fontStyle: 'italic', color: '#ffbe30'}}>{word.word}</Text>
            <Text style={{fontSize: 17, color: '#3daeff', padding: 0, fontStyle: 'italic', textDecorationLine: 'underline'}}>Learn more</Text>
            
        </TouchableOpacity>
    )
}

export default WordOftheDay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 40,
        margin: 10,
        shadowOffset: {
            width: 1,
            height: 1
          },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        padding: 20,
    },
    word: {
        fontWeight: 'bold',
        padding: 20,
        fontSize: 40,
    },
    phonetics: {
        paddingLeft: 30,
        fontStyle: 'italic',
        fontSize: 20,
        paddingBottom: 40,
    }

})

