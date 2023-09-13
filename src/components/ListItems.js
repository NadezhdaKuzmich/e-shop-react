import React from "react";
import { Item } from "./Item";

const ListItems = ({ items, handleAdd, showItem }) => {
  return (
    <main>
      <div>
        <ul className="list-items">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              showItem={showItem}
              handleAdd={handleAdd}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ListItems;