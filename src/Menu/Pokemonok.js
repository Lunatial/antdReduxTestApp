import React, { Component } from 'react';

import PokemonsGrid from './PokemonsGrid';

class Pokemons extends Component {

    render() {
        return (
            <div style={{ height: '100%', width: '100%', paddingLeft: 8, paddingTop: 8 }}>
                <PokemonsGrid />
            </div>
        );
    }
}

export default Pokemons;