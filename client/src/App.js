import { Component } from 'react';
import './App.css';
import Card from './component/cards/Card';
import Category from './component/Category';
import Price from './component/Price';
class App extends Component {
  state = {
    max: 9.99,
    min: 2.2,
    category: 'mens clothing',
  };

  onSetValue = (e) => {
    e.preventDefault();

    this.setState({ max: e.target.max.value, min: e.target.min.value });
  };

  setCategory = ({ target }) => {
    this.setState({ category: target.value });
  };

  render() {
    return (
      <div className="App">
        <Category setCategory={this.setCategory} />
        <Price onSet={this.onSetValue} />
        <Card
          min={this.state.min}
          max={this.state.max}
          category={this.state.category}
        />
      </div>
    );
  }
}
export default App;
