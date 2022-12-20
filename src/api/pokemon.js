import { API_URI } from "../utils/constants";

export async function getPokemonsApi(nextUrl) {
  try {
    const url = `${API_URI}/pokemon?limit=20&offset=0`;
    const response = await fetch(nextUrl ?? url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByIdApi(id) {
  try {
    const url = `${API_URI}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
