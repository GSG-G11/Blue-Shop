import React, { Fragment } from 'react';
import axios from 'axios';
import './editProduct.css';
class UpdateProduct extends React.Component {
  state = {
    name: '',
    price: '',
    description: '',
    image: '',
    category: 'mens clothing',
    successMsg: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  editProduct = (e) => {
    const { toggelEdit } = this.props;
    e.preventDefault();
    const { element, updateProductFromState } = this.props;

    axios
      .put(`http://localhost:8080/api/v1/products/${element.id}`, this.state)
      .then((res) => {
        updateProductFromState(element.id, res.data.data[0]);
        toggelEdit();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <div className="update-container">
          <form className="update-form" onSubmit={this.editProduct}>
            <label>
              Name:
              <input
                type="text"
                placeholder={this.props.element.name}
                onChange={this.handleChange}
                name="name"
              />
            </label>

            <label>
              Price:
              <input
                type="number"
                placeholder={this.props.element.price}
                onChange={this.handleChange}
                name="price"
              />
            </label>

            <label>
              Description:
              <input
                type="text"
                placeholder={this.props.element.description}
                onChange={this.handleChange}
                name="description"
              />
            </label>

            <label>
              image:
              <input
                type="text"
                placeholder={this.props.element.image}
                onChange={this.handleChange}
                name="image"
              />
            </label>

            <select name="category" onChange={this.handleChange}>
              <option value="mens clothing">mens clothing</option>
              <option value="jewelry">jewelry</option>
              <option value="electronics">electronics</option>
              <option value="women clothing">women clothing</option>
            </select>
            <button className="add-btn" type="submit">
              {' '}
              submit
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default UpdateProduct;
