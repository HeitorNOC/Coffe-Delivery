import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { CardContainer, CheckoutContainer, ConfirmButton, EmptyContainer, Left, LeftCard, MidCard, Right, RightCard, TextDiv, Wrapper } from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewPaymentForm } from "./Components/NewPaymentForm";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";


const newCycleFormValidationSchema = zod.object({
  cep: zod.string(),
  rua: zod.string().min(1, 'Informe a Rua'),
  num: zod.string(),
  comp: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe o Estado').max(2, 'Informe o Estado'),
})

type NewFormPaymentData = zod.infer<typeof newCycleFormValidationSchema>

export function Checkout() {

  const { paymentFormDispatch, cart, increaseItem, decreaseItem, removeItem, changePayment } = useContext(CartContext)

 
  const navigate = useNavigate()
  const [selected1, setSelected1] = useState(true)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)

  const newPaymentForm = useForm<NewFormPaymentData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      comp: '',
      
    },
  })

  const { handleSubmit, reset } = newPaymentForm

  function handleFormDispatch(data: NewFormPaymentData) {
    
    paymentFormDispatch(data)
    reset()
    navigate('/success')
  }
  let count = 0
  let priceTotal = 0

  if (cart.length >= 1) {
    cart.map((item) => {
      count += item.quantity
      return count
    })
    priceTotal = count * 9.9
    
  }
  
  const style1 = {
    'display': 'flex',
    'padding': '16px',
    'gap': '12px',
    'alignItems': 'center',
    'border': '1px solid transparent',
    'cursor': 'pointer',
  }

  const style2 = {
    'display': 'flex',
    'padding': '16px',
    'gap': '12px',
    'alignItems': 'center',
    'cursor': 'pointer',
    'border': '1px solid #8047F8',
    'borderRadius': '6px',
  }

  const isSelected1 = selected1 ? style2 : style1
  const isSelected2 = selected2 ? style2 : style1
  const isSelected3 = selected3 ? style2 : style1

 
  return (
    <>
      <CheckoutContainer>
        <TextDiv>
          <h2>Complete seu pedido</h2>
          <h2 className="right">Cafés selecionados</h2>
        </TextDiv>
        <Wrapper>
          <form onSubmit={handleSubmit(handleFormDispatch)}>
            <FormProvider {...newPaymentForm}>
              <Left>
                <div className="LeftUpper">
                  <MapPinLine color="#C47F17" size={22} />
                  <div className="LeftUpperText">
                    <h4>Endereço de Entrega</h4>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </div>
                <NewPaymentForm />
                <div className="LeftDown">
                  <div className="upper">
                    <CurrencyDollar size={22} color="#8047F8" />
                    <div className="upperText">
                      <h4>Pagamento</h4>
                      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                  </div>
                  <div className="down">
                    <div
                      style={isSelected1}
                      
                      onClick={
                        () => {
                          if (selected1 == false) {
                            changePayment('Cartão de Crédito')
                            setSelected1(true)
                            setSelected2(false)
                            setSelected3(false)
                          
                          }
                        }
                      }
                    >
                      
                      <CreditCard size={16} color="#8047F8" />
                      <p>Cartão de crédito</p>
                    </div>
                    <div
                      style={isSelected2}
                     
                      onClick={
                        () => {
                          if (selected2 == false) {
                              changePayment('Cartão de Débito')
                              setSelected1(false)
                              setSelected2(true)
                              setSelected3(false)
                              
                            
                          }
                        }
                      }
                    >
                      
                      <Bank size={16} color="#8047F8" />
                      <p>Cartão de débito</p>
                    </div>
                    <div
                      style={isSelected3}
                      
                      onClick={
                        () => {
                          if (selected3 == false) {
                              changePayment('Dinheiro')
                              setSelected1(false)
                              setSelected2(false)
                              setSelected3(true)
                              
                            
                          }
                        }
                      }
                    >
                      <Money size={16} color="#8047F8" />
                      <p>Dinheiro</p>
                    </div>
                  </div>
                </div>
              </Left>
              <Right>
                <div>
                  {
                    cart.length <= 0 ? (
                      <EmptyContainer>
                        <h1>O carrinho está vazio</h1>
                      </EmptyContainer>
                    ) : (

                      cart.map((item) => (
                        <CardContainer key={item.name}>
                          <LeftCard>
                            <img src={item.image} alt={item.image} />
                          </LeftCard>
                          <MidCard>
                            <p>{item.title}</p>
                            <div className="MidDown">
                              <Minus
                                cursor="pointer"
                                onClick={() => decreaseItem(item)}
                                color="#8047F8"
                                size={14}
                                weight="bold"
                              />
                              <span className="text">{item.quantity}</span>
                              <Plus
                                cursor="pointer"
                                onClick={() => increaseItem(item)}
                                color="#8047F8"
                                size={14}
                                weight="bold"
                              />
                              <Trash
                                cursor="pointer"
                                onClick={() => removeItem(item.name)}
                                color="#8047F8"
                                size={16}
                              />
                              <p>REMOVER</p>
                            </div>
                          </MidCard>
                          <RightCard>
                            <span>R$ 9,90</span>
                          </RightCard>
                        </CardContainer>
                      ))
                    )
                  }
                </div>
                <div className="rightDown">
                  <div className="rightDownUp">
                    <p>Total de itens</p>
                    <span>R$ {priceTotal.toFixed(2)}</span>
                  </div>
                  <div className="rightDownMid">
                    <p>Entrega</p>
                    <span>R$ 3,50</span>
                  </div>
                  <div className="rightDownDown">
                    <h2>Total</h2>
                    <span>R$ {priceTotal + 3.5}</span>
                  </div>


                  <ConfirmButton type="submit"  > CONFIRMAR PEDIDO</ConfirmButton>
                </div>
              </Right>

            </FormProvider>
          </form>
        </Wrapper>
      </CheckoutContainer>
    </>
  )
}