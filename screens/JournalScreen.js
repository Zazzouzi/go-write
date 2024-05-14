import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image, 
  Keyboard, 
  TouchableWithoutFeedback,
} from "react-native";
import CustomButton, { ButtonType } from "../components/CustomButton";
import logoImage from "../assets/logo.png";

export default function JournalScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.image} source={logoImage} resizeMode="contain" />
        <Text style={styles.text}> GoWrite </Text>
      </View>

      <View style={styles.topContainer}>
        <Text style={styles.subtitle}>Journals This Week</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.buttonSpacer}>
          <CustomButton
            title="Sunday"
            type={ButtonType.SECONDARY}
            onPress={() => navigation.navigate("Sunday")}
          />
        </View>
        <View style={styles.buttonSpacer}>
          <CustomButton
            title="Monday"
            type={ButtonType.SECONDARY}
            onPress={() => navigation.navigate("Monday")}
          />
        </View>
        <View style={styles.buttonSpacer}>
          <CustomButton
            title="Tuesday"
            type={ButtonType.SECONDARY}
            onPress={() => navigation.navigate("Tuesday")}
          />
        </View>
        <View style={styles.buttonSpacer}>
          <CustomButton
            title="Wednesday"
            type={ButtonType.SECONDARY}
            onPress={() => navigation.navigate("Wednesday")}
          />
        </View>
        <View style={styles.buttonSpacer}>
          <CustomButton
            title="Thursday"
            type={ButtonType.SECONDARY}
            onPress={() => navigation.navigate("Thursday")}
          />
        </View>
        <View style={styles.buttonSpacer}>
          <CustomButton
            title="Friday"
            type={ButtonType.SECONDARY}
            onPress={() => navigation.navigate("Friday")}
          />
        </View>
        <View style={styles.buttonSpacer}>
          <CustomButton
            title="Saturday"
            type={ButtonType.SECONDARY}
            onPress={() => navigation.navigate("Saturday")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "#F6EAD3",
    fontWeight: "bold",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F6EAD3",
  },
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
    marginTop: 45,
  },
  image: {
    width: 90,
    height: 90,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
  },
  scrollViewContainer: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
});
