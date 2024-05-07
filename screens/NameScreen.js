import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function NameScreen({ navigation }) {
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.topContainer}>
        <Text style = {styles.text}>
          What's your name?
        </Text>
        <TextInput style = {styles.input} placeholder = "Enter your name" value = {name} onChangeText = {setName} />
      </View>
      
      <View style = {styles.buttonContainer}>
          <CustomButton title="Next" type = 'primary' onPress= {() => navigation.navigate("ProfilePicture", {name: name})} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F6EAD3',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#CFA75B",
    justifyContent: 'space-between',
  },
  topContainer: {
    alignitems: 'center',
    padding: 16,
  },
  input: {
    fontSize: 20, 
    padding: 16, 
    borderColor: "#705E48",
    borderRadius: 8,
  },
  
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },

});