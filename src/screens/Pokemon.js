import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getPokemonDetailsByIdApi } from "../api/pokemon";

export default function Pokemon({
  navigation,
  route: {
    params: { id },
  },
}) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsByIdApi(id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [id]);

  if (!pokemon) return null;

  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
