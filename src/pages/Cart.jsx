import { useState } from 'react'

function Cart({ cart, onRemove, onCheckout }) {
  const [confirmed, setConfirmed] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.gun.price * item.qty, 0)

  function handleCheckout() {
    onCheckout()
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <div className="page">
        <h1 className="display">Order placed.</h1>
        <p className="lede">
          Thanks for shopping at Bore &amp; Barrel. Come by the shop to pick up your
          order, or call ahead and we will have it on the counter.
        </p>
        <button type="button" className="add-btn" onClick={() => setConfirmed(false)}>
          Back to cart
        </button>
      </div>
    )
  }

  return (
    <div className="page">
      <h1 className="display">Your cart.</h1>

      {cart.length === 0 ? (
        <p className="lede">Your cart is empty — go pick something out from the catalog.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.gun.name} className="cart-item">
                <img className="cart-img" src={item.gun.image} alt="" width="64" height="48" />
                <div className="cart-info">
                  <span className="name display">{item.gun.name}</span>
                  <span className="type">
                    {item.gun.type} · Qty {item.qty}
                  </span>
                </div>
                <span className="price">
                  ${(item.gun.price * item.qty).toLocaleString()}
                </span>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => onRemove(item.gun.name)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>

          <button type="button" className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  )
}

export default Cart