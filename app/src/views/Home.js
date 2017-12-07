import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Header from "./Header";
import Timeline from "./Timeline";
import Account from "./Account";
import Pay from "./Pay";

class Home extends Component
{
    componentDidMount() {
        console.log(sessionStorage.getItem("bank"));
    }

    render()
    {
        return <div className="page">
            <Header 
                onlyTitle 
                location={this.props.location} 
                history={this.props.history} 
            />

            <main>
                <Route exact path="/" component={Timeline} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/pay" component={Pay} />
            </main>

            <div className="footer-menu">
                <Link to="/account"><div>
                    <i className="material-icons">perm_identity</i> Sua conta 
                </div></Link>
                <Link to="/pay"><div> 
                    <i className="material-icons">attach_money</i> Pagar </div>
                </Link>
                <Link to="/pay">
                    <div> <i className="material-icons">local_atm</i> Transferir </div>
                </Link>
            </div>
        </div>;
    }
}

export default Home;