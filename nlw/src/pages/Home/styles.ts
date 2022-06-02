import styled from "styled-components"

const page = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`
const home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #835afd;
  color: #FFF;
  padding: 8rem 4rem;
  margin: -0.5rem;

  strong {
      font: 700 2rem 'Poppins', sans-serif;
      line-height: 2rem;
      margin-top: 1;
    }

  p {
    font: 400 36px 'Poppins', sans-serif;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-top: 0.5rem;
    color: #f8f8f8;
  }
`

const login = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0 1rem;

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    text-align: center;
  }

  .log-code {
    height: 2.7rem;
    border-radius: 8px;
    padding: 0 16px;
    background: #FFF;
    border: 1px solid #a8a8b3;
  }

  .log-button {
    margin-top: 16px;
    border: 1px solid #a8a8b3;
    border-radius: 8px;
    margin-top: 1rem;
    height: 2.7rem;
    background: #835afd;
    color: #FFF;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }

  .create-room {
    border: 1px solid #a8a8b3;
    border-radius: 8px;
    margin-top: 1rem;
    height: 2.7rem;
    background: #ea4335;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font: 400 0.9rem 'Poppins', sans-serif;
    color: #a8a8b3;
    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 16px;
    }
  }
`

export default {
  page,
  home,
  login
}