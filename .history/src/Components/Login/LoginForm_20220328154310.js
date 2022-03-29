import React from 'react'
import { Link } from 'react-router-dom'

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
            return response.json;
        })
    }

  return (
    <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={({target}) => setUserName(target.value)} />
            <input type="text" value={password} onChange={({target}) => setPassword(target.value)} />
            <button>Entrar</button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}
