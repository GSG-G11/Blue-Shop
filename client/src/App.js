import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Landing from './component/Landing';
import Login from './component/Login/Login';

class App extends Component {
  state = {
    max: 9.99,
    min: 2.2,
    category: 'mens clothing',
    logged: false,
    name:''
  };

  onSetValue = (e) => {
    e.preventDefault();

    this.setState({ max: e.target.max.value, min: e.target.min.value });
  };

  setCategory = ({ target }) => {
    this.setState({ category: target.value });
  };
  componentDidMount(){
    const user = JSON.parse( localStorage.getItem('user')) || []
    this.setState({logged: user.length===0 ? false:true })
  }
  login = (e) => {
    e.preventDefault();
    const user = {name : this.state.username , password:this.state.password }
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({logged:true})
  };

  inputChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const actions = {
      setCategory: this.setCategory,
      onSetValue: this.onSetValue,
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
            <Route path='/cart' element={<h1>Cart</h1>} />
            <Route path='/product/:id' element={<h1>Product</h1>} />
            <Route path='/add-product' element={<h1>Add product</h1>} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
