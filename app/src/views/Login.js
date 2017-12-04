import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Message, Loading } from "element-react";

import { Title } from "../components/AphroditeUI";
import Header from "./Header";
import Fetch from "../helpers/Fetch";

class Login extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isSubmitting: false,
            form: {}
        };
    }

    onChange(value, name) 
    {
        let { form } = this.state;
        form[name] = value;

        this.setState({ form: form });
    }

    onSubmit(event) 
    {
        event.preventDefault();
        this.setState({ isSubmitting: true });

        Fetch.post("/login", this.state.form)
        .then(response => response.json())
        .then(result => {
            this.setState({ isSubmitting: false });
            if(result.status === "fail") {
                Message.error(result.message);
                return;
            }

            // Zero protection, no regrets.
            window.sessionStorage.setItem("bank", result.result);

            Message.success("Login realizado!");
            window.history.back();
        })
        .catch(err => {
            this.setState({ isSubmitting: false });
            Message.warning("O servidor encontra-se indisponível.");
        });
    }

    render()
    {
        return <div className="page">
            <Header 
                onlyTitle 
                location={this.props.location} 
                history={this.props.history} 
            />

            { this.state.isSubmitting && <Loading fullscreen={true} /> }
        
            <Title 
                text="Oi, lindo!" 
                description="Digite seu email e senha para ver sua conta." 
            />

            <main>

                <Form onSubmit={this.onSubmit.bind(this)}>
                    <Form.Item label="Email">
                        <Input 
                            size="large" 
                            type="email" 
                            placeholder="anitta@poderosa.br"
                            onChange={value => this.onChange(value, "email")}
                        />
                    </Form.Item>

                    <Form.Item label="Senha">
                        <Input 
                            size="large" 
                            type="password" 
                            placeholder="senhamegasegura" 
                            onChange={value => this.onChange(value, "password")}    
                        />
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