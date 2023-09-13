import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const FullItem = ({ item, showItem, handleAdd }) => {
  return (
    <div className="full-item">
      <div className="item-card">
        <button
          type="button"
          className="btn-icon close-btn"
          onClick={() => showItem(item)}
        >
          <CloseIcon fontSize="small" />
        </button>
        <div className="item-visual" onClick={() => showItem(item)}>
          <img src={"./assets/" + item.img} alt={item.title} />
        </div>
        <div className="item-content">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className="item-footer">
            <span className="price">{item.price}$</span>
            <button
              type="button"
              className="btn-buy btn-icon"
              onClick={() => handleAdd(item)}
            >
              <ShoppingCartTwoToneIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullItem;