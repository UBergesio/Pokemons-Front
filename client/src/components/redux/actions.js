import axios from "axios";
export const ADD_ALL_POKE = "ADD_ALL_POKE";
export const ADD_TYPES = "ADD_TYPES";
export const ADD_POKE_NAME = "ADD_POKE_NAME";
export const SET_PAGE = "SET_PAGE";
export const ORDER = "ORDER";
export const ORDER_ATTACK = "ORDER_ATTACK";
export const FILTER = "FILTER";
export const FILTER_DB = "FILTER_DB";
export const CREATE_POKE = "CREATE_POKE";

export const createPoke = (pokemonData) => {
  const endpoint = "/pokemons";
  const {
    nombre,
    imagen,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    tipos,
  } = pokemonData;
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, {
        nombre,
        imagen,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso,
        tipos,
      });
      const { data } = response;
      return dispatch({
        type: CREATE_POKE,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const addTypes = (types) => {
  const endpoint = "/pokemons/types";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const { data } = response;
      return dispatch({
        type: ADD_TYPES,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const addPoke = (pokemon) => {
  const endpoint = "/pokemons";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const { data } = response;
      return dispatch({
        type: ADD_ALL_POKE,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const addPokeName = (pokemon) => {
  return {
    type: ADD_POKE_NAME,
    payload: pokemon,
  };
};

export const setPage = (pageNumber) => {
  return {
    type: SET_PAGE,
    payload: pageNumber,
  };
};

export const orderPoke = (orden = "A") => {
  return { type: ORDER, payload: orden };
};

export const orderAttack = (orden = "A") => {
  return { type: ORDER_ATTACK, payload: orden };
};

export const filterPoke = (types) => {
  return { type: FILTER, payload: types };
};

export const filterDB = (pokeDB) => {
  return { type: FILTER_DB, payload: pokeDB };
};
