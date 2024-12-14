import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { navigate } from '../navigation/navigationService';
const NavBarDown = ({ route, navigation }) => {
  return (
  
      <View  style={styles.containerSub}>
        <TouchableOpacity> <Image source={require("../../assets/home.png")} /></TouchableOpacity>
        <TouchableOpacity> <Image source={require("../../assets/conta.png")} /></TouchableOpacity>
        <TouchableOpacity> <Image source={require("../../assets/analytic.png")} /></TouchableOpacity>
        <TouchableOpacity  onPress={() => navigate('UserProfile')}> <Image source={require("../../assets/setings.png")} /></TouchableOpacity>
    
      </View>
  
  );
};

const styles = StyleSheet.create({

  containerSub: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    backgroundColor: "#333333",
    borderRadius:"20px",
    padding:"10px"
 
  },
  containerSub: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    backgroundColor: "#333333",
    borderRadius:"20px",
    padding:"10px"
 
  },
});

export default NavBarDown;
