import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'




const PostThumbnail = ({item, setAppState}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>{setAppState(item); console.log('normal')}}>
            <ImageBackground source={item.thumbnail} imageStyle={{borderRadius: 50}} style={{flexDirection: 'column-reverse', flex: 1}}  resizeMode='contain'>
            <View style={styles.titleContainer}>
                <Text style={{fontWeight: '900', fontSize: 20}}>{item.title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontStyle: 'italic', paddingTop: 10}}>{item.topic}</Text>
                <Text style={{paddingTop: 10, fontWeight: 'bold', paddingLeft:10 }}>{item.user}</Text>
                </View>
            </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default PostThumbnail

const styles = StyleSheet.create({
    container: {
        minHeight: 300,
        margin: 20,
        borderRadius: 100,
        shadowOffset: {
            width: 1,
            height: 1
          },
          shadowOpacity: 0.8,
          shadowRadius: 2.5
    },
    titleContainer: {
        minHeight: 70,
        backgroundColor: 'rgba(255,255,255, 0.99)',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    }
    
})