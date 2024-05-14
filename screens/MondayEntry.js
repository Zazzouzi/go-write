import React, { useState, useEffect } from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Keyboard, 
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../components/CustomButton';
import logoImage from '../assets/logo.png';

export default function MondayEntry({ navigation }) {
  const [notes, setNotes] = useState('');

  // Function to save notes to AsyncStorage
  const saveNotes = async () => {
    try {
      await AsyncStorage.setItem('mondayNotes', notes);
      console.log('Notes saved successfully!');
      navigation.navigate('Journal'); // Navigate after saving
    } catch (e) {
      console.error('Failed to save notes:', e);
    }
  };

  // Function to load notes from AsyncStorage
  const loadAllNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('mondayNotes');
      if (savedNotes !== null) {
        setNotes(savedNotes);
      }
    } catch (e) {
      console.error('Failed to load notes:', e);
    }
  };

  // UseEffect to load notes when the component mounts
  useEffect(() => {
    loadAllNotes();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Image style={styles.image} source={logoImage} resizeMode="contain" />
          <Text style={styles.title}>GoWrite</Text>
        </View>
        
        <Text style={styles.text}>How do you want this week to go?</Text>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Write your thoughts here"
            value={notes}
            onChangeText={setNotes}
            multiline={true}
            numberOfLines={4}
            placeholderTextColor="#6D6D6D"
          />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton title="Done" type='primary' onPress={saveNotes} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#CFA75B",
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F6EAD3',
    marginBottom: 16,
    textAlign: 'center' 
  },
  title: {
    fontSize: 50,
    color: "#F6EAD3",
    fontWeight: "bold",
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#F6EAD3',
    borderRadius: 10,
    padding: 20,
    fontSize: 18,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height:  4},
    shadowOpacity: 0.25,
    width: 350,
    height: 450,
    alignItems: "center",
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  image: {
    width: 90,
    height: 90,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
  },
});





