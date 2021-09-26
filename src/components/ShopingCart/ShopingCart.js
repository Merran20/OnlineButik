import React from "react";
import "./ShopingCart.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ShopingCart extends React.Component {
  constructor(props) {
    super(props);
    this.DeleteList = this.DeleteList.bind(this);
    this.state = {
      shopingData: [],
    };
    this.GetMyData = this.GetMyData.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  componentDidMount() {
    let obj = axios
      .get("https://614e0825e3cf1f001712d4ad.mockapi.io/api/shipinglist")
      .then((res) => {
        console.log("my new data " + res.data);

        this.setState({ shopingData: res.data });

        console.log(res.data[0].data.img);
        return res.data;
      });
  }
  deleteItem(data) {
    axios.delete(
      "https://614e0825e3cf1f001712d4ad.mockapi.io/api/shipinglist/" + data.id,
      {
        headers: {
          Authorization: "***",
        },
        data: {
          source: data.data,
        },
      }
    );

    alert("delete is item");
    this.render();
    window.location.reload();
  }

  GetMyData() {
    return JSON.parse(localStorage.getItem("testObject"));
  }

  DeleteList(id) {
    localStorage.removeItem("testObject");
  }

  render() {
    console.log(this.state.shopingData);

    return (
      <div>
        <h2> Shoping Cart </h2>;
        <div className="listItem">
          {this.state.shopingData.map((item) => (
            <li className="li">
              <div className="li_parent">
                <div className="img">
                  <img src={item.data.img} />
                </div>
                <div className="property">
                  <p>
                    {" "}
                    <b>Name: </b> {item.data.name}{" "}
                  </p>
                  <p>
                    {" "}
                    <b>Stock: </b> {item.data.stock}{" "}
                  </p>
                </div>
              </div>
              <button onClick={() => this.deleteItem(item)}>Delete</button>
            </li>
          ))}

          <div className="shiping">
            <button type="button">
              <Link to="shiping">Shiping</Link>
            </button>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default ShopingCart;
