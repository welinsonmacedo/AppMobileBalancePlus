import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import NavBarDown from "../components/NavBarDown";
import CardBalance from "../components/CardBalance";
import CardActions from "../components/CardActions";
import CardMain from "../components/CardMain";
import CardPromotion from "../components/CardPromotion";

const Home = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <View style={styles.Header}>
        <View style={styles.containerSub}>
          <Text style={styles.logo}>W</Text>
          <View>
            <Text style={styles.subtitle}>Olá</Text>
            <Text style={styles.subtitle}>Seja Bem Vindo</Text>
          </View>
        </View>
        <Image source={require("../../assets/notification.png")} />
      </View>
      <View>
        <CardBalance />
      </View>
      <CardMain />
      <View>
        <CardActions />
      </View>
      <CardPromotion />
      <View>
        <NavBarDown />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  container: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    gap:80
  },
  containerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1A1A1A",
    elevation: 5, // Para sombra no Android
    shadowColor: "#000", // Para sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  logo: {
    color: "#fff",
    fontSize: 30,
    marginRight: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 15,
    marginRight: 20,
  },
});

export default Home;
