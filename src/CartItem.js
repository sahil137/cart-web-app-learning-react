import React from 'react';

class CartItem extends React.Component {
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
                            onClick = {() => this.props.onIncreaseQuantity(this.props.product)} />
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