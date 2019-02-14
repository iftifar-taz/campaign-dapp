import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Menu style={{ marginTop: '10px' }}>
                <Link route="/">
                    <a className="item">App Name</a>
                </Link>
                <Menu.Menu position="right">
                    <Link route="/">
                        <a className="item">Campaigns</a>
                    </Link>
                    <Link route="/campaigns/new">
                        <a className="item">+</a>
                    </Link>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;