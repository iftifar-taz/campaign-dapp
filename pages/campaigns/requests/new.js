import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import { Form, Message, Button, Input } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {

    state = {
        description: '',
        value: '',
        recipient: '',
        errorMessage: "",
        loading: false
    };

    static async getInitialProps(props) {
        return {
            address: props.query.address
        }
    }
    static async getInitialProps(props) {
        return {
            address: props.query.address
        }
    }

    setDescriptionState = value => {
        this.setState({ description: value });
    };

    setValueState = value => {
        this.setState({ value: value });
    };

    setRecipientState = value => {
        this.setState({ recipient: value });
    };

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            errorMessage: '',
            loading: true
        });

        try {
            const campaign = Campaign(this.props.address);
            const { description, value, recipient } = this.state;

            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient
            ).send({ from: accounts[0] });

            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>Back</a>
                </Link>
                <h3>Create a Request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value={this.state.description}
                            onChange={event => this.setDescriptionState(event.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value (ether)</label>
                        <Input
                            value={this.state.value}
                            onChange={event => this.setValueState(event.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input
                            value={this.state.recipient}
                            onChange={event => this.setRecipientState(event.target.value)}
                        />
                    </Form.Field>
                    <Message error header="Oops!!" content={this.state.errorMessage} />
                    <Button primary loading={this.state.loading}>Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;