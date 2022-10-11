import { createContext, MouseEventHandler, ReactNode, useEffect, useReducer } from "react";
import { Item, itemsReducer } from '../reducers/cart/reducer'
import {
  addNewItemAction,
  decreaseItemAction,
  increaseItemAction,
  removeItemAction,
  getPaymentInfoAction
} from '../reducers/cart/actions'

interface CreateItemData {
  name: string
  image: string
  subtitle: string[]
  title: string
  description: string
  quantity: number
}

interface CreatePaymentInfoData {
  cep: string
  rua: string
  num: string
  comp?: string | undefined
  bairro: string
  cidade: string
  uf: string
  cred?: boolean | undefined | string
  bank?: boolean | undefined | string
  cash?: boolean | undefined | string
}

interface CartContextType {
  cart: Item[]
  name: string
  quantity: number
  paymentData: CreatePaymentInfoData
  addNewItem: (data: CreateItemData) => void | MouseEventHandler<SVGSVGElement>
  removeItem: (name: string) => void | MouseEventHandler<SVGSVGElement>
  increaseItem: (data: CreateItemData) => void | MouseEventHandler<SVGSVGElement>
  decreaseItem: (data: CreateItemData) => void | MouseEventHandler<SVGSVGElement>
  paymentFormDispatch: (data: CreatePaymentInfoData) => void | MouseEventHandler<SVGSVGElement>
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({
  children,
} : CartContextProviderProps) {
  const INITIAL_STATE = {
    cart: [],
    name: '',
    quantity: 0,
    paymentData : {}
  }
  const [cartState, dispatch] = useReducer(
    itemsReducer,
    INITIAL_STATE,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffe:cart-state-1.0.0'
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return INITIAL_STATE
    },
  )

  const { cart, name, quantity, paymentData } = cartState
  

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@ignite-coffe:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addNewItem(data: CreateItemData) {

    const newItem: Item = {
      name: data.name,
      description: data.description,
      image: data.image,
      quantity: data.quantity += 1,
      subtitle: data.subtitle,
      title: data.title,
    }
    if (cart.length != 0){
      if (cart.map((item) => {
        item.name == data.name
      })) {
        dispatch(increaseItem(data))
      }
    } else {
      dispatch(addNewItemAction(newItem))
    }

  }

  function removeItem(name: string) {
    dispatch(removeItemAction(name))
  }

  function increaseItem(data: CreateItemData) {
    
    if(cart.includes(data) ==  true) {
      dispatch(increaseItemAction(data))
    } else {
      addNewItem(data)
    }
    
  }

  function decreaseItem(data: CreateItemData) {
    cart.map((item) => {
      if (item.name == data.name) {
        dispatch(decreaseItemAction(data))
      } 
    })
  }

  function paymentFormDispatch(data: CreatePaymentInfoData) {
    if (data.cred == true) {
      const newData = {
        cep: data.cep,
        rua: data.rua,
        num: data.num,
        comp: data.comp,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        cred: 'crédito',
        bank: data.bank,
        cash: data.cash
      }
      dispatch(getPaymentInfoAction(newData))
    }
    if (data.bank == true) {
      const newData = {
        cep: data.cep,
        rua: data.rua,
        num: data.num,
        comp: data.comp,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        cred: data.cred,
        bank: 'banco',
        cash: data.cash
      }
      dispatch(getPaymentInfoAction(newData))
    }
    if (data.cash == true) {
      const newData = {
        cep: data.cep,
        rua: data.rua,
        num: data.num,
        comp: data.comp,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        cred: data.cred,
        bank: data.bank,
        cash: 'dinheiro'
      }
      dispatch(getPaymentInfoAction(newData))
    }
  }

  return (
    <CartContext.Provider
      value={{
        quantity,
        cart,
        name,
        paymentData,
        addNewItem,
        increaseItem,
        decreaseItem,
        removeItem,
        paymentFormDispatch
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
