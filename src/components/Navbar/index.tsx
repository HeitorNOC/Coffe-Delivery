import { Container, Left, Right } from "./styles"
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react"

export function Navbar() {
  return (
    <Container>
      <Left>
        <a href="#"><img src={Logo} alt="Logo" /></a>
      </Left>
      <Right>
        <MapPin color="#8047F8" size={22} weight="fill"/>
        <p>Porto Alegre, RS</p>
        <ShoppingCart size={22} color="#C47F17" weight="fill"/>
      </Right>
    </Container>
  )
}