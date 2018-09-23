import React, {Component} from 'react';

import {Row, Col, Checkbox, Input} from 'antd';

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import logo from './img/logo.jpg';

import PokemonModal from './pokemonModal'

import GifList from '../../components/GifList';

import {connect} from 'react-redux';
import {
    axiosPokemons,
    selectedPokemonSearch,
    setSelectedPokemon,
    setSelectedPokemonDataApi,
    setPokemonModalVisible,
    doubleClickedPokemon,
    handleModal,
    InitValueModal
} from '../../actions/pokemonActions';

const Search = Input.Search;

class PokemonGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onGridReady: function (params) {
                params.api.sizeColumnsToFit();
            }
        }
    }

    componentDidMount() {
        this.props.axiosPokemons();
        this.props.selectedPokemonSearch();
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    onToggleCol = (e) => {
        e.target.checked ? this.gridColumnApi.setColumnVisible(e.target.name, true) : this.gridColumnApi.setColumnVisible(e.target.name, false);
    };

    onSelectionChanged = () => {
        const selectedRow = this.gridApi.getSelectedRows();
        const factRow = selectedRow[0];
        console.log(`A kijelölt pokemon idje: ${factRow.id}, neve: ${factRow.name[0].toUpperCase() + factRow.name.slice(1)}`);
        const pokemonAdatokNev = this.props.pokemons.pokemons.find(pokemon => pokemon.name === factRow.name.toLowerCase());
        this.props.setSelectedPokemon(pokemonAdatokNev);
        const pokemonNeve = this.props.pokemons.selectedPockemon.name;
        this.props.selectedPokemonSearch(pokemonNeve);
    };

    onRowDoubleClicked = () => {
        const selectedRow = this.gridApi.getSelectedRows();
        const factRow = selectedRow[0];
        const pokemonAdatok = this.props.pokemons.pokemons.find(pokemon => pokemon.name === factRow.name.toLowerCase());
        let myFirstPromise = new Promise((resolve, reject) => this.props.setSelectedPokemonDataApi(pokemonAdatok.url));
        myFirstPromise.then(this.props.doubleClickedPokemon(this.props.pokemons.selectedPockemonURL)).then(this.props.setPokemonModalVisible());
        // const initValues = this.props.pokemons.pokemons.specSelectedPokemonData.moves.map(move => move.move.name);
        // this.props.InitValueModal(initValues)
    };

    handleOk = (e) => {
        this.props.handleModal(e);
    };

    handleCancel = (e) => {
        this.props.handleModal(e);
    };

    submit = values => {
        // print the form values to the console
        console.log(values)
    };

    onFilterTextBoxChanged = () => {
        this.gridApi.setQuickFilter(document.getElementById("filter-text-box").value);
    }

    getInitialValues = () => {
        return {
            favoriteAbility: "https://pokeapi.co/api/v2/ability/65/",
            favoriteMoves: "https://pokeapi.co/api/v2/move/15/"
        };
    };

    render() {
        const {pokemons} = this.props;
        return (
            <div style={{height: '100%', background: '#fff'}}>
                <Row style={{height: '100%'}} type="flex" justify="space-between">
                    <Col span={4} style={{padding: 8}}>
                        <div style={{marginBottom: 60}}>
                            <Search
                                style={{width: '80%'}}
                                placeholder="Keress.."
                                id="filter-text-box"
                                onInput={this.onFilterTextBoxChanged}
                                enterButton
                            />
                        </div>
                        <div style={{marginBottom: 18}}>
                            <Checkbox name="id" onChange={this.onToggleCol} defaultChecked={true}>Id</Checkbox>
                        </div>
                        <div style={{marginBottom: 18}}>
                            <Checkbox name="name" onChange={this.onToggleCol} defaultChecked={true}>Név</Checkbox>
                        </div>
                        <div style={{marginBottom: 18}}>
                            <Checkbox name="url" onChange={this.onToggleCol} defaultChecked={true}>URL</Checkbox>
                        </div>
                    </Col>
                    <Col style={{height: '100%'}} span={8}>
                        <div
                            className="ag-theme-balham"
                            style={{
                                boxSizing: "border-box",
                                height: '100%',
                                width: '100%'
                            }}
                        >
                            <AgGridReact
                                enableColResize={true}
                                enableSorting={true}
                                enableFilter={true}
                                columnDefs={pokemons.columnDefs}
                                rowData={pokemons.rowData}
                                paginationAutoPageSize={true}
                                pagination={true}
                                headerHeight={pokemons.headerHeight}
                                localeText={pokemons.localeText}
                                rowSelection={pokemons.rowSelection}
                                onSelectionChanged={this.onSelectionChanged.bind(this)}
                                onGridReady={this.onGridReady.bind(this)}
                                onRowDoubleClicked={this.onRowDoubleClicked.bind(this)}
                            >
                            </AgGridReact>
                            <PokemonModal
                                pokemons={pokemons}
                                handleOk={this.handleOk}
                                handleCancel={this.handleCancel}
                                onSubmit={this.submit}
                                initialValues={this.getInitialValues()}
                            />
                        </div>
                    </Col>
                    <Col span={10} style={{overflow: 'hidden'}} type="flex" justify="center">
                        <div style={{padding: '20 px'}}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <div>
                            {
                                (pokemons.loading) ? <p>Loading...</p> :
                                    <GifList data={pokemons.gifs}/>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemons: state.pokemons
});

export default connect(mapStateToProps, {
    axiosPokemons,
    selectedPokemonSearch,
    setSelectedPokemon,
    setSelectedPokemonDataApi,
    setPokemonModalVisible,
    doubleClickedPokemon,
    handleModal,
    InitValueModal
})(PokemonGrid);