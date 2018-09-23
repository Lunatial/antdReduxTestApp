import {LOAD_POKEMON_MODAL} from '../actions/types'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_POKEMON_MODAL:
            return {
                data: action.data
            };
        default:
            return state
    }
};

export default reducer