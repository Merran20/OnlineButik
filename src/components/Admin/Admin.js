import React from "react";
import axios from "axios";
import "./Admin.css";

//api link
//https://mockapi.io/projects/614e0825e3cf1f001712d4ae

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      stock: 0,
      price: 0,
      img: "",
      category: "",
    };

    this.addItem = this.addItem.bind(this);
    this.printItem = this.printItem.bind(this);
  }

  addItem(data) {
    this.setState({ [data.target.name]: data.target.value });
    console.log("data - " + data.target.value);
  }

  printItem(data) {
    console.log(this.state.name);
    console.log(this.state.stock);
    console.log(this.state.price);
    console.log(this.state.img);
    console.log(this.state.category);

    console.log(data);
    let url =
      "https://614e0825e3cf1f001712d4ad.mockapi.io/api/" + data.category;
    console.log("-------" + data.category);
    axios
      .post(url, {
        data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="admin">
        <form className="form-group">
          <div class="form-group">
            <label for="name">name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={this.state.name}
              onChange={this.addItem}
              name="name"
              placeholder="name"
            />
          </div>
          <div class="form-group">
            <label for="stock">stock</label>
            <input
              type="number"
              class="form-control"
              id="stock"
              value={this.state.stock}
              onChange={this.addItem}
              name="stock"
              placeholder="stock"
            />
          </div>
          <div class="form-group">
            <label for="name">price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              value={this.state.price}
              onChange={this.addItem}
              name="price"
              placeholder="price"
            />
          </div>
          <div class="form-group">
            <label for="img">image</label>
            <input
              type="text"
              class="form-control"
              id="img"
              value={this.state.img}
              onChange={this.addItem}
              name="img"
              placeholder="img"
            />
          </div>

          <div class="category">
            <div class="form-group">
              <label for="Shoes">Shoes</label>
              <input
                type="radio"
                name="category"
                class="form-control"
                value="shoes"
                onChange={this.addItem}
                id="Shoes"
              />
            </div>
            <div class="form-group">
              <label for="Jacket">Jacket</label>
              <input
                type="radio"
                name="category"
                class="form-control"
                value="jacket"
                onChange={this.addItem}
                id="Jacket"
              />
            </div>
            <div class="form-group">
              <label for="Shirt">Shirt</label>
              <input
                type="radio"
                name="category"
                class="form-control"
                value="shirt"
                onChange={this.addItem}
                id="Shirt"
              />
            </div>
          </div>
          <input
            type="button"
            class="btn btn-primary"
            value="Add Item"
            onClick={() => this.printItem(this.state)}
          />
        </form>
      </div>
    );
  }
}

export default Admin;
