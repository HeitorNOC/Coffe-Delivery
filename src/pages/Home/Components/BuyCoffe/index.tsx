import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { Container, Wrapper } from "./styles"

interface BuyCoffeProps {
  image: string
  subtitle: Array<string>
  title: string
  description: string
}

export function BuyCoffe( { image, subtitle, title, description }: BuyCoffeProps ) {
  return (
    <Container>
      <img src={image} alt="imagem" />
      <div>
        {subtitle.map((item) => (
          <span className="sub">{item}</span>
          ))}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Wrapper>
        <p>R$ <span>9,90</span></p>
        <div>
          <Minus color="#8047F8" size={14} weight="bold"/>
          <span className="text">1</span>
          <Plus color="#8047F8" size={14} weight="bold"/>
        </div>
        <span className="shop">
          <ShoppingCart color="white" size={22} weight="fill"/>
        </span>
      </Wrapper>
    </Container>
  )
}