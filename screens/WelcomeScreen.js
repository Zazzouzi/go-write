import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import CustomButton, { ButtonType } from "../components/CustomButton";
import logoImage from "../assets/logo.png";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.image} source={logoImage} resizeMode="contain" />
        <Text style={styles.text}> GoWrite </Text>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="New Journal"
          type={ButtonType.PRIMARY}
          onPress={() => navigation.navigate("Name")}
        />
        <CustomButton
          title="Access Journal"
          type={ButtonType.PRIMARY}
          onPress={() => navigation.navigate("Journal")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFA75B",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },
  image: {
    width: 90,
    height: 90,
  },
  text: {
    fontSize: 50,
    color: "#F6EAD3",
    fontWeight: "bold",
    marginLeft: 10,
  },
  buttonContainer: {
    paddingHorizonatal: 16,
    height: 126,
    width: "100%",
    justifyContent: "space-between",
  },
});
