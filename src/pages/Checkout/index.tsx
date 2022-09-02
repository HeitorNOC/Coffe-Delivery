import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer, ConfirmButton, Left, Right, TextDiv, Wrapper } from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewPaymentForm } from "./Components/NewPaymentForm";
import { CardCheckout } from "./Components/CardCheckout";


const newCycleFormValidationSchema = zod.object({
  cep: zod.number(),
  rua: zod.string().min(1, 'Informe a Rua'),
  num: zod.number(),
  comp: zod.string(),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe o Estado').max(2, 'Informe o Estado')
})

type NewFormPaymentData = zod.infer<typeof newCycleFormValidationSchema>

export function Checkout() {

  const newPaymentForm = useForm<NewFormPaymentData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      rua: '',
      bairro: '',
      cidade: '',
    },
  })

  const { handleSubmit, watch, reset } = newPaymentForm

  return (
    <>
      <CheckoutContainer>
        <TextDiv>
          <h2>Complete seu pedido</h2>
          <h2 className="right">Cafés selecionados</h2>
        </TextDiv>
        <Wrapper>
          <form>
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
                    <CurrencyDollar size={22} color="#8047F8"/>
                    <div className="upperText">
                      <h4>Pagamento</h4>
                      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                  </div>
                  <div className="down">
                    <div>
                      <CreditCard size={16} color="#8047F8"/>
                      <p>Cartão de crédito</p>
                    </div>
                    <div>
                      <Bank size={16} color="#8047F8"/>
                      <p>Cartão de débito</p>
                    </div>
                    <div>
                      <Money size={16} color="#8047F8"/>
                      <p>Dinheiro</p>
                    </div>
                  </div>
                </div>
              </Left>
              <Right>
                <div>
                  <CardCheckout />
                </div>
                <div className="rightDown">
                  <div className="rightDownUp">
                    <p>Total de itens</p>
                    <span>R$ 29,70</span>
                  </div>
                  <div className="rightDownMid">
                    <p>Entrega</p>
                    <span>R$ 3,50</span>
                  </div>
                  <div className="rightDownDown">
                    <h2>Total</h2>
                    <span>R$ 33,20</span>
                  </div>
                  
                  
                  <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
                </div>
              </Right>

            </FormProvider>
          </form>
        </Wrapper>
      </CheckoutContainer>
    </>
  )
}