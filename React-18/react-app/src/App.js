import './App.css'
import Meals from './components/meals/meals.js'
import React, { useReducer, useState } from 'react'
import MealStroe from './store/mealStore.js'
import Search from './components/search/search.js'
import Cart from './components/cart/cart'

const cartDataReduce = (state, { type, meal }) => {
  const newCart = { ...state }
  switch (type) {
    case 'add':
      if (newCart.items.indexOf(meal) === -1) {
        newCart.items.push(meal)
        meal.amount = 1
      } else {
        meal.amount += 1
      }
      newCart.totalAmount += 1
      newCart.totalPrice += meal.price
      return newCart
    case 'sub':
      meal.amount -= 1
      if (meal.amount === 0) {
        newCart.items.splice(newCart.items.indexOf(meal), 1)
      }
      newCart.totalAmount -= 1
      newCart.totalPrice -= meal.price
      return newCart
    case 'clear':
      newCart.items.forEach((item) => {
        delete item.amount
      })
      newCart.items = []
      newCart.totalAmount = 0
      newCart.totalPrice = 0
      return newCart
    default:
      return newCart
  }
}
function App() {
  const MEALS_DATA = [
    {
      id: 1,
      title: '麦辣鸡腿堡',
      url: '/imgs/meals/hb01.png',
      desc: '这是一个汉堡！',
      price: 35,
    },
    {
      id: 2,
      title: '麦辣堡',
      url: '/imgs/meals/hb01.png',
      desc: '这是一个汉堡！',
      price: 35,
    },
    {
      id: 3,
      title: '巨无霸堡',
      url: '/imgs/meals/hb01.png',
      desc: '这是一个汉堡！',
      price: 35,
    },
    {
      id: 4,
      title: '麦辣鸡腿堡',
      url: '/imgs/meals/hb01.png',
      desc: '这是一个汉堡！',
      price: 35,
    },
    {
      id: 5,
      title: '麦辣鸡腿堡',
      url: '/imgs/meals/hb01.png',
      desc: '这是一个汉堡！',
      price: 35,
    },
    {
      id: 6,
      title: '麦辣鸡腿堡',
      url: '/imgs/meals/hb01.png',
      desc: '这是一个汉堡！',
      price: 35,
    },
    {
      id: 7,
      title: '麦辣鸡腿堡',
      url: '/imgs/meals/hb01.png',
      desc: '这是一个汉堡！',
      price: 35,
    },
    {
      id: 8,
      title: '麦辣鸡腿堡',
      url: '/imgs/meals/hb01.png',
      desc: '这是一个汉堡！',
      price: 35,
    },
    {
      id: 9,
      title: '麦辣鸡腿堡',
      url: '/imgs/meals/hb01.png',
      desc: '这是一个汉堡！',
      price: 35,
    },
  ]
  const [cartData, dispatchCartData] = useReducer(cartDataReduce, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  })
  const [mealsData, setMealsData] = useState(MEALS_DATA)
  const subClick = (meal) => {
    dispatchCartData({ type: 'sub', meal })
  }
  const addClick = (meal) => {
    dispatchCartData({ type: 'add', meal })
  }
  const clearCard = () => {
    dispatchCartData({ type: 'clear' })
  }
  const searchHandle = (keyword) => {
    const newData = MEALS_DATA.filter(
      (item) => item.title.indexOf(keyword) !== -1
    )
    setMealsData(newData)
  }
  return (
    // <React.StrictMode>
    // <MealStroe.Provider value={{ ...cartData, subClick, addClick, clearCard }}>
    //   <Search searchHandle={searchHandle} />
    //   <Meals meals={mealsData} />
    //   <Cart />
    // </MealStroe.Provider>
    // </React.StrictMode>
    <div>app</div>
  )
}

export default App
