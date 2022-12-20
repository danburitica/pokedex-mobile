import { capitalize } from "lodash";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Platform } from "react-native";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header({ name, order, image, type }) {
  const pokemonColor = getColorByPokemonType(type);
  const bgColor = { backgroundColor: pokemonColor, ...styles.bgColor };

  return (
    <>
      <View style={bgColor} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bgColor: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Platform.OS === 'android' ? 80 : 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain'
  },
});
