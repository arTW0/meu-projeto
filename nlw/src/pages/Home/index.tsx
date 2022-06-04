import React from 'react'

import illustrationImage from '../../assets/images/illustration.svg'
import logoImage from '../../assets/images/logo.svg'
import googleImage from '../../assets/images/google-icon.svg'

import styles from './styles'
import { Button } from '../../components/Button/Button'

export const Home = () => {
  return <styles.page>
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
          <div>
            <img
              className='logo'
              src={logoImage}
              alt="Letmeask"
            />
          </div>
          <button className='create-room'>
            <img 
              src={googleImage} 
              alt="google logo" 
            />
            Crie sua sala com o Google
          </button>
          <div
            className='separator'
          >
            ou entre em um sala
          </div>
          <input
            className='log-code'
            type="text" 
            placeholder="Digite o código da sala" 
          />
          <Button 
            className='log-button'
            type="submit"
          >
            Entrar na sala
          </Button>
        </div>
      </styles.login>
    </styles.page>
}