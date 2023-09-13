import React, { useState } from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import OrederItem from "./OrederItem";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <>
      {props.orders.map((order) => (
        <OrederItem
          key={order.id}
          item={order}
          handleDelete={props.handleDelete}
        />
      ))}
      <hr/>
      <p className="cart-sum">
        Загальна вартість: {new Intl.NumberFormat().format(summa)}$
      </p>
    </>
  );
};

const showNothing = () => (
  <div className="empty-cart">
    <h2>Порожній кошик.</h2>
  </div>
);

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <span className="logo">HouseStaff</span>
        <div className="header-nav">
          <nav>
            <ul className="nav">
              <li>Про нас</li>
              <li>Контакти</li>
              <li>Кабінет</li>
            </ul>
          </nav>
          <button
            type="button"
            className={`btn-icon shop-cart-btn ${cartOpen && "active"}`}
          >
            <ShoppingCartRoundedIcon
              onClick={() => setCartOpen((prevCartOpen) => !prevCartOpen)}
            />
            {props.orders.length > 0 && (
              <span className="count-cart">{props.orders.length}</span>
            )}
          </button>
          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </div>
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;