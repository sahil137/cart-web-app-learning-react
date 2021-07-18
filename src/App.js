import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 1,
                img: '',
                id : 1
            },
            {
                price: 99,
                title: 'Watch',
                qty: 2,
                img: '',
                id : 2
            },
            {
                price: 9999,
                title: 'Laptop',
                qty: 1,
                img: '',
                id : 3
            }
        ]
    }
}
  handleIncreaseQuantity = (product) => {
      // console.log('Increase quantity', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          // products: products
          products
      })
  }
  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      if (products[index].qty === 1){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          products
      })

  }
  handleDeleteProduct = (id) => {
      const {products} = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      })
  }

  getCartCount =() => {
    const {products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const  {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      if (product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price;
      }
      return '';
    })
    return cartTotal;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar
          count = {this.getCartCount()}
        />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
