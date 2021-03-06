import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './style.css'
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(evt) {
    evt.preventDefault();

    try {
      const res = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', res.data.name);
      history.pushState('/profile');
    } catch(e) {
      alert('Falha no login, verifique seu ID.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt='Be The Hero' />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder='Sua ID'
          />
          <button className='button' type='submit'>Entrar</button>

          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt='Heroes' />
    </div>
  );
}
