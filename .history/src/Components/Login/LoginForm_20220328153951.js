import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('')

  return (
    <section>
        <h1>Login</h1>
        <form>
            <input type="text" value={username} onChange={({target}) => setUserName(target.value)} />
            <input type="text" value={password} onChange={({target}) => setPassword(target.value)} />

        </form>
        <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}
