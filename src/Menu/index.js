import React from 'react';

import { Menu, Icon } from 'antd';

import { NavLink } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class MenuComp extends React.Component {
    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={[]} mode="inline">
                <Menu.Item key="1">
                    <NavLink exact to="/">
                        <Icon type="home" />
                        <span>Irányítópult</span>
                    </NavLink>
                </Menu.Item>

                <SubMenu
                    key="sub1"
                    title={<span><Icon type="file-text" /><span>X and Y</span></span>}
                >
                    <Menu.Item key="4"><NavLink to="/X">X</NavLink></Menu.Item>
                    <Menu.Item key="5"><NavLink to="/ASD">Direkt nem létező link</NavLink></Menu.Item>
                </SubMenu>

                <Menu.Item key="11">
                    <NavLink to="/pokemons">
                        <Icon type="qq" />
                        <span>Pokemonok</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="12">
                    <NavLink to="/timeline">
                        <Icon type="hourglass" />
                        <span>Timeline</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        );
    }
}

export default MenuComp;
