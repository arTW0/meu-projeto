import React from "react"

import styles from "./styles"

const Form = () => {
  return (
    <styles.main>
      <p className="login">
        Login
      </p>
      <form className="infos">
        <input
          className="username"
          type="text"
          placeholder="Username"
        />
        <input
          className="password"
          type="password"
          placeholder="Password"
        />
        <a className="submit">
          Login
        </a>
        <p>
          <a href="#">Forgot Password?</a>
        </p>
      </form>
    </styles.main>
  )
}
export default Form