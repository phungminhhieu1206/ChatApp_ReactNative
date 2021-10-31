import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable, Text, View, useWindowDimensions } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Feather } from '@expo/vector-icons';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ 
          headerTitle: ChatRoomHeader, 
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />

    </Stack.Navigator>

  );
}

const HomeHeader = (props) => {

  const { width } = useWindowDimensions();

  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width,
      padding: 10,
      alignItems: 'center',
      marginLeft: -12
    }}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
      <Text style={{
        flex: 1,
        textAlign: 'center',
        marginLeft: 50,
        fontWeight: 'bold'
      }}>Chat App</Text>
      <Feather name="camera" size={24} color="black" style={{ marginHorizontal: 10 }} />
      <Feather name="edit-2" size={24} color="black" style={{ marginHorizontal: 10 }} />
    </View>
  )
}

const ChatRoomHeader = (props) => {

  const { width } = useWindowDimensions();

  console.log(props);
  

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width - 50,
      padding: 10,
      alignItems: 'center',
      marginLeft: -25
    }}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
      <Text style={{
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: -120
      }}>{props.children}</Text>
      <Feather name="camera" size={24} color="black" style={{ marginHorizontal: 10 }} />
      <Feather name="edit-2" size={24} color="black" style={{ marginHorizontal: 10 }} />
    </View>
  )
}

