import { Container } from "./styles"
import modeloImg from "../../assets/modelo/1.svg"
import modeloDoisImg from "../../assets/modelo/modelo.svg"

export const Dashboard = () => {
  return (
    <Container>
      <h1>
        Nome do Produto
      </h1>
      <div>
        <img src={modeloImg} alt="Modelo-1" />
        <img src={modeloDoisImg} alt="Modelo-2" />
      </div>
    </Container>
  )
}