import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    
    function handlerSubmit(e) {
        e.preventDefault();
        console.log(username);
    }
    return (
        <div className="login-container">
            <form onSubmit={handlerSubmit}>
                <img src={Logo} alt="logo" />
                <input
                    value={username}
                    placeholder="Digite seu usuário no Github"
                    onChange={ e=>setUsername(e.target.value) }
             />
                <button type="submit">Enviar</button>
            </form>

        </div>
    );
}
export default Login;