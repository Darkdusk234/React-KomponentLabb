import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'

const Router = () => {
  return (
    <BrowserRouter>
    <header className='header'>
        <div className='headerItems'>
        <nav className='navbar'>
            <Link className='navbarItem' to="/">Hem</Link>
            <Link className='navbarItem' to="/tutorial">Tutorial</Link>
        </nav>
        </div>
    </header>

        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router