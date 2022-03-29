import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

export default function LoginForm() {

    const username = useForm();
    console.log(username);

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(),
        }).then((response) => {
            console.log(response);
            return response.json() ;
        }).then(json => {
            console.log(json);
        })
    }

  return (
    <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <Input label="usuário" type="text" name="usuário" {...username} />
            <Input label="senha" type="password" name="password" />
            <Button>Entrar</Button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}
