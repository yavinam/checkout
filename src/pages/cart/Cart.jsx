import React, { useEffect, useState } from "react";
import Empty from "../../components/empty/Empty";
import { useStateValue } from "../../context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, total, setTotal } = useStateValue();
  const navigate = useNavigate();
  console.log(cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIncrement = (product) => {
    console.log(product);
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      )
    );
    setTotal((prev) => prev + product.amount * product.price);
  };

  const handleDecrement = (product) => {
    console.log(product);
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  const handleDelete = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('ok');
    
  };

  return (
    <div className="min-h-[80vh]">
      <h2>Cart</h2>
      {cart.length ? (
        <div className="container flex gap-4">
          <div className="flex-1">
            {cart?.map((item) => (
              <div key={item.id}>
                <img src={item.thumbnail} alt="" width={80} />
                <h2>{item.title}</h2>
                <p>{(item.amount * item.price)?.brm()}</p>
                <button onClick={() => handleDelete(item)}>delete</button>
                <div className="border w-20 flex h-9 items-center rounded-md justify-between">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="flex-1"
                  >
                    -
                  </button>
                  <span>{item.amount}</span>
                  <button
                    onClick={() => handleIncrement(item)}
                    className="flex-1"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-96 border p-4 h-72 sticky top-20">
            <p>Buyurtmangiz</p>
            <p>
              Total :
              {cart
                ?.reduce((sum, item) => sum + item.price * item.amount, 0)
                ?.brm()}
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="border"
                placeholder="enter promocode"
              />
              <button>send</button>
            </form>
            <button onClick={() => navigate("/checkout")}>Checkout</button>
          </div>
        </div>
      ) : (
        <Empty
          title="Savatingiz hozircha bo‘sh"
          url="https://uzum.uz/static/img/shopocat.490a4a1.png"
        />
      )}
    </div>
  );
};

export default Cart;
