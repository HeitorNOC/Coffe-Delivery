import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import { Container, Wrapper } from "./styles"

interface BuyCoffeProps {
  image: string
  subtitle: Array<string>
  title: string
  description: string
}

export function BuyCoffe( { image, subtitle, title, description }: BuyCoffeProps ) {
  const { decreaseItem, increaseItem } = useContext(CartContext)
  const [quantidade, setQuantidade] = useState(0)
  
  const coffe = {
    name: title,
    image,
    title,
    subtitle,
    description,
    quantity: quantidade
  }

  

  function handleIncreaseItem() {
    increaseItem(coffe)
    setQuantidade((prevState) => prevState + 1)
  }

  function handleDecreaseItem() {
    if (quantidade >= 1) {
      decreaseItem(coffe)
      setQuantidade((prevState) => prevState - 1)
    }
  }
  
  return (
    <Container key={title}>
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
          <Minus 
            color="#8047F8" 
            size={14} 
            weight="bold"
            cursor="pointer"
            onClick={handleDecreaseItem}
          />
          <span className="text">{quantidade}</span>
          <Plus 
            color="#8047F8" 
            size={14} 
            weight="bold"
            cursor="pointer"
            onClick={handleIncreaseItem}
          />
        </div>
        <span className="shop">
          <a href="/checkout"><ShoppingCart 
            color="white" 
            size={22} 
            cursor="pointer"
            weight="fill"
            onClick={handleIncreaseItem}
          /></a>
        </span>
      </Wrapper>
    </Container>
  )
}