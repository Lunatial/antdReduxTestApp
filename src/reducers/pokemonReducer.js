import {
    AXIOS_POKEMONS, AXIOS_SELECTEDPOKEMONSEARCH, SELECTED_POKEMONS_DATA_API,
    SET_SELECTED_POKEMON, SET_POKEMON_MODAL_VISIBLE, SET_SELECTED_POKEMON_SEARCH, HANDLE_MODAL
} from '../actions/types';

const initialState = {
    columnDefs: [
        { headerName: "ID", field: "id", width: 70, hide: false },
        { headerName: "Neve", field: "name", width: 150, hide: false },
        { headerName: "URL", field: "url", width: 260, hide: false },
    ],
    onGridReady: function (params) {
        params.api.sizeColumnsToFit();
    },
    pokemons: [],
    gifs: [],
    loading: false,
    rowData: [],
    modalVisible: false,
    selectedPockemon: null,
    selectedPockemonURL: '',
    specSelectedPokemonData: '',
    rowSelection: "single",
    localeText: {
        of: 'per',
        to: '-től',
        page: 'Lap',
        equals: 'egyenlő',
        lessThan: 'kisebb',
        greaterThan: 'nagyobb',
        contains: 'tartalmazza',
        startsWith: 'kezdődik',
        endsWith: 'végződik',
        notEqual: 'nem egyenlő',
        notContains: 'nem tartalmazza'
    },
    headerHeight: 35,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AXIOS_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                rowData: action.rowData
            };
        case AXIOS_SELECTEDPOKEMONSEARCH:
            return {
                ...state,
                gifs: action.gifs,
                loading: action.loading
            };
        case SET_SELECTED_POKEMON:
            return {
                ...state,
                selectedPockemon: action.selectedPockemon
            };
            case SELECTED_POKEMONS_DATA_API:
            return {
                ...state,
                selectedPockemonURL: action.selectedPockemon
            };
            case SET_POKEMON_MODAL_VISIBLE:
            return {
                ...state,
                modalVisible: true
            };
            case HANDLE_MODAL:
            return {
                ...state,
                modalVisible: false,
                specSelectedPokemonData: null
            };
            case SET_SELECTED_POKEMON_SEARCH:
            return {
                ...state,
                specSelectedPokemonData: action.specSelectedPokemonData
            };
        default:
            return state;
    }
}
