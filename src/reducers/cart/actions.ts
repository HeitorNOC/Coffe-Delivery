import { Item, PaymentInfo } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREASE_ITEM = 'INCREASE_ITEM',
  DECREASE_ITEM = 'DECREASE_ITEM',
  PAYMENT_FORM_DATA_DISPATCH = 'PAYMENT_FORM_DATA_DISPATCH',
}

export function addNewItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
    },
  }
}

export function removeItemAction(itemName: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemName,
    },
  }
}

export function increaseItemAction(item: Item) {
  return {
    type: ActionTypes.INCREASE_ITEM,
    payload: {
      item,
    },
  }
}

export function decreaseItemAction(item: Item) {
  return {
    type: ActionTypes.DECREASE_ITEM,
    payload: {
      item,
    }
  }
}

export function getPaymentInfoAction(data: PaymentInfo) {
  return {
    type: ActionTypes.PAYMENT_FORM_DATA_DISPATCH,
    payload: {
      data
    }
  }
}