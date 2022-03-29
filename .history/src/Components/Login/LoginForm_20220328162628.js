import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input';

export default function LoginForm() {
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify({username, password}),
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
        <form onSubmit={handleSubmit}>
            <Input label="usuário" type="text" />
            <Input label="senha" type="password" />
            <button>Entrar</button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}
