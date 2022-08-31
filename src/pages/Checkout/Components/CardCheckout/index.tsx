import { Minus, Plus, Trash } from "phosphor-react";
import { CardContainer, Left, Mid, Right } from "./styles";
import Expresso from '../../../../assets/Expresso.svg'

export function CardCheckout() {
  return (
    <CardContainer>
      <Left>
        <img src={Expresso} alt="Cafe" />
      </Left>
      <Mid>
        <p>Expresso Tradicional</p>
        <div className="MidDown">
          <Minus color="#8047F8" size={14} weight="bold"/>
          <span className="text">1</span>
          <Plus color="#8047F8" size={14} weight="bold"/>
          <Trash color="#8047F8" size={16}/>
          <p>REMOVER</p>
        </div>
      </Mid>
      <Right>
        <span>R$ 9,90</span>
      </Right>
    </CardContainer>
  )
}