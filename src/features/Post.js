import React , {useRef, useState} from 'react'
import { Text, StyleSheet, View, Linking, ScrollView, TouchableOpacity, Image, Button} from 'react-native'
import PostThumbnail from './PostThumbnail'
import { Video } from 'expo-av';



const Post = ({item, style={}, setAppState, itemRecommended}) =>{
    const video = useRef(null);
    const [status, setStatus] = useState({});
    if (item.type ==='article'){
        return (
            
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={()=>setAppState('normal')}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.greaterThan}>&#60;</Text> 
                    <Text style={styles.buttonText}>Back</Text>
                </View>
                </TouchableOpacity>
                <Text style={{color: 'orange', fontWeight: '400', fontSize: 20, fontStyle:'italic'}}>{item.topic}</Text>
                <Text style={[{fontWeight: 'bold', fontSize: 45, padding: 40, color:'#4287f5'}, style.title]}>{item.title}</Text>
                <TouchableOpacity style={{flexDirection: 'row', paddingBottom: 10, paddingLeft: 10}}>
                    <Image source={item.profilePicture} style={{height: 25, width: 25, borderRadius: 12.5}}/>
                    <Text style={{fontSize: 20}}>  {item.user}</Text>
                </TouchableOpacity>
                <Text style={{fontWeight: '100', padding: 5}}>{item.date}</Text>
                <Image source={item.photos[0]} style={[{height: 400, width: 200, alignSelf: 'center'}, style.image]} resizeMode='contain'/>
                <Text style={{textAlign: 'center', fontWeight: '200', lineHeight: 24, padding: 20, fontStyle: 'italic'}}>
                    {item.description}
                </Text>
                <Text style={[{textAlign: 'justify', lineHeight: 23, marginBottom: 10, fontSize: 15, padding: 20}, style.text]}>
                    {item.text}
                </Text>
                <Text style={{color: 'blue', textDecorationLine: 'underline', paddingLeft: 30, paddingTop: 40, marginBottom: 70}}
                    onPress={() => Linking.openURL(item.link)}>
                View Original Source
                    </Text>

            <View style={{marginBottom: 100}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30, paddingBottom: 30}}>Recommended Post</Text>
                <PostThumbnail item={itemRecommended} setAppState={setAppState}/>
            </View>

            </ScrollView>
        )
    }

    else if (item.type ==='video'){
        return (
            <View>
                <ScrollView style={styles.container}>
                <TouchableOpacity onPress={()=>setAppState('normal')}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.greaterThan}>&#60;</Text> 
                    <Text style={styles.buttonText}> Back</Text>
                </View>
                </TouchableOpacity>
                <Text style={{color: 'orange', fontWeight: '400', fontSize: 20, fontStyle:'italic'}}>{item.topic}</Text>
                <Text style={[{fontWeight: 'bold', fontSize: 40, padding: 40, color:'#4287f5'}, style.title]}>{item.title}</Text>
                <TouchableOpacity style={{flexDirection: 'row', paddingBottom: 10, paddingLeft: 10}}>
                    <Image source={item.profilePicture} style={{height: 25, width: 25, borderRadius: 12.5}} />
                    <Text style={{fontSize: 20}}>  {item.user}</Text>
                </TouchableOpacity>
                <Text style={{fontWeight: '100', padding: 5}}>{item.date}</Text>
                <Text style={{textAlign: 'center', fontSize: 17, fontWeight: '200', lineHeight: 24, padding: 30, fontStyle: 'italic'}}>
                    {item.description}
                </Text>
                <Video
                    ref={video}
                    style={styles.video}
                    source={item.video}
                    useNativeControls
                    resizeMode="contain"
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <Text style={{marginBottom: 30}}>
                    {item.text}
                </Text>
                <Text style={{color: 'blue', textDecorationLine: 'underline', paddingLeft: 30, paddingTop: 40, marginBottom: 70}}
                    onPress={() => Linking.openURL(item.link)}>
                View Original Source
                    </Text>
                <View style={{marginBottom: 100}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30, paddingBottom: 30}}>Recommended Post</Text>
                <PostThumbnail item={itemRecommended} setAppState={setAppState}/>
                </View>

            </ScrollView>
                
            </View>
        )

    }

    else {
        return (
        <View style={{paddingTop: 40, padding: 10}}>
            <TouchableOpacity onPress={()=>setAppState('normal')}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.greaterThan}>&#60;</Text> 
                    <Text style={styles.buttonText}>Back</Text>
                </View>
            </TouchableOpacity>
            <Text style={{fontSize: 20, textAlign: 'center'}}>There was an error loading the page. Go back to main menu!</Text>
        </View>
        )
    }
}


export default Post

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 50,
        paddingBottom: 200
    },
    buttonText:{
        color: '#1ccaff',
        fontSize: 20

    },
    greaterThan:{
        color: '#0099ff',
        fontWeight: 'bold',
        fontSize: 20
    },

    video: {
        alignSelf: 'center',
        width: 400,
        height: 200,
        marginTop: 30,
    },
    buttonContainer:{
        flexDirection: 'row', 
        marginBottom: 30, 
        padding: 10,
        
    }
})
