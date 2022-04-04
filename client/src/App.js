import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Nav from './component/Nav';
import Landing from './component/Landing';
import Login from './component/Login/Login';
import Cart from './component/cart/Cart';
class App extends Component {
  state = {
    max: 9.99,
    min: 2.2,
    category: 'all',
    logged: false,
    name:'',
    products: [],
    errorMessage: '',
  };
  componentDidMount() {
    axios
      .get('http://localhost:8080/api/v1/products')
      .then((res) => this.setState({ products: res.data.data }))
      .catch((err) => this.setState({ errorMessage: err.response.statusText }));
      const user = JSON.parse( localStorage.getItem('user')) || []
      this.setState({logged: user.length===0 ? false:true })
  }

  onSetValue = (e) => {
    e.preventDefault();

    this.setState({ max: e.target.max.value, min: e.target.min.value });
  };

  setCategory = ({ target }) => {
    this.setState({ category: target.value });
  };
  login = (e) => {
    e.preventDefault();
    const user = {name : this.state.username , password:this.state.password }
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({logged:true})
  };

  inputChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.id });
  };

  addToCart = (e) =>{
    const products = JSON.parse(localStorage.getItem("products"))||[];
    console.log(e.target)
    const newProduct = JSON.stringify([...products,e.target.id]);
      localStorage.setItem("products",newProduct);
  }
  render() {
    const actions = {
      setCategory: this.setCategory,
      onSetValue: this.onSetValue,
      add:this.addToCart
    };

    return (
      <div className='App'>
        <Router>
          <Nav logged={this.state.logged} />
          <Routes>
            <Route
              path='/'
              element={<Landing actions={actions} values={this.state} />}
            />
            <Route
              path='/login'
              element={
                <Login
                  action={{
                    login: this.login,
                    change: this.inputChangeHandler,
                  }}
                />
              }
            />
            <Route path='/cart' element={<Cart products={this.state.products} />} />
            <Route path='/product/:id' element={<h1>Product</h1>} />
            <Route path='/add-product' element={<h1>Add product</h1>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
