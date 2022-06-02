import React from 'react'

import illustrationImage from '../../assets/images/illustration.svg'
import logoImage from '../../assets/images/logo.svg'
import googleImage from '../../assets/images/google-icon.svg'

import styles from './styles'

export function Home () {
  return (
    <styles.page>
      <styles.home>
        <img
          src={illustrationImage}
          alt="Ilustração de perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo-real</p>
      </styles.home>
      <styles.login>
        <div className='main-content'>
          <img
            className='logo'
            src={logoImage}
            alt="Letmeask"
          />
          <button>
            <img 
              src={googleImage} 
              alt="google logo" 
            />
            Crie sua sala com o Google
          </button>
          <div>ou entre em um sala</div>
          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala" 
            />
            <button 
              type="submit"
            >
              Entrar na sala
            </button>
          </form>
        </div>
      </styles.login>
    </styles.page>
  )
}