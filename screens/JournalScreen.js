import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import CustomButton, { ButtonType } from "../components/CustomButton";


export default function JournalScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
          <View style = {styles.topContainer}>
          <Text style = {styles.text}>
            Journal Entries of This Week
          </Text>
          <Text style = {styles.subtitle}>
            Table Contents
          </Text>
          </View>
      
      <View style = {styles.buttonContainer}>
          <CustomButton title="Sunday" type = {ButtonType.PRIMARY} onPress= {() => navigation.navigate("Sunday")} />
      </View>
      <View style = {styles.buttonContainer}>
          <CustomButton title="Monday" type = {ButtonType.PRIMARY} onPress= {() => navigation.navigate("Monday")} />
      </View>
      <View style = {styles.buttonContainer}>
          <CustomButton title="Tuesday" type = {ButtonType.PRIMARY} onPress= {() => navigation.navigate("Tuesday")} />
      </View>
      <View style = {styles.buttonContainer}>
          <CustomButton title="Wednesday" type = {ButtonType.PRIMARY} onPress= {() => navigation.navigate("Wednesday")} />
      </View>
      <View style = {styles.buttonContainer}>
          <CustomButton title="Thursday" type = {ButtonType.PRIMARY} onPress= {() => navigation.navigate("Thursday")} />
      </View>
      <View style = {styles.buttonContainer}>
          <CustomButton title="Friday" type = {ButtonType.PRIMARY} onPress= {() => navigation.navigate("Friday")} />
      </View>
      <View style = {styles.buttonContainer}>
          <CustomButton title="Saturday" type = {ButtonType.PRIMARY} onPress= {() => navigation.navigate("Saturday")} />
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
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#656565',
    paddingBottom: 16,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
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
  input1:{
    height: 66,
    fontsize: 20, 
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
    color: 'red'
  },

});
