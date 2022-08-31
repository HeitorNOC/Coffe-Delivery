import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";
import { FormContainer, RuaInput, ComplInput, BairInput, CidInput, UFInput } from "./styles";

export function NewPaymentForm() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      
      <InputMask 
        mask="99999-999"
        id="cep"
        placeholder="CEP"
        {...register('cep')}
        className="CepInput"
        style={{
          width: '200px',
          height: '42px',
        }}
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
        className="NumInput"
      />
      <ComplInput 
        id="comp"
        placeholder="Complemento"
        {...register('comp')}
      />
      <label htmlFor="comp">Opcional</label>
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
        list="Uf-suggestions"
      />
      <datalist id="Uf-suggestions">
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AM">Amazonas</option>
        <option value="AP">Amapá</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal	</option>
        <option value="ES">Espírito Santo	</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </datalist>
    </FormContainer>
  )
}