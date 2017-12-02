import React, { Component } from "react";

import Header from "./Header";
import Timeline from "./Timeline";

class Home extends Component
{
    componentDidMount() {
        console.log(this.props);
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
                <Timeline />
                
                <div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </main>

            <div className="footer-menu">
                <div> <i className="material-icons">perm_identity</i> Sua conta </div>
                <div> <i className="material-icons">attach_money</i> Pagar </div>
                <div> <i className="material-icons">local_atm</i> Transferir </div>
            </div>
        </div>;
    }
}

export default Home;