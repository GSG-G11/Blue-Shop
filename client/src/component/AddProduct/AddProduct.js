import React, { Fragment } from 'react';
import axios from 'axios';
import './style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddProduct extends React.Component {
  state = {
    name: '',
    price: '',
    description: '',
    image: '',
    category: 'mens clothing',
    errorMsg: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value, errorMsg: '' });
  };
  addSuccessMsg = () => {
    toast.success('Product was Added successfully !', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  AddProduct = (e) => {
    e.preventDefault();
    const { addProductToState } = this.props;
    const { name, price, description, image, category } = this.state;
    if (!name || !price || !description || !image || !category) {
      this.setState({ errorMsg: 'Please fill all fields' });
    } else {
      const data = { name, price, description, image, category };
      axios
        .post('http://localhost:8080/api/v1/product', data)
        .then(() => {
          addProductToState(data);
          this.addSuccessMsg();
          this.setState({
            name: '',
            price: '',
            description: '',
            category: 'mens clothing',
            image: ''
          });
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const { errorMsg, name,description,price, category,image } = this.state;
    return (
      <Fragment>
        <div className="form-container">
          <form className="add-form" onSubmit={this.AddProduct}>
            <div className="input-label-div">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Add Name"
                onChange={this.handleChange}
                name="name"
                value={name}
              />
            </div>

            <div className="input-label-div">
              <label>Price:</label>
              <input
                type="number"
                placeholder="Add Price"
                onChange={this.handleChange}
                name="price"
                value={price}
              />
            </div>

            <div className="input-label-div">
              <label>Description:</label>
              <textarea
                type="text"
                placeholder="Add Description"
                onChange={this.handleChange}
                name="description"
                value={description}

              />
            </div>

            <div className="input-label-div">
              <label>image:</label>
              <input
                type="text"
                placeholder="Image Url"
                onChange={this.handleChange}
                name="image"
                value={image}
              />
            </div>
            <div className="input-label-div">
              <label>category:</label>
              <select
                className="select-category"
                name="category"
                onChange={this.handleChange}
                value={category}
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
            </div>
            {errorMsg ? <p className="error-message">{errorMsg}</p> : null}
            <div className="add-section-btn">
              <button className="add-btn" type="submit">
                {' '}
                Add product
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default AddProduct;
