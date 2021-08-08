import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import demoUserIcon from '../../assets/demoUserIcon.png'
import CircularProgress from 'react-native-circular-progress-indicator';


const Profile = ({userName='Demo User'}) =>{


    return (
        <ScrollView style={styles.container}>
            <View style={{alignItems: 'center', padding: 20}}>
                <Image source={demoUserIcon} style={{height: 100, width: 100}}/>
                <Text style={{padding: 20, fontSize: 30}}>{userName}</Text>
                <Text>This is my Bio!</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 30, paddingTop: 20, justifyContent: 'space-around'}}>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 20}}>Subscriber</Text>
                    <Text style={{textAlign: 'center', fontSize: 17, fontWeight: '700'}}>0</Text>
                    <Text style={{textAlign: 'center'}}>Users</Text>
                </View>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 20}}>Subscribed to</Text>
                    <Text style={{textAlign: 'center', fontSize: 17, fontWeight: '700'}}>0</Text>
                    <Text style={{textAlign: 'center'}}>Users</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', padding: 20}}>
                <Text style={{fontSize: 25, fontWeight: '600',paddingBottom: 20}}>Today's Learning</Text>
                <CircularProgress
                    value={5}
                    radius={40}
                    maxValue={15}
                    textColor={'black'}
                    activeStrokeColor={'#327ffa'}
                    inActiveStrokeColor={'#ede9c5'}
                    
                    />
                <Text style={{fontWeight: '300', fontSize: 20}}>minutes</Text>
            </View>
            <View
            style={{
                borderBottomColor: '#001a5c',
                borderBottomWidth: 0.5,
            }}
            />
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, padding: 30, fontWeight: 'bold'}}>No Posts yet!</Text>
                <TouchableOpacity onPress={()=>{alert('Functionality not available yet! Cannot make post at this time.')}} style={{height: 50, width: 150, borderRadius: 20, backgroundColor: '#2161d9', alignItems: 'center', justifyContent: 'center', 
                shadowOffset: {
                    width: 1,
                    height: 1
                },
                shadowOpacity: 0.8,
                shadowRadius: 4}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#ffd83d', padding: 10}}>Create post</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )

}


export default Profile


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    }
})