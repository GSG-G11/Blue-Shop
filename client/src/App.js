import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Nav from './component/navbar/Nav';
import Landing from './component/landing/Landing';
import Login from './component/Login/Login';
import Cart from './component/cart/Cart';
import AddProduct from './component/AddProduct/AddProduct';
import ProductPage from './component/productpage/ProductPage';
import NotFound from './component/Errors/NotFound';

class App extends Component {
  state = {
    max: 1000000000000000,
    min: 0,
    category: 'all',
    logged: false,
    name: '',
    products: [],
    deleteMessage: '',
    show: false,
    errorMessage: '',
    search: '',
    username:'',
    password:'',
    loggedUser: '',
    toDeleteId:0,
  };
  componentDidMount() {
    axios
      .get('http://localhost:8080/api/v1/products')
      .then((res) => this.setState({ products: res.data.data, errorMessage:'' }))
      .catch((err) => this.setState({ errorMessage: err.response.statusText }));
    const user = JSON.parse(localStorage.getItem('user')) || [];
    this.setState({ logged: user.length === 0 ? false : true, loggedUser: user.name });
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
    const user = { name: this.state.username, password: this.state.password };
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({ logged: true });
  };

  inputChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.id });
  };
  inputSearchHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addToCart = (e) => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(e);
    const newProduct = JSON.stringify(products);
    localStorage.setItem('products', newProduct);
  };

  deleteProduct = (id) => {
    console.log(id);
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const newArr = products.filter((e) => e.id !== +id);
    localStorage.setItem('products', JSON.stringify(newArr));
    this.setState({ deleteMessage: 'Product deleted', show: false });
  };
  confirmDelete = (e) => this.setState({ show: true , toDeleteId: e.target.id});
  hide = () => this.setState({ show: false });

  deleteProductFromState = (id) => {
    this.setState((prevState) => {
      return { products: prevState.products.filter((ele) => ele.id !== id) };
    });
  };
  updateProductFromState = (id, updated) => {
    console.log(id, updated);
    this.setState(
      (prevState) => {
        return {
          products: prevState.products.map((ele) =>
            ele.id === id ? updated : ele
          ),
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  addProductToState = (newProduct) => {
    this.setState((prevState) => {
      return { products: [...prevState.products, newProduct] };
    });
  };
  logOut = () => {
    localStorage.removeItem('user');
    this.setState({ logged: false });
  }

  render() {
    const actions = {
      setCategory: this.setCategory,
      onSetValue: this.onSetValue,
      add: this.addToCart,
    };
    return (
      <div className="App">
        <Router>
          <Nav action={this.inputSearchHandler} logOut={this.logOut} loggedUser={this.state.loggedUser && this.state.loggedUser} logged={this.state.logged} />
          <Routes>
            <Route
              path="/"
              element={<Landing actions={actions} values={this.state} />}
            />
            <Route
              path="/login"
              element={
                <Login
                  action={{
                    login: this.login,
                    change: this.inputSearchHandler,
                  }}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  products={this.state.products}
                  deleteProduct={this.deleteProduct}
                  confirm={this.confirmDelete}
                  show={this.state.show}
                  toDeleteId={this.state.toDeleteId}
                  hide={this.hide}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart products={this.state.products} />}
            />
            <Route
              path="/product/:id"
              element={
                <ProductPage
                  products={this.state.products}
                  deleteProductFromState={this.deleteProductFromState}
                  updateProductFromState={this.updateProductFromState}
                />
              }
            />
            <Route
              path="/product"
              element={
                <AddProduct addProductToState={this.addProductToState} />
              }
            />
            <Route
              path="*"
              element={
                <NotFound  />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
