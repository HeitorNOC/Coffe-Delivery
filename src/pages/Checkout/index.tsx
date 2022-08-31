import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer, Left, Right, TextDiv, Wrapper } from "./styles";
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
          <h2>Cafés selecionados</h2>
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
                <div>
                  <div className="upper">
                    <span><CurrencyDollar /> Pagamento</span>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                  </div>
                  <div className="down">
                    <div>
                      <CreditCard />
                      <p>Cartão de crédito</p>
                    </div>
                    <div>
                      <Bank />
                      <p>Cartão de débito</p>
                    </div>
                    <div>
                      <Money />
                      <p>Dinheiro</p>
                    </div>
                  </div>
                </div>
              </Left>
              <Right>
                <div>
                  <CardCheckout />
                  <CardCheckout />
                </div>
                <div>
                  <div>
                    <p>Total de itens</p>
                    <span>R$ 29,70</span>
                  </div>
                  <div>
                    <p>Entrega</p>
                    <span>R$ 3,50</span>
                  </div>
                  <div>
                    <h2>Total</h2>
                    <span>R$ 33,20</span>
                  </div>
                  
                  
                  <button type="submit">confirmar pedido</button>
                </div>
              </Right>

            </FormProvider>
          </form>
        </Wrapper>
      </CheckoutContainer>
    </>
  )
}