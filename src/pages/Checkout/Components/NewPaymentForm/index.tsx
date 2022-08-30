import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";
import { FormContainer, RuaInput, ComplInput, BairInput, CidInput, UFInput, CEPInput } from "./styles";

export function NewPaymentForm() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      
      <InputMask 
        mask="99999-999"
        id="cep"
        placeholder="CEP"
        {...register('cep')}
      />
      <RuaInput 
        id="rua"
        placeholder="Rua"
        {...register('rua')}
      />
      <InputMask 
        mask="(99) 99999-9999"
        id="num"
        placeholder="Numero"
        {...register('num')}
      />
      <ComplInput 
        id="comp"
        placeholder="Complemento"
        {...register('comp')}
      />
      <BairInput 
        id="bairro"
        placeholder="Bairro"
        {...register('bairro')}
      />
      <CidInput 
        id="cidade"
        placeholder="Cidade"
        {...register('cidade')}
      />
      <UFInput 
        id="uf"
        placeholder="UF"
        {...register('uf')}
      />
    </FormContainer>
  )
}