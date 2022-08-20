import React from 'react'
import { useGlobalContext } from '../context'

const Categories = () => {
  const {categories, filterItems} = useGlobalContext()
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button type='button' className='filter-btn' key={index} onClick={() => {
            filterItems(category)
            console.log(category)
          }}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories