import React from 'react';

class CartItem extends React.Component {
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this', this.state);
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form 2
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () => {
        this.setState((prevState) => {
            if (prevState.qty === 0){
                return;
            } else {
                return {
                    qty: prevState.qty - 1
                }
            }
        })
    }
    render(){
        const  {price, title, qty} = this.props.product;
        return (
            <div className = "cart-item">
                <div className = "left-block">
                    <img style = {styles.image} alt = ""/>
                </div>
                <div className = "right-block">
                    <div style = { {fontSize: 25} }>{title}</div>
                    <div style = { {color: '#777'} }>{price}</div>
                    <div style = { {color: '#777'} }>{qty}</div>
                    <div className = "cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt = "increase" 
                            className = "action-icons" 
                            src = "https://image.flaticon.com/icons/png/512/1828/1828926.png"
                            onClick = {this.increaseQuantity} />
                        <img 
                            alt = "decrease" 
                            className = "action-icons" 
                            src = "https://image.flaticon.com/icons/png/512/992/992683.png"
                            onClick = {this.decreaseQuantity}
                             />
                        <img 
                            alt = "delete" 
                            className = 
                            "action-icons" 
                            src = "https://image.flaticon.com/icons/png/512/3096/3096673.png" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;