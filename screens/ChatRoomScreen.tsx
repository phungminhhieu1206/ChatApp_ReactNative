import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/core';
import {
    FlatList,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native';
import Message from '../components/Message';

// data
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';

export default function ChatRoomScreen() {

    const route = useRoute();
    // console.warn("Display chat room: ", route.params?.id);

    const navigation = useNavigation();
    navigation.setOptions({title: 'Minh Hieu'})


    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <Message messages={item} />}
                inverted
            />
            <MessageInput />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})