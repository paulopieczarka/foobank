import React, { Component } from "react";
import { Card } from "../components/AphroditeUI";
import Fetch from "../helpers/Fetch";

class Timeline extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            balance: 0,
            activities: []
        };
    }

    componentDidMount()
    {
        const session = JSON.parse(sessionStorage.getItem("bank"));
        Fetch.get(`/account/home/${session._id}`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            this.setState({
                balance: result.user.accounts[0].balance,
                activities: result.activities
            });
        })
        .catch(err => console.log(err));
    }

    render()
    {
        return <div className="timeline">
            <Card title={`Você possui ${this.state.balance} tops.`} />
            <TimelineTitle title="Atividades" color="orange" />
            {this.state.activities.map((tlc, key) => <Card
                key={key} 
                icon={tlc.icon} 
                labels={tlc.labels}
                text={tlc.message}
            />)}
        </div>;
    }
}

const TimelineTitle = props => <div 
    className="timeline-title" 
    style={{ borderColor: (props.color)?props.color:"teal" }}>
    <span>{ props.title }</span>
</div>;

export default Timeline;