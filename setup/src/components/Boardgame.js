import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Boardgame = ({id, name, category, price, img, desc}) => {
  const {boardgames, addItem} = useGlobalContext()
  const [readMore, setReadMore] = React.useState(false)
  const [isItemInCart, setIsItemInCart] = React.useState(false)
  const test = (id) => {
    console.log(boardgames);
    console.log(id);
    const newItem = boardgames.find((item) => item.id === id);
    console.log(newItem);
  }
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={img} alt={name}/>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>category: {category}</h4>
        <h4>price: ${price}</h4>
        <p>
          {readMore ? desc : `${desc.substring(0, 150)}...`}
          <button className='read-more-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <Link to={`/boardgame/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
        <div className='btn btn-primary btn-add-to-cart' onClick={() => {
          addItem(id)
          setIsItemInCart(true)
        }}>
          {isItemInCart ? 'in cart' : 'add to cart'}
        </div>
      </div>
    </article>
  )
}

export default Boardgame
