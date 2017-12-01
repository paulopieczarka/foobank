import React, { Component } from "react";
import { Form, Input, Button, Message, Checkbox } from "element-react";

import { Title } from "../components/AphroditeUI";
import Header from "./Header";

class Register extends Component
{
    onChange(value, name) {
        this.setState({ [name]: value });
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render()
    {
        return <div>
            <Header onlyTitle />

            <Title 
                text="Primeiro passo" 
                description="Vamos lá! Precisamos do seu nome, email e uma senha." 
            />

            <main>
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