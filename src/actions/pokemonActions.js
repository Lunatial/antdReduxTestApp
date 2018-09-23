import {
    AXIOS_POKEMONS,
    AXIOS_SELECTEDPOKEMONSEARCH,
    SET_SELECTED_POKEMON,
    SET_SELECTED_POKEMON_SEARCH,
    SELECTED_POKEMONS_DATA_API,
    SET_POKEMON_MODAL_VISIBLE,
    HANDLE_MODAL,
    LOAD_POKEMON_MODAL
} from './types';

import axios from 'axios';

export const axiosPokemons = () => dispatch => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1000')
        .then(response => response.data.results)
        .then(pokemons =>
            dispatch({
                type: AXIOS_POKEMONS,
                payload: pokemons,
                rowData: pokemons.map((pokemon, index) => (
                    {
                        id: index + 1,
                        name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
                        url: pokemon.url,
                    }
                ))
            })
        )
        .catch(function (error) {
            console.log(error);
        });
};

export const selectedPokemonSearch = (query = 'pokemon') => dispatch => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=1&api_key=dc6zaTOxFJmzC`)
        .then(response => {
            dispatch({
                type: AXIOS_SELECTEDPOKEMONSEARCH,
                gifs: response.data.data,
                loading: false
            });
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
};

export const setSelectedPokemon = pokemonAdatokNev => dispatch => {
    dispatch({
        type: SET_SELECTED_POKEMON,
        selectedPockemon: pokemonAdatokNev
    })
};

export const setSelectedPokemonDataApi = pokemonAdatok => dispatch => {
    dispatch({
        type: SELECTED_POKEMONS_DATA_API,
        selectedPockemon: pokemonAdatok
    })
};

export const setPokemonModalVisible = () => dispatch => {
    dispatch({
        type: SET_POKEMON_MODAL_VISIBLE,
        modalVisible: true
    })
};

export const handleModal = () => dispatch => {
    dispatch({
        type: HANDLE_MODAL,
        modalVisible: false,
        specSelectedPokemonData: null
    })
};

export const doubleClickedPokemon = specPokemonData => dispatch => {
    axios.get(specPokemonData)
        .then(response => {
            dispatch({
                type: SET_SELECTED_POKEMON_SEARCH,
                specSelectedPokemonData: response.data
            });
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
};

export const InitValueModal = (data) => dispatch => {
    dispatch({
        type: LOAD_POKEMON_MODAL,
        data
    })
};