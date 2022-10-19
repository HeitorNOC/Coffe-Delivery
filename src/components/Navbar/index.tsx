import { Container, Left, Right } from "./styles"
import Logo from '../../assets/Logo.svg'
import { Circle, MapPin, ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export function Navbar() {
  const { quantity, cart } = useContext(CartContext)

  return (
    <Container>
      <Left>
        <a href="/"><img src={Logo} alt="Logo" /></a>
      </Left>
      <Right>
        {cart.length == 0 ? (
          <>
            <MapPin color="#8047F8" size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
            <a href="/checkout"><ShoppingCart size={22} color="#C47F17" weight="fill" /></a>
          </>
        ) : (
          <>
            <MapPin color="#8047F8" size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
            <p className="circle">{quantity}</p>
            <a href="/checkout"><ShoppingCart size={22} color="#C47F17" weight="fill" /></a>
          </>
        )}

      </Right>
    </Container>
  )
}