import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Message } from "element-react";

import { Title } from "../components/AphroditeUI";
import Header from "./Header";

class Login extends Component
{
    onSubmit(event)
    {
        event.preventDefault();
        Message.success("Você é um caminhão 🚚 de login!");
    }

    render()
    {
        return <div className="page">
            <Header 
                onlyTitle 
                location={this.props.location} 
                history={this.props.history} 
            />
        
            <Title 
                text="Oi, lindo!" 
                description="Digite seu email e senha para ver sua conta." 
            />

            <main>

                <Form onSubmit={this.onSubmit.bind(this)}>
                    <Form.Item label="Email">
                        <Input size="large" type="email" placeholder="anitta@poderosa.br" />
                    </Form.Item>

                    <Form.Item label="Senha">
                        <Input size="large" type="password" placeholder="senhamegasegura" />
                    </Form.Item>

                    <Form.Item>
                        <Button size="large" type="primary" nativeType="submit">Entrar</Button>
                    </Form.Item>
                </Form>

                <div>
                    <Link to="/register">Faça parte da revolução.</Link>
                    Um banco que pensa outside the box.
                </div>
            </main>
        </div>;
    }
}

export default Login;