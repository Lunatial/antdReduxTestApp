import React from 'react';

import {Layout, Button, Tooltip} from 'antd';
import 'antd/dist/antd.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MenuComp from './Menu';

import Iranyitopult from './Menu/Iranyitopult';
import X from './Menu/X';
import Pokemons from './Menu/Pokemonok';
import Timeline from './Menu/Timeline';
import NotFound from './Menu/NotFound';

const {Header, Content, Sider} = Layout;

class App extends React.Component {

    state = {
        collapsed: false
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    }


    render() {
        return (
            <BrowserRouter>
                <Layout style={{minHeight: '100vh', maxHeight: '100%'}}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" style={{textAlign: 'center', color: 'white', lineHeight: '62px',}}>
                            MIRKÓ TESZTOLDAL
                        </div>

                        <MenuComp/>

                    </Sider>
                    <Layout className="layout">

                        <Header
                            style={{background: '#fff', borderBottom: '4px solid rgb(233, 30, 99)'}}>
                                <Tooltip title="Random button 1">
                                    <Button
                                        type="primary"
                                        shape="circle"
                                        icon="user-add"
                                        style={{'marginRight': '30px'}}
                                    >
                                    </Button>
                                </Tooltip>
                                <Tooltip title="Random button 2">
                                    <Button
                                        type="primary"
                                        icon="solution"
                                        style={{'marginRight': '30px'}}
                                    >
                                    </Button>
                                </Tooltip>
                        </Header>

                        <Content style={{margin: '0 16px', height: '100%'}}>
                            <div style={{minHeight: 360, height: '100%'}}>
                                <Switch>
                                    <Route exact path="/" render={() => <Iranyitopult title='Irányítópult'/>}/>
                                    <Route path="/X" render={() => <X/>}/>
                                    <Route path="/pokemons" render={() => <Pokemons/>}/>
                                    <Route path="/timeline" render={() => <Timeline/>}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;