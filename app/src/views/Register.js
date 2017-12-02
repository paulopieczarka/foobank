import React, { Component } from "react";
import { Form, Input, Button, Message, Checkbox, Loading } from "element-react";

import { Title } from "../components/AphroditeUI";
import Header from "./Header";

class Register extends Component
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

        fetch("http://192.168.1.102:8000/api/register", {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.form)
        })
        .then(response => response.json())
        .then(result => {
            this.setState({ isSubmitting: false });
            if(result.status === "fail") {
                Message.error("O email já foi cadastrado!");
                return;
            }

            Message.success(result.message);
            window.history.back();
        })
        .catch(err => {
            this.setState({ isSubmitting: false });
            Message.warning("O servidor encontra-se indisponível.");
        });
    }

    render()
    {
        return <div>
            <Header 
                onlyTitle 
                location={this.props.location} 
                history={this.props.history} 
            />

            <Title 
                text="Primeiro passo" 
                description="Vamos lá! Precisamos do seu nome, email e uma senha." 
            />

            <main>
                { this.state.isSubmitting && <Loading fullscreen={true} /> }

                <Form onSubmit={ this.onSubmit.bind(this) }>
                    <Form.Item label="Nome completo">
                        <Input 
                            size="large" 
                            onChange={value => this.onChange(value, "name")} 
                            required
                        /> 
                    </Form.Item>

                    <Form.Item label="Email">
                        <Input 
                            size="large" 
                            type="email"
                            onChange={value => this.onChange(value, "email")} 
                            required
                        />
                    </Form.Item>

                    <Form.Item label="Senha">
                        <Input 
                            size="large" 
                            type="password" 
                            onChange={value => this.onChange(value, "password")}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Checkbox checked>Aceito os termos de uso.</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" nativeType="submit">Continuar</Button>
                    </Form.Item>
                </Form>
            </main>
        </div>;
    }
}

export default Register;