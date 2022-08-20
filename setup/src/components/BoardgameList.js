import React from 'react'
import Boardgame from './Boardgame'
import Loading from './Loading'
import { useGlobalContext } from '../context'


const BoardgameList = () => {
  const {boardgames, loading, items} = useGlobalContext()
  return (
    <section className="section">
      <h2 className="section-title">boardgames</h2>
      <div className="cocktails-center">
        {boardgames.map((item) => {
          return <Boardgame key={item.id} {...item}/>
        })}
      </div>
    </section>
  );
}

export default BoardgameList
