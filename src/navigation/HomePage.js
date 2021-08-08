import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import PostThumbnail from '../features/PostThumbnail'
import WordoftheDay from '../features/WordOftheDay'
import SearchBar from '../features/SearchBar'

// Since no backend is configured yet for the app, all the media files will be imported at once
import whatIsElectricity from '../../media/whatIsElectricity/whatIsElectricity'
import juliusCaesar from '../../media/juliusCaesar/juliusCaesar'
import powerUSGov from '../../media/powerUSGov/powerUSGov'
import digestiveSystem from '../../media/digestiveSystem/digestiveSystem'



const renderItem = (item)=>{
   return (
       <PostThumbnail item={item.item}/>
   )
}

const HomePage = ({setAppState}) => {

    const [searchBarText, setSearchBarText] = useState('')

    const results = [whatIsElectricity, juliusCaesar, powerUSGov, digestiveSystem]

    const setResults = (results) =>{
        
        const resultsFiltered = results.filter((post, index) => post.title.toLowerCase().includes(searchBarText))
    
        return resultsFiltered
    }

    if (searchBarText.trim() === ''){
        return (
            <View style={styles.container}>
                <SearchBar setSearchBarText={setSearchBarText}/>
                <ScrollView >
                    
                    <View style={{flexDirection: 'row'}}>
                        <WordoftheDay />
                    </View>
                    <Text style={{textAlign: 'center', padding: 30, fontSize: 30, fontWeight: '600'}}>Recommended Posts</Text>
                    <PostThumbnail setAppState={setAppState} item={powerUSGov} />
                    <PostThumbnail setAppState={setAppState} item={juliusCaesar} />
                    <PostThumbnail setAppState={setAppState} item={whatIsElectricity} />
                    <PostThumbnail setAppState={setAppState} item={digestiveSystem} />
                </ScrollView>
            </View>
        )
    }

    else{
        return (
            <View style={styles.container}>
                <SearchBar setSearchBarText={setSearchBarText}/>
                <ScrollView >
                    <Text style={{textAlign: 'center', padding: 0, fontSize: 30, fontWeight: '600'}}>Results</Text>
                    {
                        setResults(results).map((post)=>{
                            return (
                                <PostThumbnail setAppState={setAppState} item={post} />
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }

        
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        margin: 10,

    }
})