import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'
import userImg from  '../../assets/user.svg'
import bagImg from  '../../assets/bag.svg'
import lookImg from  '../../assets/look.svg'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <div className='buttons'>
          <button type='button'>
            Início
          </button>
          <button type='button'>
            Produtos
          </button>
          <button type='button'>
            Contato
          </button>
          <button type='button'>
            Acessórios
          </button>
        </div>
        <div className='icons'>
          <img src={lookImg} alt="lookImg" />
          <img src={bagImg} alt="bagImg" />
          <img src={userImg} alt="userIcon" />
        </div>
      </Content>
    </Container>
    )
}