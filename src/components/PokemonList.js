import React from "react";
import { Text, FlatList } from "react-native";

export default function PokemonList({ pokemons }) {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({item}) => <Text>{item.name}</Text>}
    />
  );
}
