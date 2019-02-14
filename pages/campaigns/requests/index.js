import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((el, i) => {
                return campaign.methods.requests(i).call();
            })
        );

        return {
            address: address,
            requests: requests,
            requestCount: requestCount,
            approversCount: approversCount
        }
    }

    requestRows() {
        return this.props.requests.map((el, i) => {
            return (
                <RequestRow
                    key={i}
                    id={i}
                    request={el}
                    address={this.props.address}
                    approversCount={this.props.approversCount}
                />
            )
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated="right" style={{ marginBottom: 10 }}>Add Request</Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount (ether)</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.requestRows()}
                    </Body>
                </Table>
                <div>Found {this.props.requestCount} requests.</div>
            </Layout>
        );
    }
}

export default RequestIndex;