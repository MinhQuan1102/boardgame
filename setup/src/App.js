import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleBoardgame from './pages/SingleBoardgame'
import Error from './pages/Error'
import Sidebar from './components/Sidebar'
// import components
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Modal from './components/Modal'
import Subcart from './components/Subcart'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Subcart/>
      <Switch>
        <Route path="/" exact>
          <Home />
          <Modal/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/boardgame/:id" element={<SingleBoardgame/>}>
          <SingleBoardgame />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
