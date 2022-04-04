import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Nav from './component/Nav';
import Landing from './component/Landing';

class App extends Component {
  state = {
    max: 9.99,
    min: 2.2,
    category: 'mens clothing',
    logged:true,
  };

  onSetValue = (e) => {
    e.preventDefault();

    this.setState({ max: e.target.max.value, min: e.target.min.value });
  };

  setCategory = ({ target }) => {
    this.setState({ category: target.value });
  };

  render() {
    const actions = { setCategory:this.setCategory, onSetValue:this.onSetValue }
    
    return (
      <div className='App'>
        <Router>
          <Nav logged={this.state.logged} />
          <Routes>
            <Route path='/' element={<Landing actions={actions} values={this.state} />} />
            <Route path='/login' element={<h1>Login</h1>} />
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
