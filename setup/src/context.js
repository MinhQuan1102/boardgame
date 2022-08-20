import React, { useState, useContext, useEffect, useReducer } from 'react'
import { useCallback } from 'react'
import items from "./boardgameData";
import reducer from './reducer'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMsg, setModalMsg] = useState('')
  const [isSubcartOpen, setIsSubcartOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [boardgames, setBoardgames] = useState([])
  const [categories, setCategories] = useState(allCategories)

  const fetchItems = () => {
    setBoardgames(items);
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubcart = (coordinates) => {
    setIsSubcartOpen(true)
    setLocation(coordinates)
  }

  const closeSubcart = () => {
    setIsSubcartOpen(false)
  }

  const filterItems = (category) => {
    if (category === "all") {
      setBoardgames(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setBoardgames(newItems);
  };  

  const handleModal = (msg) => {
    openModal();
    setModalMsg(msg);
    setTimeout(() => {
      closeModal();
    }, 2000);
  } 

  useEffect(() => {
    fetchItems()
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (id) => {
    const newItem = items.find((item) => item.id === id);
    
    if (!state.cart.includes(newItem)) {
      dispatch({ type: "ADD_ITEM", payload: id });
      handleModal('Item added to cart!')
    }
    else {
      dispatch({ type: "INCREASE_AMOUNT", payload: newItem });
      handleModal('Your cart already had this item!')
    }
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART'})
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id})
  }

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id})
  }

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id})
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS'})
  }, [state.cart])

  return <AppContext.Provider value={{
    loading, isSidebarOpen, openSidebar, closeSidebar, isModalOpen, openModal, closeModal, isSubcartOpen, openSubcart, closeSubcart,
    boardgames, categories, filterItems, setSearchTerm, modalMsg, setModalMsg, location,
    ...state, addItem, clearCart, remove, increase, decrease
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
