import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { capitalize, map } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Type({ types }) {
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text style={styles.name}>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  name: {
    color: "#fff",
    fontSize: 15,
  },
});
