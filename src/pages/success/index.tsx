import {
  BoxDetails,
  Left,
  Right,
  SuccesContainerMain,
  SuccessContainer1,
} from "./styles";
import Hero from "./../../assets/Hero.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Success() {

  const { paymentData } = useContext(CartContext)

  return (
    <SuccessContainer1>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <SuccesContainerMain>
        <Left>
          <BoxDetails>
            <MapPin weight="fill" color=" #FFF" size={32} className="icon1"/>
            <div>
              <p>
                Entrega em <strong>{paymentData.rua}</strong>
              </p>
              <p>{paymentData.bairro} - {paymentData.cidade}, {paymentData.uf}</p>
            </div>
          </BoxDetails>
          <BoxDetails>
            <Timer weight="fill" color=" #FFF" size={32} className="icon2"/>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min </strong>
              </p>
            </div>
          </BoxDetails>
          <BoxDetails>
            <CurrencyDollar weight="fill" color=" #FFF" size={32} className="icon3"/>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                {paymentData.bank == 'bank' ?? <strong>Banco</strong>}
                {paymentData.cash == 'dinheiro' ?? <strong>Dinheiro</strong>}
                {paymentData.cred == 'crédito' ?? <strong>Cartão de Crédito</strong>}
                </p>
            </div>
          </BoxDetails>
        </Left>
        <Right>
          <img src={Hero} alt="Hero" />
        </Right>
      </SuccesContainerMain>
    </SuccessContainer1>
  );
}
