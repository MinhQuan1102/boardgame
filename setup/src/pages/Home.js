import React from 'react'
import BoardgameList from '../components/BoardgameList'
import SearchForm from '../components/SearchForm'
import Categories from "../components/Categories";

const Home = () => {
  return (
    <main>
      <Categories />
      <BoardgameList />
    </main>
  );
}

export default Home
