import { createSlice } from "@reduxjs/toolkit"


const saveLocalStorage = (path, value) => {
  localStorage.setItem(path, JSON.stringify(value))
}

const initialCart = () => {
  let initialCart = []
  const cart = JSON.parse(localStorage.getItem('cart'))
  console.log('initialCart', cart)
  if (cart !== [] || cart !== null || !cart.length === 0) {
    initialCart = cart
    return initialCart
  }
}

const getCart = () => {
  let cart = JSON.parse(localStorage.getItem('cart'))
  console.log('getCart', cart)
  if (cart) {
    return cart
  }
}


const setCartAmount = (cartItemsArray) => {
  let price = 0
  let cartAmount = 0
  for (const item of cartItemsArray) {
    item.offerPercent > 0 ? price = item.price * ((100 - item.offerPercent) / 100) : price = item.price
    cartAmount += item.qty * price
  }
  return cartAmount
}

const setCartQty = (cartItemsArray) => {
  let cartQty = 0
  for (const item of cartItemsArray) {
    cartQty += item.qty
  }
  return cartQty
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: initialCart(),
    cartAmount: setCartAmount(initialCart()),
    itemsQty: setCartQty(initialCart())
  },
  reducers: {
    addToCart: (state, action) => {
      if (!getCart()) {
        state.cartItems.push(action.payload)
        saveLocalStorage('cart', state.cartItems)
      } else {
        let find = getCart().findIndex(item => item.id === action.payload.id)
        if (find === -1) {
          state.cartItems.push(action.payload)
          saveLocalStorage('cart', state.cartItems)
        } else {
          state.cartItems[find].qty = state.cartItems[find].qty + action.payload.qty
          saveLocalStorage('cart', state.cartItems)
        }
      }
      state.itemsQty += 1
      state.cartAmount = setCartAmount(state.cartItems)
      saveLocalStorage('cartAmout', state.cartAmount)
      return state

    },

    updateItemQty: (state, action) => {
      let findIndex = state.cartItems.findIndex(p => p.id === action.payload.id)
      state.cartItems[findIndex].qty = parseInt(action.payload.qty)
      saveLocalStorage('cart', state.cartItems)
      state.itemsQty = setCartQty(state.cartItems)
      state.cartAmount = setCartAmount(state.cartItems)
      return state
    },

    delCartItem: (state, action) => {
      state.cartItems = getCart().filter(item => item.id !== action.payload.id)
      saveLocalStorage('cart', state.cartItems)
      state.itemsQty = setCartQty(state.cartItems)
      state.cartAmount = setCartAmount(state.cartItems)
      return state
    },

    delCart: (state, action) => {
      state.cartItems = []
      state.cartAmount = 0
      state.itemsQty = 0
      saveLocalStorage('cart', state.cartItems)
      state.cartAmount = setCartAmount(state.cartItems)
      return state
    },

  }
})

export const { addToCart, updateItemQty, delCartItem, delCart } = cartSlice.actions

export default cartSlice.reducer