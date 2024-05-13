import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from "../components/CustomButton";

export default function SaturdayEntry({navigation}) {
  const [notes, setNotes] = useState("");

  // Function to save notes to AsyncStorage
  const saveNotes = async () => {
    try {
      await AsyncStorage.setItem('saturdayNotes', notes);
      console.log('Notes saved successfully!');
      navigation.navigate("Journal"); // Navigate after saving
    } catch (e) {
      console.error('Failed to save notes:', e);
    }
  };

  // Function to load notes from AsyncStorage
  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('saturdayNotes');
      if (savedNotes !== null) {
        setNotes(savedNotes);
      }
    } catch (e) {
      console.error('Failed to load notes:', e);
    }
  };

  // UseEffect to load notes when the component mounts
  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>
            What is a message you want to give to your future self?
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Write your thoughts"
            value={notes}
            onChangeText={setNotes}
            multiline={true}
            numberOfLines={50}
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
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#191259',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "FFFFFF",
    justifyContent: 'space-between',
  },
  topContainer: {
    alignitems: 'center',
    padding: 16,
  },
  input: {
    fontSize: 20, 
    padding: 16, 
    borderColor: "#BBBBBB",
    borderRadius: 8,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
});