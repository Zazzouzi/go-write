import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useActionSheet } from '@expo/react-native-action-sheet';
import * as ImagePicker from "expo-image-picker"

export default function ProfilePictureScreen({ route, navigation }) {
    const {name} = route.params;

    const [avatar, setAvatar] = useState(null);
    const {showActionSheetWithOptions} = useActionSheet();
    const launchCameraRequested = async ( )=> {
        const {status} = await ImagePicker.getCameraPermissionsAsync();
        if (status !== "granted") {
            alert("Sorry, we need camera permissions to make this work!");
            ImagePicker.requestCameraPermissionsAsync();
            return;
        }
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowEditing: true,
                quality: 1,
                aspect: [4,3],
            });
            if (!result.canceled){//changed from cancelled to canceled
                //update value of avatar
                const uri = result.assets[0].uri
                console.log(uri)
                setAvatar(result.uri);
            }
        } catch (error) {
            console.log("Error occured while launching the camera: ", error);
        }
    };

    const launchLibraryRequested = async () => {
        const {status} = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("Sorry, we need library permissions while using image picker!");
            ImagePicker.requestMediaLibraryPermissionsAsync();
            return;
        }
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4,3],
            });
            if (!result.canceled){ //changed from cancelled to canceled again
                //update value of avatar
                setAvatar(result.uri);
            }
        } catch (error) {
            console.log("Error occured while launching the camera: ", error);
        }
    }
    const onPress = () => {
        //console.log("Hey we've checked the button")
        const options = ["Camera", "Library", "Cancel"];
        const destructiveButtonIndex = -1;
        const cancelButtonIndex = 2;

        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                destructiveButtonIndex,
            },
            (selectedIndex) => {
                switch (selectedIndex){
                    case 0:
                        //save
                        launchCameraRequested();
                        break;
                    case 1:
                        //delete
                        launchLibraryRequested();
                        break;
                    case cancelButtonIndex:
                        //canceled
                        //console.log("cancel")
                        break;
                }
            }
        );
    };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style = {styles.title}> Add a profile picture </Text> 
        <Text style = {styles.subtitle}>
            Add a profile pictrue to match the aesthetic of your journal
        </Text>
        <TouchableOpacity style = {styles.cameraContainer} onPress = {onPress}>
            {
                avatar ?(
                    <Image
                        source={ {uri: avatar}}
                        style={styles.avatar}
                        resizeMode="contain"
                    />
                ) : (
                    <Image
                        source={require("../assets/icon-camera.png")}//changed from _ to -
                        style={styles.icon}
                        resizeMode="contain"
                    />
                )
            }
            
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Create Journal"
          type="primary"
          onPress={() => {
            navigation.navigate("Welcome", {
                name: name,
                avatar: avatar,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
      text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#191259',
        marginBottom: 16,
      },
      title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#191259",
        marginBottom: 16,
      },
      subtitle: {
        fontSize: 20,
        color: '#656565',
        paddingBottom: 16,
      },
      cameraContainer: {
        width: 201,
        height: 201,
        borderRadius: 100.5,
        backgroundColor: "#D9D9D9",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 100,
      },
      icon: {
        width: 55,
        height: 55,
      },
      avatar: {
        width: 201,
        height: 201,
        borderradius: 100.5,
      }
});