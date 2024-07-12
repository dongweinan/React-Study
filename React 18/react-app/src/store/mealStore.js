import React from 'react'

const MealStroe = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  subClick: {},
  addClick: {},
})

export default MealStroe
