import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './style.css'
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [value, setVal] = useState('');
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(evt) {
    evt.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push('/profile');
    } catch(e) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Título do caso'
          />
          <textarea
            value={description}
            onChange={e => setDesc(e.target.value)}
            placeholder='Descrição'
          />
          <input
            value={value}
            onChange={e => setVal(e.target.value)}
            placeholder='Valor em reais'
          />

          <button className="button" type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
