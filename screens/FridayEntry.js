import React, { useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput} from "react-native";

export default function FridayEntry() {
  const [notes, setNotes] = useState("");
    return (
        <SafeAreaView style={styles.container}>
          <View style = {styles.topContainer}>
          <Text style = {styles.text}>
          Did you witness something beautiful today?
          </Text>
          <TextInput style = {styles.input} placeholder = "Write your thoughts" value = {notes} onChangeText = {setNotes} />
          </View>
      
      
    </SafeAreaView>
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
});

