import React, { createContext, useState } from 'react'
import Form from './components/Form'
import styles from './Styles'

type Context = {
  toggleTheme: () => void
  theme: string
}

export const ThemeContext = createContext<Context | null>(null)

const App = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <styles.main id={theme} >
      <Form />
      <div>
        <label>
          {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </label>
        <button
          onChange={toggleTheme}
        >
          Change
        </button>


      </div>
    </styles.main>
  </ThemeContext.Provider>
}

export default App
