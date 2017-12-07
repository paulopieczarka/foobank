import React, { Component } from "react";
import { Button } from "element-react";

class Account extends Component
{
    componentDidMount() {
        console.log(sessionStorage.getItem("bank"));
    }

    logout() {
        sessionStorage.clear();
    }

    render()
    {
        return <div className="inside-page">
            <pre>
                { JSON.stringify(JSON.parse(sessionStorage.getItem("bank")), null, 2) }
            </pre>
            <Button onClick={this.logout.bind(this)}>Sair</Button>
        </div>;
    }
}

export default Account;