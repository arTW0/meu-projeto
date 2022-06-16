import styled from 'styled-components'

const main = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #light {
   background-color: #fafafa;
  }

  #dark {
    background-color: #46045e;
  }
`
export default { main }