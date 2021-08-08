import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['VirtualizedList', "Warning:"]); // Ignore log notification by message
  
 


const Explore = () =>{

    const [currentTopic, setCurrentTopic] = useState(null)
 
    const topics = ['Business & Finance', 'Technology', 'Physics & Chemistry', 'Math', 'History', 'Arts', 'Cooking', 'Sports', 'Politics', 'Social Justice', 'Biology']
    topics.sort()

    const topicsWithPosts = []

    const accessTopic = (topic) =>{
        if (topic in topicsWithPosts){
            setCurrentTopic(topic)
        }
        else { 
            alert('Functionality not available yet! Cannot access section at this time.')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 50, padding: 20, textAlign:'center', fontWeight: '300'}}>Explore our Topics</Text>
            <FlatList
                data = {topics}
                renderItem ={(topic)=>{
                    return (<TouchableOpacity key={topic.item} onPress={()=>{accessTopic(topic.item)}} style={styles.topicContainer}><Text style={styles.text}>{topic.item}</Text></TouchableOpacity>)}}
                style={{flex: 1}}
            />
        </View>
    )
}

export default Explore


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    topicContainer: {
        flex: 1,
        padding: 10,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowOffset: {
            width: 0.5,
            height: 0.5
          },
          shadowOpacity: 0.8,
          shadowRadius: 2
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        
    }

})