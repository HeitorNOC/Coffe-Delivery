import { CoffeWrapper, DivDown, IconsDiv, Left, MainContainer, Right, TextDiv } from "./styles";
import Hero from '../../assets/Imagem.svg'
import { IconsMain } from "./Components/IconsMain";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { BuyCoffe } from "./Components/BuyCoffe";
import Americano from '../../assets/Americano.svg'
import Arabe from '../../assets/Arabe.svg'
import CafeComLeite from '../../assets/CafeComLeite.svg'
import CafeGelado from '../../assets/CafeGelado.svg'
import Capuccino from '../../assets/Capuccino.svg'
import ChocolateQuente from '../../assets/ChocolateQuente.svg'
import Cubano from '../../assets/Cubano.svg'
import Expresso from '../../assets/Expresso.svg'
import ExpressoCremoso from '../../assets/ExpressoCremoso.svg'
import Havaiano from '../../assets/Havaiano.svg'
import Irlandes from '../../assets/Irlandes.svg'
import Latte from '../../assets/Latte.svg'
import Macchiato from '../../assets/Macchiato.svg'
import Mochaccino from '../../assets/Mochaccino.svg'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Home() {
  const { quantity } = useContext(CartContext)
  return (
    <>
      <MainContainer>
        <Left>
          <TextDiv>
            <p>Encontre o café perfeito para qualquer hora do dia</p>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </TextDiv>
          <IconsDiv>
            <ul>
              <div>
                <IconsMain 
                  IconName={ShoppingCart}
                  text="Compra simples e segura"
                  BackColor="#C47F17" 
                />
              </div>
              <div>
                <IconsMain 
                  IconName={Package}
                  text="Embalagem mantém o café intacto" 
                  BackColor="#574F4D"
                />
              </div>
              <div>
                <IconsMain 
                  IconName={Timer}
                  text="Entrega rápida e rastreada" 
                  BackColor="#DBAC2C"
                />
              </div>
              <div>
              <IconsMain 
                IconName={Coffee}
                text="O café chega fresquinho até você" 
                BackColor="#8047F8"
              />
              </div>
            </ul>
            
          </IconsDiv>
        </Left>
        <Right>
          <img src={Hero} alt="Hero Image" />
        </Right>
      </MainContainer>
      <CoffeWrapper>
        <h1>
          Nossos Cafés
        </h1>
        <DivDown>
          <BuyCoffe 
            image={Expresso}
            subtitle={['TRADICIONAL']}
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <BuyCoffe 
            image={Americano}
            subtitle={['TRADICIONAL']}
            title="Expresso Americano"
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <BuyCoffe 
            image={ExpressoCremoso}
            subtitle={['TRADICIONAL']}
            title="Expresso Cremoso"
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <BuyCoffe 
            image={CafeGelado}
            subtitle={['TRADICIONAL', 'GELADO']}
            title="Expresso Gelado"
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <BuyCoffe 
            image={CafeComLeite}
            subtitle={['TRADICIONAL', 'COM LEITE']}
            title="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
          />
          <BuyCoffe 
            image={Latte}
            subtitle={['TRADICIONAL', 'COM LEITE']}
            title="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          />
          <BuyCoffe 
            image={Capuccino}
            subtitle={['TRADICIONAL', 'COM LEITE']}
            title="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
          />
          <BuyCoffe 
            image={Macchiato}
            subtitle={['TRADICIONAL', 'COM LEITE']}
            title="Macchiato"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          />
          <BuyCoffe 
            image={Mochaccino}
            subtitle={['TRADICIONAL', 'COM LEITE']}
            title="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
          />
          <BuyCoffe 
            image={ChocolateQuente}
            subtitle={['ESPECIAL', 'COM LEITE']}
            title="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
          />
          <BuyCoffe 
            image={Cubano}
            subtitle={['ESPECIAL', 'ALCOÓLICO', 'GELADO']}
            title="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
          />
          <BuyCoffe 
            image={Havaiano}
            subtitle={['ESPECIAL']}
            title="Havaiano"
            description="Bebida adocicada preparada com café e leite de coco"
          />
          <BuyCoffe 
            image={Arabe}
            subtitle={['ESPECIAL']}
            title="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
          />
          <BuyCoffe 
            image={Irlandes}
            subtitle={['ESPECIAL', 'ALCOÓLICO']}
            title="Irlandês"
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          />
        </DivDown>
      </CoffeWrapper>
    </>
  )
}