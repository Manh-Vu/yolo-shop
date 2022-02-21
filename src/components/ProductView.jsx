import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import  {addItem}  from '../redux/shopping-cart/cartItemsSlice'
import PropTypes from 'prop-types'
import Button from './Button'
import numberWithCommas from '../untils/numberWithCommas'
import { withRouter } from 'react-router'

const ProductView = props => {
const dispatch = useDispatch()


    let product=props.product
    if(product===undefined) product={
        price: 0,
        title:"",
        colors:[],
        size:[]

    }
    const [previewImg,setPreviewImg] = useState(product.image01)
    const [descriptionExpand, setDescriptionExpand] = useState(false)
    const [color, setColor] = useState(undefined)
    const [size, setSize] = useState(undefined)
    const [quantity, setQuantity] = useState(1)
    const updateQuantity = (type)=>{
        if(type==='plus'){
            setQuantity(quantity + 1)
        }
        else{
            setQuantity(quantity - 1 < 1 ? 1 : quantity-1)
        }
    }
    useEffect(() => {
      setPreviewImg(product.image01)
      setQuantity(1)
      setSize(undefined)
      setColor(undefined)

    }, [product])
    
    const check=()=>{
        if(color===undefined){
        alert('Xin vui lòng chọn màu săc')
        return false
        }
        if(size===undefined){
        alert('Xin vui lòng chọn kích cỡ')
        return false
        }
        return true
    }
    const addTocard = ()=>{
        if(check()){
           dispatch(addItem({
            slug: product.slug,
            size: size,
            color: color,
            quantity: quantity,
            price: product.price
           }))
           alert('success')
        
        
        }
    }
    const goTocard = () =>{
        if(check()) {
        dispatch(addItem({
            slug: product.slug,
            size: size,
            color: color,
            quantity: quantity,
            price: product.price
           }))
        props.history.push('/cart')
        }
    }

  return (
    <div className="product">
        <div className="product_images">
            <div className="product_images_list">
                <div className="product_images_list_item" onClick={()=> setPreviewImg(product.image01)}>
                    <img src={product.image01} alt="" />
                </div>
                <div className="product_images_list_item" onClick={()=> setPreviewImg(product.image02)}>
                    <img src={product.image02} alt="" />
                </div>
            </div>
            <div className="product_images_main">
                 <img src={previewImg} alt="" ></img>   
            </div>
            <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description_title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description_content" dangerouslySetInnerHTML={{__html:product.description}}>
                
                </div>
                <div className="product-description_toggle">
                    <Button size="sm" onClick={()=> setDescriptionExpand(!descriptionExpand)}>{descriptionExpand ? 'Thu gọn' : 'Xem thêm'}</Button>
                </div>
            </div>
        </div>
        <div className="product_info">
            <h1 className="product_info_title">{product.title}</h1>
            <div className="product_info_item">
                <span className="product_info_item_price">{numberWithCommas(product.price)}</span>
            </div>
            <div className="product_info_item">
                <div className="product_info_item_title">Màu sắc</div>
                <div className="product_info_item_list">
                    {product.colors.map((item,index)=>(
                        <div className={`product_info_item_list_item ${color===item ? 'active' : ''}`} key={index}
                        onClick={()=>setColor(item)}>
                            <div className={`circle bg-${item}`}></div>
                        </div>
                    ))}
                </div>
                
            </div>
            <div className="product_info_item">
                <div className="product_info_item_title">Kích cỡ</div>
                <div className="product_info_item_list">
                    {product.size.map((item,index)=>(
                        <div className={`product_info_item_list_item ${size===item ? 'active' : ''}`} key={index}
                        onClick={()=>setSize(item)}>
                     
                        <span className="product_info_item_list_item_size">
                            {item}
                        </span>
                        </div>
                    ))}
                </div>
                
            </div>
            <div className="product_info_item">
                <div className="product_info_item_title">Số lượng</div>
                <div className="product_info_item_quantity">
                    <div className="product_info_item_quantity_btn" onClick={()=>updateQuantity('minus')}>
                        <i className='bx bx-minus'></i>
                    </div>
                    <div className="product_info_item_quantity_input">
                        {quantity}
                    </div>
                    <div className="product_info_item_quantity_btn" onClick={()=>updateQuantity('plus')}>
                        <i className='bx bx-plus'></i>
                    </div>
                 </div>
            </div>
            <div className="product_info_item">
                <Button onClick={()=>addTocard()}>Thêm vào giỏ hàng</Button>
                <Button onClick={()=>goTocard()}>Mua ngay</Button>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description_title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description_content" dangerouslySetInnerHTML={{__html:product.description}}>
                
                </div>
                <div className="product-description_toggle">
                    <Button size="sm" onClick={()=> setDescriptionExpand(!descriptionExpand)}>{descriptionExpand ? 'Thu gọn' : 'Xem thêm'}</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)