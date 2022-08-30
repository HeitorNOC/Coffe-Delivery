import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutContainer, Left, Right, TextDiv, Wrapper } from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import InputMask from 'react-input-mask'
import { NewPaymentForm } from "./Components/NewPaymentForm";


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
                  <div>
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

                    </div>
                    <div>

                    </div>
                    <div>
                      
                    </div>
                  </div>
                </div>
              </Left>
              <Right>
                <div>

                </div>
                <div>

                </div>
              </Right>

            </FormProvider>
          </form>
        </Wrapper>
      </CheckoutContainer>
    </>
  )
}