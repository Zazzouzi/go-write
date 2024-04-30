import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import NameScreen from './screens/NameScreen';
import JournalScreen from './screens/JournalScreen';
import ProfilePictureScreen from './screens/ProfilePictureScreen';




const Stack = createStackNavigator();


export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Welcome">
       <Stack.Screen name="Welcome" component={WelcomeScreen} />
       <Stack.Screen name="Name" component={NameScreen} options={{headerTitle: ""}} />
       <Stack.Screen name="ProfilePicture" component={ProfilePictureScreen} options={{headerTitle: ""}}/>
       <Stack.Screen name="Journal" component={JournalScreen} options={{headerTitle: ""}}/>

     </Stack.Navigator>
   </NavigationContainer>
 );
};

