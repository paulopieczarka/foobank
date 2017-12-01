import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles/Card.css";

class Card extends Component
{
    static propTypes = {
        name: PropTypes.string,
        icon: PropTypes.string,
        labels: PropTypes.array,
        title: PropTypes.string,
        text: PropTypes.string
    }

    render()
    {
        return <div className="card">
            <div className="card-header">
                {this.props.icon && <i className="material-icons">{ this.props.icon }</i> }
                {this.props.labels && this.props.labels.map((lb, key) => FormatedLabel(lb, key))}
            </div>
            <div className="card-main">
                {this.props.title && <div className="card-title">{ this.props.title }</div>}
                {this.props.text && <div className="card-text">{ this.props.text }</div>}
            </div>
        </div>;
    }
}

const FormatedLabel = (label, key) => {

    if(typeof label === "object") {
        return <span key={key} className="card-label">{ label.toLocaleString() }</span>
    }

    return <span key={key} className="card-label">{ label }</span>;
};

export default Card;