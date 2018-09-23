import React from 'react';

import {Modal,} from 'antd';

import {Field, reduxForm} from 'redux-form'

const PokemonModal = props => (
    <Modal
        title={
            <strong>{props.pokemons.selectedPockemon && props.pokemons.selectedPockemon.name[0].toUpperCase() + props.pokemons.selectedPockemon.name.slice(1)}</strong>}
        visible={props.pokemons.modalVisible}
        onOk={props.handleOk}
        okText="Ok"
        onCancel={props.handleCancel}
        cancelText="Mégsem"
    >
        <p>
            <strong>Magassága:</strong> {props.pokemons.specSelectedPokemonData && props.pokemons.specSelectedPokemonData.height}
        </p>
        <p>
            <strong>Súlya:</strong> {props.pokemons.specSelectedPokemonData && props.pokemons.specSelectedPokemonData.weight} lbs
        </p>
        <p>
            <strong>Típusa(i):</strong> {props.pokemons.specSelectedPokemonData && props.pokemons.specSelectedPokemonData.types.map(type => type.type.name + ', ')}
        </p>
        <p>
            <strong>Tapasztalat:</strong> {props.pokemons.specSelectedPokemonData && props.pokemons.specSelectedPokemonData.base_experience} xp
        </p>
        <p>
            <strong>Képessége(i):</strong>
            {props.pokemons.specSelectedPokemonData && props.pokemons.specSelectedPokemonData.abilities.map(ability => ability.ability.name + ', ')}
        </p>
        <p>
            <strong>Speciális mozdulatai:</strong>
            {props.pokemons.specSelectedPokemonData && props.pokemons.specSelectedPokemonData.moves.map(move => move.move.name + ', ')}
        </p>

        <hr/>

        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="favoriteMoves">Kedvenc képessége</label>
                <Field
                    name="favoriteAbility"
                    component="select"
                >
                    {props.pokemons.specSelectedPokemonData && props.pokemons.specSelectedPokemonData.abilities.map(ability =>
                        <option
                            key={ability.ability.name}
                            value={ability.ability.url}
                        >
                            {ability.ability.name}
                        </option>
                    )}
                </Field>
            </div>
            <div>
                <label htmlFor="favoriteMoves">Kedvenc Speciális mozdulatai</label>
                <Field
                    name="favoriteMoves"
                    component="select"
                >
                    {props.pokemons.specSelectedPokemonData && props.pokemons.specSelectedPokemonData.moves.map(move =>
                        <option
                            key={move.move.name}
                            value={move.move.url}
                        >
                            {move.move.name}
                        </option>
                    )}
                </Field>
            </div>
            <button type="submit">Submit</button>
        </form>
    </Modal>
);

export default reduxForm({
    form: 'PokemonModal'
})(PokemonModal)
