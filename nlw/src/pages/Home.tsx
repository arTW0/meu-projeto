import React from 'react'

import ilustrationImage from '../assets/images/ilustration.png'
import logoImage from '../assets/images/logo.png'

export function Home () {
  return (
    <div>
      <aside>
        <img
          src={ilustrationImage}
          alt="Ilustração de perguntas e respostas"
        />
        <strong>
          Crie salas de Q&amp;A ao vivo
        </strong>
        <p>
          Tire dúvidas da sua audiência em tempo-real
        </p>
      </aside>
      <main>
        <div>
          <img
            src={logoImage}
            alt="Letmeask"
          />
          <button>
            Crie sua sala com o Google
          </button>
        </div>
      </main>
    </div>
  )
}