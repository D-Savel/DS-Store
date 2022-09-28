import { createSlice } from "@reduxjs/toolkit"

let initialCart = []


const saveLocalStorage = (path, value) => {
  localStorage.setItem(path, JSON.stringify(value))
}
const getCart = () => {
  let cart = JSON.parse(localStorage.getItem('cart'))
  if (cart !== null) {
    initialCart = cart
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

console.log('cart Slice', getCart())
console.log('initialCart', initialCart)
console.log('initialCartAmount', setCartAmount(initialCart))
console.log('initialQty', setCartQty(initialCart))


export const cartSlice = createSlice({

  name: 'cart',
  initialState: {
    cartItems: initialCart,
    cartAmount: setCartAmount(initialCart),
    itemsQty: setCartQty(initialCart)
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

    setCart: (state, action) => {
      if (getCart()) {
        state.cartItems = [...getCart]
      }
      return state
    },

    editCart: (state, action) => {
      state.cartItems = [...getCart()]
      let findIndex = state.cartItems.findIndex(p => p.id === action.payload.id)
      if (findIndex !== -1) {
        state.cartItems[findIndex].qty = parseInt(action.payload.qty)
      }
      return state
    },

    delCartItems: (state, action) => {
      state.cartItems = getCart().filter(item => item.id !== action.payload.id)
      return state
    },

    deleteCart: (state, action) => {
      state.cartItems = []
      state.cartAmount = 0
      state.itemsQty = 0
      saveLocalStorage('cart', state.cartItems)
      return state
    },

  }
})

export const { addToCart, setCart, editCart, delCartItem, deleteCart } = cartSlice.actions

export default cartSlice.reducer