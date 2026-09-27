import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Catalog from './pages/Catalog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import './App.css'

function App() {
  const [tab, setTab] = useState('Catalog')
  const [cart, setCart] = useState([])

  function addToCart(gun) {
    setCart((prev) => {
      const existing = prev.find((item) => item.gun.name === gun.name)
      if (existing) {
        return prev.map((item) =>
          item.gun.name === gun.name ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { gun, qty: 1 }]
    })
  }

  function removeFromCart(name) {
    setCart((prev) => prev.filter((item) => item.gun.name !== name))
  }

  function clearCart() {
    setCart([])
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="shell">
      <Header tab={tab} onTab={setTab} cartCount={cartCount} />

      <main className="main">
        {tab === 'Catalog' && <Catalog onAdd={addToCart} />}
        {tab === 'About' && <About />}
        {tab === 'Contact' && <Contact />}
        {tab === 'Cart' && (
          <Cart cart={cart} onRemove={removeFromCart} onCheckout={clearCart} />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
