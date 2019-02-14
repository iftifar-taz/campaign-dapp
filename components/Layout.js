import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Head>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
                </Head>
                <Header />
                {this.props.children}
            </Container>
        );
    }
}

export default Layout;