import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import CustomButton, { ButtonType } from "../components/CustomButton";


export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.topContainer}>
               <Image
                   style={styles.image}
                   source={{ uri: "https://i.ibb.co/Ct3g53j/dis-image.png" }}
                   resizeMode="contain"
               />
               <Text style = {styles.text}> GoWrite </Text> 
           </View>

           <View style = {styles.buttonContainer}>
               <CustomButton title="First Time!" type = 'primary' onPress= {() => navigation.navigate('Name')} />
               <CustomButton title="Journal" type = {ButtonType.SECONDARY} onPress= {() => navigation.navigate('Journal')}/>
           </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: 'white',
        alignItems: 'center',
        justifyContent: "space-between",
      },
      topContainer: {
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
      },
      text: {
        fontsize: 24,
        color: 'red',
        fontweight: 'bold',
        textTransform: 'uppercase',
      },
      buttonContainer: {
        paddignHorizonatal: 16,
        height: 126,
        width: '100%',
        justifyContent: "space-between",
      },
     
  
});