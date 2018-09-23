import { combineReducers } from 'redux';
import pokemonModalReducer from './pokemonModalReducer';
import pokemonReducer from './pokemonReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    pokemons: pokemonReducer,
    pokemonInitialState: pokemonModalReducer,
    form: formReducer
});
