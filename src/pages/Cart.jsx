import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import productData from '../assets/fake-data/product'
import Helmet from '../components/Helmet'
import numberWithCommas from '../untils/numberWithCommas'
import Button from '../components/Button'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'


const Cart = () => {
    const cartItems =  useSelector((state)=>state.cartItems.value)
    
    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
      setCartProducts(productData.getCartItemsInfo(cartItems))
      setTotalProducts(cartItems.reduce((total,item) => total + Number(item.quantity),0))
      setTotalPrice(cartItems.reduce((total,item) => total + (Number(item.quantity) * Number(item.price)),0))
      
    }, [cartItems])
    
   
    return (
        <Helmet title='Giỏ Hàng'>
            <div className="cart">
                <div className="cart_info">
                    <div className="cart_info_txt">
                        <p>Giỏ hàng của bạn có {totalProducts} sản phẩm</p>
                        <div className="cart_info_txt_price">
                            <span>Thành tiền</span>
                            <span>{numberWithCommas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className="cart_info_btn">
                        <Button size="block">Thanh Toán</Button>
                        <Link to='/catalog'>
                        <Button size="block">Tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart_list">
                {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index}/>
                        ))
                    }
                   
                </div>
            </div>
        </Helmet>
      
    )
}

export default Cart
