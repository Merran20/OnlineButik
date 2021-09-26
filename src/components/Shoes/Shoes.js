import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./Shoes.css";
import Details from "../Details/Details";
import mydata from "../mydata";
import shoes from "../../Data/shoes";
import buyItemsList from "../../Data/buyItemsList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let url = "./Data/shoes.json";

class ListShoesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoesItems: [],
      shoesCardItems: {
        Items: [],
      },
    };
    this.buyItem = this.buyItem.bind(this);
    this.sendData = this.sendData.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    var obj = axios
      .get("https://614e0825e3cf1f001712d4ad.mockapi.io/api/shoes")
      .then((res) => {
        console.log("my new data " + res.data);
        this.setState({ shoesItems: res.data });
        return res.data;
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

    buyItemsList.push(data);

    alert("Add to Card - ");
    this.state.shoesCardItems.Items.push(data);
    console.log(buyItemsList);
    var testObject = this.state.shoesCardItems;
    localStorage.setItem("testObject", JSON.stringify(testObject));
  }

  sendData() {
    var testObject = { name: "test", time: "Date 2017-02-03T08:38:04.449Z" };
    localStorage.setItem("testObject", JSON.stringify(testObject));
  }

  getData() {
    var retrievedObject = localStorage.getItem("testObject");

    console.log("retrievedObject: ", JSON.parse(retrievedObject));
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

class Shoes extends React.Component {
  render() {
    console.log("math - " + JSON.stringify(this.props.match));
    return (
      <div>
        <h2>Shoes - </h2>

        <ListShoesItem />
      </div>
    );
  }
}

export default Shoes;
