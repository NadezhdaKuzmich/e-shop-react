import React, { Component } from "react";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Усі товари",
        },
        {
          key: "chairs",
          name: "Стільці",
        },
        {
          key: "tables",
          name: "Столи",
        },
        {
          key: "sofa",
          name: "Канапи",
        },
        {
          key: "light",
          name: "Освітлення",
        },
      ],
    };
  }
  render() {
    return (
      <ul className="categories">
        {this.state.categories.map((el) => (
          <li key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Categories;