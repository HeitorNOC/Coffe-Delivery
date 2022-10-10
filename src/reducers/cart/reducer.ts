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
  cep: number
  rua: string
  num: number
  comp: string | undefined
  bairro: string
  cidade: string
  uf: string
  cred: boolean | undefined | string
  bank: boolean | undefined | string
  cash: boolean | undefined | string
}

interface ItemState {
  cart: Item[]
  name: string
  quantity: number
  paymentData: PaymentInfo
}

export function itemsReducer(state: ItemState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        const data = action.payload.newItem
        if (draft.cart.includes(data)) {
          draft.quantity += 1
        } else {
          draft.cart.push(data)
          draft.name = action.payload.newItem.name
          draft.quantity += 1
        }
      })
      
    case ActionTypes.INCREASE_ITEM:
      return produce(state, (draft) => {
        const currentItemIndex = state.cart.findIndex((item) => {
          return item.name === draft.name
        })
        
          draft.cart[currentItemIndex].quantity++
        }
      )
    case ActionTypes.DECREASE_ITEM:
      return produce(state, (draft) => {
        const currentItemIndex = state.cart.findIndex((item) => {
          return item.name === state.name
        })
        if (draft.cart[currentItemIndex].quantity == 1) {
          draft.cart.filter((item) => {
            return item.name == draft.name
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
          }
        })
      })
    case ActionTypes.PAYMENT_FORM_DATA_DISPATCH:
      return produce(state, (draft) => {
        return draft.paymentData = action.payload.data
      })
    default:
      return state
  }
}