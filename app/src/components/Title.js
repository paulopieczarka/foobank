import React from "react";

const TitleStyles =
{
    wrapper: {
        padding: 16
    },

    text: {
        fontSize: 18,
        color: "lightseagreen",
        textTransform: "uppercase",
        fontWeight: "bold",
        paddingBottom: 4
    },

    description: {
        fontSize: 16,
        color: "rgba(0,0,0,.5)"
    }
}

export const Title = props => (
    <div style={TitleStyles.wrapper}>
        <div style={TitleStyles.text}>{ props.text }</div>
        <div style={TitleStyles.description}>{ props.description }</div>
    </div>
);