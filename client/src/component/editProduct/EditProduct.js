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
  componentDidMount() {
    const { element: {name, price, description, image, category} } = this.props;
    this.setState({
      name: name,
      price: price,
      description: description,
      image: image,
      category: category,
    });
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  editProduct = (e) => {
    const { toggelEdit } = this.props;
    e.preventDefault();
    const { element, updateProductFromState } = this.props;

    axios
      .put(`/api/v1/products/${element.id}`, this.state)
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
            <div className="input-label-div">
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                />
              </label>
            </div>
            <div className="input-label-div">
              <label>
                Price:
                <input
                  type="number"
                  value={this.state.price}
                  onChange={this.handleChange}
                  name="price"
                />
              </label>
            </div>
            <div className="input-label-div">
              <label>
                Description:
                <input
                  type="text"
                  value={this.state.description}
                  onChange={this.handleChange}
                  name="description"
                />
              </label>
            </div>
            <div className="input-label-div">
              <label>
                image:
                <input
                  type="text"
                  value={this.state.image}
                  onChange={this.handleChange}
                  name="image"
                />
              </label>
            </div>
            <select
              className="select-category"
              name="category"
              onChange={this.handleChange}
              value={this.state.category}
            >
              <option className="category-option" value="mens clothing">
                mens clothing
              </option>
              <option className="category-option" value="jewelry">
                jewelry
              </option>
              <option className="category-option" value="electronics">
                electronics
              </option>
              <option className="category-option" value="women clothing">
                women clothing
              </option>
            </select>
            <button className="add-btn" type="submit">
              {' '}
              Edit
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default UpdateProduct;
