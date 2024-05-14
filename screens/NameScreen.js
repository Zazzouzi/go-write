import
React, {
useState }
from
"react";

import {
View,
Text,
Image,
StyleSheet,
SafeAreaView,
TextInput }
from
"react-native";

import {
Button }
from
"react-native-elements";

import
CustomButton, {
ButtonType }
from
"../components/CustomButton";

import
logoImage
from
"../assets/logo.png";




export
default
function
NameScreen({
navigation }) {

   const [name,
setName]
=
useState("");

 return (

   <SafeAreaView
style={styles.container}>

     <View
style={styles.topContainer}>

       <Image
style={styles.image}
source={logoImage}
resizeMode="contain"
/>

       <Text
style={styles.text}>
 GoWrite </Text>

     </View>




     <View
style
=
{styles.title}>

     <Text
style
=
{styles.subtitle}>

        What is your name?

      </Text>

      <TextInput
style
=
{styles.input}
placeholder
=
"Enter your name"
placeholderTextColor
=
'#A58E72'
value
=
{name}
onChangeText
=
{setName}
multiline={true}/>

     </View>




     






     <View
style={styles.buttonContainer}>

       <CustomButton

         title="Create Journel"

         type={ButtonType.PRIMARY}

         onPress={()=>
navigation.navigate("Welcome")}

       />

     </View>

   </SafeAreaView>

 );

}




const
styles
=
StyleSheet.create({

 container: {

   flex:
1,

   backgroundColor:
"#CFA75B",

   alignItems:
"center",

   justifyContent:
"space-between",

   padding:
10,

 },

 topContainer: {

   flexDirection:
"row",

   alignItems:
"center",

   justifyContent:
"center",

   height:
150,

 },

 image: {

   width:
90,

   height:
90,

   shadowColor:
"#000",

   shadowOffset: {
width:
0,
height:
4 },

   shadowOpacity:
0.25,

 },

 text: {

   fontSize:
50,

   color:
"#F6EAD3",

   fontWeight:
"bold",

   marginLeft:
10,

 },

 buttonContainer: {

   height:
120,

   width:
"100%",

   justifyContent:
"space-between",

   alignItems:
"center",

   marginTop:
-20,

 },

 input: {

   fontSize:
20,

   padding:
16,

   borderColor:
"#705E48",

   borderRadius:
8,

   backgroundColor:
'#F6EAD3',

   width:
'100%',

 },

 subtitle: {

   fontSize:
20,

   color:
"#F6EAD3",

   fontWeight:
"bold",

   marginLeft:
10,

 },

 title: {

  padding:
16,

  height:
'70%',

  width:
'100%',

 }

});