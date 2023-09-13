import React from "react";
import { useSnackbar, closeSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const action = (snackbarId) => (
  <CloseIcon
  fontSize="small"
  className="btn-icon"
    onClick={() => {
      closeSnackbar(snackbarId);
    }}
  />
);

export const Item = ({ item, handleAdd, showItem }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (item, variant) => {
    handleAdd(item);
    enqueueSnackbar(`"${item.title}" додано в кошик!`, {
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      variant: "success",
      action,
    });
  };

  return (
    <li className="item">
      <div className="item-card">
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
              onClick={() => handleClick(item, "success")}
            >
              <ShoppingCartTwoToneIcon />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};