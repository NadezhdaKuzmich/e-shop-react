import React, { Component } from "react";
import { SnackbarProvider } from "notistack";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListItems from "./components/ListItems";
import { initialItems } from "./items";
import Categories from "./components/Categories";
import FullItem from "./components/FullItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: initialItems,
      orders: [],
      currentItems: [],
      fullItem: {},
      showFullItem: false,
    };
    this.state.currentItems = this.state.items;
  }

  chooseCategory = (category) => {
    if (category === "all") {
      return this.setState({
        currentItems: this.state.items,
      });
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  };

  showItem = (item) => {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
    document.getElementsByTagName("body")[0].style.overflow = this.state
      .showFullItem
      ? "scroll"
      : "hidden";
  };

  addOrder = (item) => {
    let isInOrder = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInOrder = true;
        const currentItem = this.state.orders.filter((el) => el.id === item.id);
        let newItem = { ...item };
        newItem.count = Number(currentItem[0].count) + 1;
        newItem.price = Number(item.price * newItem.count).toFixed(2);
        console.log();
        this.setState({
          orders: [
            ...this.state.orders.filter((el) => el.id !== item.id),
            newItem,
          ],
        });
      }
    });
    if (!isInOrder) {
      this.setState({ orders: [...this.state.orders, { ...item, count: 1 }] });
    }
  };

  deleteOrder = (id) => {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  };

  render() {
    return (
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="wrapper">
          <Header orders={this.state.orders} handleDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory} />
          <ListItems
            items={this.state.currentItems}
            showItem={this.showItem}
            handleAdd={this.addOrder}
          />
          {this.state.showFullItem && (
            <FullItem
              item={this.state.fullItem}
              showItem={this.showItem}
              handleAdd={this.addOrder}
            />
          )}
          <Footer />
        </div>
      </SnackbarProvider>
    );
  }
}

export default App;