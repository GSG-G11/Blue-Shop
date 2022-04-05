import React, { Fragment } from 'react';
import axios from 'axios';
class AddProduct extends React.Component {
  state = { name: '', price: '', description: '', image: '', category: 'mens clothing' ,successMsg: ''};
  
  
  handleChange=({ target })=> {
   
    this.setState( {[target.name]:target.value});
  }

  AddProduct=(e)=> {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('http://localhost:8080/api/v1/product', this.state)
      .then((response) => this.setState({ successMsg: response.data.msg }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <div className="form-container">
          <form className="add-form" onSubmit={this.AddProduct}>
            <label>
              Name:
              <input
                type="text"
                placeholder="...Add Name"
              
                onChange={this.handleChange}
                name="name"
              />
            </label>

            <label>
              Price:
              <input
                type="number"
                placeholder="... Add Price"
             
                onChange={this.handleChange}
                name="price"
              />
            </label>

            <label>
              Description:
              <input
                type="text"
                placeholder="...Add Description"
              
                onChange={this.handleChange}
                name="description"
              />
            </label>

            <label>
              image:
              <input
                type="text"
                placeholder="...Image Url"
               
                onChange={this.handleChange}
                name="image"
              />
            </label>
            
<select name="category" onChange={this.handleChange} >

  
  
  <option value="mens clothing">mens clothing</option>
  <option value="jewelry">jewelry</option>
  <option value="electronics">electronics</option>
  <option value="women clothing">women clothing</option>
</select>
            <button className="add-btn" type="submit"> submit</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default AddProduct;
