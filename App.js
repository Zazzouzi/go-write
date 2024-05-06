import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import NameScreen from './screens/NameScreen';
import ProfilePictureScreen from './screens/ProfilePictureScreen';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import JournalScreen from './screens/JournalScreen';



const Stack = createStackNavigator();


export default function App() {
 return (
  <ActionSheetProvider>
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Welcome">
       <Stack.Screen name="Welcome" component={WelcomeScreen} />
       <Stack.Screen name="Name" component={NameScreen} options={{headerTitle: ""}}/>
       <Stack.Screen name="ProfilePicture" component={ProfilePictureScreen} options={{headerTitle: ""}}/>
       <Stack.Screen name="Journal" component={JournalScreen} options={{headerTitle: ""}}/>
     </Stack.Navigator>
   </NavigationContainer>
  </ActionSheetProvider>
   
 );
};

