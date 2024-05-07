import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import NameScreen from './screens/NameScreen';
import ProfilePictureScreen from './screens/ProfilePictureScreen';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import JournalScreen from './screens/JournalScreen';
import SundayEntry from './screens/SundayEntry';
import MondayEntry from './screens/MondayEntry';
import TuesdayEntry from './screens/TuesdayEntry';
import WednesdayEntry from './screens/WednesdayEntry';
import ThursdayEntry from './screens/ThursdayEntry';
import FridayEntry from './screens/FridayEntry';
import SaturdayEntry from './screens/SaturdayEntry';


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
       <Stack.Screen name="Sunday" component={SundayEntry} options={{headerTitle: ""}}/>
       <Stack.Screen name="Monday" component={MondayEntry} options={{headerTitle: ""}}/>
       <Stack.Screen name="Tuesday" component={TuesdayEntry} options={{headerTitle: ""}}/>
       <Stack.Screen name="Wednesday" component={WednesdayEntry} options={{headerTitle: ""}}/>
       <Stack.Screen name="Thursday" component={ThursdayEntry} options={{headerTitle: ""}}/>
       <Stack.Screen name="Friday" component={FridayEntry} options={{headerTitle: ""}}/>
       <Stack.Screen name="Saturday" component={SaturdayEntry} options={{headerTitle: ""}}/>
     </Stack.Navigator>
   </NavigationContainer>
  </ActionSheetProvider>
   
 );
};

