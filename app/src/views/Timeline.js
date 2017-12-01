import React, { Component } from "react";
import { Card } from "../components/AphroditeUI";

const StaticTimelineContent = [
    { 
        icon: "check_circle", 
        text: "Você enviou 5.876 tops para Adriano.", 
        labels: [new Date(), "Transferência"] 
    }, { 
        icon: "receipt", 
        text: "Você recebeu 56 tops de Alexandre.", 
        labels: [new Date(), "Transferência"] 
    }, { 
        icon: "payment", 
        text: "Você pagou boleto de 56.432 tops de FooGift.", 
        labels: [new Date(), "Pagamento"] 
    }, { 
        icon: "error", 
        text: "Você enviou 5.876 tops para Adriano.", 
        labels: [new Date(), "Transferência"] 
    }, { 
        icon: "block", 
        text: "Você enviou 5.876 tops para Adriano.", 
        labels: [new Date(), "Transferência"] 
    }, { 
        icon: "error", 
        text: "Você enviou 5.876 tops para Adriano.", 
        labels: [new Date(), "Transferência"] 
    }, { 
        icon: "error", 
        text: "Você enviou 5.876 tops para Adriano.", 
        labels: [new Date(), "Transferência"] 
    }
];

class Timeline extends Component
{
    render()
    {
        return <div className="timeline">
            <Card title="Você possui 25.486 tops." />
            <TimelineTitle title="Atividades" color="orange" />
            {StaticTimelineContent.map((tlc, key) => <Card
                key={key} 
                icon={tlc.icon} 
                labels={tlc.labels}
                text={tlc.text}
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