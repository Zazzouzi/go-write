import React, { useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput} from "react-native";
import CustomButton from "../components/CustomButton";


export default function SundayEntry({navigation}) {

  const [notes, setNotes] = useState("");
    return (
        <SafeAreaView style={styles.container}>
          <View style = {styles.topContainer}>
          <Text style = {styles.text}>
            Write a letter to someone you hate or admire
          </Text>
          <TextInput style = {styles.input} placeholder = "Write your thoughts" value = {notes} onChangeText = {setNotes} multiline = {true}
          numberOfLines={50}/>
          </View>

          <View style = {styles.buttonContainer}>
          <CustomButton title="Done" type = 'primary' onPress= {() => navigation.navigate("Journal")} />
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
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
});