import { produce } from "immer"

import { ActionTypes } from "./actions"

export interface Item {
  name: string
  image: string
  subtitle: string[]
  title: string
  description: string
  quantity: number
}

export interface PaymentInfo {
  cep: string
  rua: string
  num: string
  comp: string | undefined
  bairro: string
  cidade: string
  uf: string
  paymentMethod: string
}

interface ItemState {
  cart: Item[]
  name: string
  quantity: number
  paymentData: PaymentInfo
  paymentMethod: string
}

export function itemsReducer(state: ItemState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        const data = action.payload.newItem
          draft.cart.push(data)
          draft.name = action.payload.newItem.name
          draft.quantity += 1
        
      })
      
    case ActionTypes.INCREASE_ITEM:
      return produce(state, (draft) => {
        const currentItemIndex = draft.cart.findIndex((item) => {
          return item.name === action.payload.item.name
        })
        
          draft.cart[currentItemIndex].quantity += 1
        }
      )
    case ActionTypes.DECREASE_ITEM:
      return produce(state, (draft) => {
        const currentItemIndex = state.cart.findIndex((item) => {
          return item.name === action.payload.item.name
        })
        if (draft.cart[currentItemIndex].quantity == 1) {
          draft.cart.filter((item) => {
            return item.name == action.payload.item.name
          })
        } else {
          draft.cart[currentItemIndex].quantity -= 1
        }
      })
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        draft.cart.map((item) => {
          if (action.payload.itemName == item.name) {
            draft.cart.pop()
            draft.quantity -= 1
          }
        })
      })
    case ActionTypes.PAYMENT_FORM_DATA_DISPATCH:
      return produce(state, (draft) => {
        draft.paymentData.bairro = action.payload.data.bairro
        draft.paymentData.cep = action.payload.data.cep
        draft.paymentData.cidade = action.payload.data.cidade
        draft.paymentData.comp = action.payload.data.comp
        draft.paymentData.num = action.payload.data.num
        draft.paymentData.rua = action.payload.data.rua
        draft.paymentData.uf = action.payload.data.uf
      })
    default:
      return state
  }
}