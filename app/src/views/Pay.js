import React, { Component } from "react";
import { Loading, Button, Card, Input, Message } from "element-react";

import Fetch from "../helpers/Fetch";

class Pay extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            info: null,
            checkoutForm: {}
        };
    }

    componentDidMount() 
    {
        const user = JSON.parse(sessionStorage.getItem("bank"));
        const accounts = user.accounts.join(",");
        
        let { checkoutForm } = this.state;
        checkoutForm["buyer"] = user._id;
        this.setState({ checkoutForm: checkoutForm });

        Fetch.get(`/account/${accounts}`)
        .then(response => response.json())
        .then(result => this.setState({ info: result.data }))
        .catch(err => console.log(err));
    }

    checkout() {
        Fetch.post("/account/pay", this.state.checkoutForm)
        .then(response => response.json())
        .then(result => Message.success(result.message))
        .catch(err => console.log(err));
    }

    onChange(value, name) {
        let { checkoutForm } = this.state;
        checkoutForm["id"] = name;
        this.setState({ checkoutForm: checkoutForm });
    }

    render()
    {
        return <div className="inside-page">
            <Card>
                { this.state.info && <AccountInfo account={this.state.info} /> }
                { !this.state.info &&  <Loading  /> }
            </Card>

            <Card header="Pagar Boleto" style={{ marginTop: 20 }}>
                <Input placeholder="Código do boleto" onChange={val => this.onChange(this, val, "id")} /><br />
                <Button type="primary" onClick={this.checkout.bind(this)}>Pagar</Button>
            </Card>
        </div>;
    }
}

const AccountInfo = ({account}) => (
    <div>
        <div>Balance: {account.balance}</div>
        <div>Number: {account.number}</div>
    </div>
);

export default Pay;