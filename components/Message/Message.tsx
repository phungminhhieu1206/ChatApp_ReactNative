import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const blue = '#3777f0';
const gray = 'lightgrey';

const myID = 'u1';

const Message = ({ messages }) => {

    const isMe = messages.user.id === myID;

    return (
        <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
            <Text style={{ color: isMe ? 'black' : 'white' }}>{messages.content}</Text>
        </View>
    )
    // ❤️❤️❤️ Message 🔥🔥🔥
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%'
    },
    leftContainer: {
        backgroundColor: '#3777f0',
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightContainer: {
        backgroundColor: 'lightgrey',
        marginLeft: 'auto',
        marginRight: 10
    }
})

export default Message
