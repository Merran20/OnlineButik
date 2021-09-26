import React from "react";

import axios from "axios";
import "./Jackets.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let url = "https://614e0825e3cf1f001712d4ad.mockapi.io/api/jacket";

class ListJacketsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoesItems: [],
    };
    this.buyItem = this.buyItem.bind(this);
  }

  componentDidMount() {
    axios.get(url).then((res) => {
      const myShoes = res.data;
      this.setState({ shoesItems: myShoes });
    });
  }
  buyItem(data) {
    console.log("data - " + data);

    axios
      .post("https://614e0825e3cf1f001712d4ad.mockapi.io/api/shipinglist", {
        data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    alert("Add Item");
  }
  render() {
    return (
      <div className="listitems">
        {this.state.shoesItems.map((item) => (
          <li>
            <div className="card">
              <img
                className="card-img-top"
                src={item.data.img}
                alt="Card image"
              />
              <div className="card-body">
                <p className="card-title">{item.data.name}</p>

                <Link
                  to={"/details/" + item.data.category + "/" + item.id}
                  className="btn btn-primary stretched-link "
                >
                  details
                </Link>
                <a
                  href="#"
                  className="btn btn-primary stretched-link ml-1"
                  onClick={() => this.buyItem(item.data)}
                >
                  buy
                </a>
                <span className="ml-5 price">
                  <b>{item.data.price}$</b>
                </span>
              </div>
            </div>
          </li>
        ))}
      </div>
    );
  }
}

class Jackets extends React.Component {
  render() {
    return (
      <div>
        <h2>Jackets</h2>

        <ListJacketsItem />
      </div>
    );
  }
}

export default Jackets;
