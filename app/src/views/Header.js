import React, { Component } from "react";
import { Route } from "react-router-dom";

class Header extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            hasBackButton: false
        };
        
        this.onBackButtonClick = this.onBackButtonClick.bind(this);
    }

    componentDidMount() 
    {
        const { location } = this.props;

        setTimeout(() => {
            this.setState({ hasBackButton: (location.pathname !== "/" && location.pathname !== "/login") });
        }, 1);
    }

    onBackButtonClick() {
        this.props.history.goBack();
    }

    render()
    {
        const isBackable = this.state.hasBackButton ? "is-active" : "";
        const isTitle = this.props.onlyTitle ? "header-login" : "";
        return <header className={`${isTitle}`}>
            <div className={`${isBackable} header-left`}>
                <span className="header-back" onClick={this.onBackButtonClick}>
                    <i className="material-icons">arrow_back</i>
                </span>
                <span className="logo">FooBank</span>
            </div>
            {!this.props.onlyTitle && <Route path="/" component={HomeHeaderMenu} /> }
        </header>;
    }
}

const HomeHeaderMenu = props => (
    <i className="material-icons">notifications_none</i>
);

export default Header;