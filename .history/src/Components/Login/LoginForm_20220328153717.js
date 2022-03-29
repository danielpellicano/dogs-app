import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  return (
    <section>
        <h1>Login</h1>
        <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}
