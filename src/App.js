import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [],
        loading: true
    }
    this.db = firebase.firestore();
  }
  componentDidMount () {
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //   console.log(snapshot);
    //   snapshot.docs.map((doc) => {
    //     console.log(doc.data);
    //   });

    //   const products = snapshot.docs.map((doc) => {
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     return data;
    //   })

    //   this.setState({
    //     products,
    //     loading: false
    //   })

    // })
    this.db
    .collection('products')
    .onSnapshot((snapshot) => {
      console.log(snapshot);
      snapshot.docs.map((doc) => {
        console.log(doc.data);
        return "";
      });

      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products,
        loading: false
      })

    })
  }
  handleIncreaseQuantity = (product) => {
      // console.log('Increase quantity', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      // products[index].qty += 1;

      // this.setState({
      //     products
      // })
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Document updated successfully');
      })
      .catch((err) => {
        console.log("error", err);
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

  addProduct = () => {
    this.db
    .collection('products')
    .add({
      img: "",
      price: 2999,
      qty: 3,
      title: 'washing machine'
    })
    .then((docRef) => {
      console.log('product has been added',docRef);
    })
    .catch((error) => {
      console.log("Error", error);
    })
  }

  render() {
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar
          count = {this.getCartCount()}
        />
        <button onClick = {this.addProduct}>Add a Product</button>
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products</h1>}
        <div>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
