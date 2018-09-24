import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Order from './components/Order'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    orders: []
    }
  }

  addOrder = (order) => {
    this.setState({
      orders: this.state.orders.concat(order)
    })
  }

  appendOrders = () => {
    return this.state.orders.map(order => {
      return <Order sides={order.sides} fillings={order.fillings} toppings={order.toppings} protein={order.protein}/>
    })
  }

  

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./images/logo.png')} className="App-logo" alt="logo" />
        </header>

        <Form addOrder={this.addOrder}/>

        <div className="ui raised container segment">
          <h1 className="ui block header">All Orders</h1>
          <div className="ui three cards">
          { this.appendOrders() }
          </div>
        </div>
      </div>
    )

  }
}

export default App
