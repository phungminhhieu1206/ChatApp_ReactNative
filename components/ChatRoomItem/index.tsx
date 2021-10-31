import React from 'react';
import {
    Text,
    View,
    Pressable,
    Image,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function ChatRoomItem({ chatRoom }) {
    const user = chatRoom.users[1];

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ChatRoom', { id: chatRoom.id });
        // console.warn(chatRoom.id);
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image
                source={{ uri: user.imageUri }}
                style={styles.image}
            />
            {chatRoom.newMessages ? <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
            </View> : null}
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 10
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    badgeContainer: {
        backgroundColor: '#3777f0',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 45,
        top: 10,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 3
    },
    text: {
        color: 'grey'
    }
})