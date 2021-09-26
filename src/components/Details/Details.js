import React from "react";
import axios from "axios";
import "./Details.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let url = "";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoesItems: [],
    };
  }
  componentDidMount() {
    url =
      "https://614e0825e3cf1f001712d4ad.mockapi.io/api/" +
      this.props.match.params.category;

    console.log(url);
    console.log(url);

    axios.get(url).then((res) => {
      console.log(res.data);
      console.log(res.data.products);
      console.log(res.data.data);
      console.log(res);
      const myShoes = res.data.filter(
        (item) => item.id == this.props.match.params.id
      );

      this.setState({ shoesItems: myShoes });
    });

    console.log(this.state.shoesItems);
  }

  render() {
    return (
      <div>
        <h2>Details </h2>

        {this.state.shoesItems.map((item) => (
          <ul className="details_parent">
            <li>
              <b>Name: </b> {item.data.name}
            </li>

            <li>
              <b>Stock: </b> {item.data.stock}
            </li>
            <li>
              <b>Price: </b> {item.data.price}
            </li>
            <li className="details_img">
              <img src={item.data.img} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Details;
