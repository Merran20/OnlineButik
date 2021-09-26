import React from "react";
import "./Shiping.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Shiping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poshta: 0,
      total: 0,
      shopingData: [],
    };

    this.onShiping = this.onShiping.bind(this);
    this.shipingCheckOut = this.shipingCheckOut.bind(this);
  }

  componentDidMount() {
    let obj = axios
      .get("https://614e0825e3cf1f001712d4ad.mockapi.io/api/shipinglist")
      .then((res) => {
        this.setState({ shopingData: res.data });

        return res.data;
      });
  }

  onShiping(event) {
    var result = 0;
    for (let i = 0; i < this.state.shopingData.length; i++) {
      result += parseInt(this.state.shopingData[i].data.price);
    }

    result += parseInt(event.target.value);
    this.setState({ poshta: event.target.value, total: result });
  }

  shipingCheckOut() {
    alert("Tack för att du handlade hos oss! Din order behandlas! ");
  }
  render() {
    return (
      <div className="ship">
        <div class="row">
          <div class="col-75">
            <div class="container">
              <form>
                <div class="row">
                  <div class="col-50">
                    <h3>Billing Address</h3>
                    <label for="fname">
                      <i class="fa fa-user"></i> Full Name
                    </label>
                    {/* <input type="text" id="fname" value={this.state.fullName} onChange={this.onShiping}  name="fullName" placeholder="John M. Doe" /> */}
                    <input
                      type="text"
                      id="fname"
                      name="fullName"
                      placeholder="John M. Doe"
                    />
                    <label for="email">
                      <i class="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                    />
                    <label for="adr">
                      <i class="fa fa-address-card-o"></i> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="542 W. 15th Street"
                    />
                    <label for="city">
                      <i class="fa fa-institution"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="New York"
                    />

                    <div class="row">
                      <div class="col-50">
                        <label for="state">Standart: 3$</label>
                        <input
                          type="radio"
                          id="state"
                          value={3}
                          onChange={this.onShiping}
                          name="poshta"
                        />
                      </div>
                      <div class="col-50">
                        <label for="state">Express: 10$</label>
                        <input
                          type="radio"
                          id="state"
                          value={10}
                          onChange={this.onShiping}
                          name="poshta"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-50">
                    <h3>Payment</h3>

                    <label for="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="John More Doe"
                    />
                    <label for="ccnum">Credit card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label for="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                    />

                    <div class="row">
                      <div class="col-50">
                        <label for="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div class="col-50">
                        <label for="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="352"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input type="checkbox" checked="checked" name="sameadr" />{" "}
                  Shipping address same as billing
                </label>
                <input
                  type="button"
                  value="Continue to checkout"
                  onClick={this.shipingCheckOut}
                  class="btn"
                />
              </form>
            </div>
          </div>

          <div class="col-25">
            <div class="container">
              <h4>
                Cart
                <span class="price">
                  <i class="fa fa-shopping-cart"></i>
                  <b>4</b>
                </span>
              </h4>
              {this.state.shopingData.map((item) => (
                <p>
                  {item.data.name} <span class="price">{item.data.price}$</span>
                </p>
              ))}

              <hr />
              <p>
                Total{" "}
                <span class="price">
                  <b>{this.state.total}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Shiping;
