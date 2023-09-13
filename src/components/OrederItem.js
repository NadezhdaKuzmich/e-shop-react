import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const OrederItem = ({ item, handleDelete }) => {
  return (
    <div className="order-item">
      <div className="info-cart">
        <img src={"./assets/" + item.img} alt={item.title} />
        <div>
          <h2>{item.title}</h2>
          <p className="price">{item.price}$</p>
          <span className="count">{item.count}шт.</span>
        </div>
      </div>
      <button
        type="button"
        className="btn-icon delete-icon"
        onClick={() => handleDelete(item.id)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default OrederItem;