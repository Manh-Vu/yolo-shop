import React from 'react'
import productData from '../assets/fake-data/product'
import ProductView from './ProductView'
import Button from './Button'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/product-modal/productModalSlice'
const ProductViewModal = () => {
    const productSlug = useSelector((state)=>state.productModal.value)
    const dispatch= useDispatch()
    const [product, setProduct] = useState(undefined)

    
    useEffect(() => {
      setProduct(productData.getProductBySlug(productSlug))
    }, [productSlug])
    
  return (
    <div className={`product-view_modal ${product === undefined ? '' : 'active'}`}>
        <div className="product-view_modal_content">
            <ProductView product={product}/>
            <div className="product-view_modal_content_close">
                <Button size="sm"  onClick={()=>dispatch(remove())}>Đóng</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductViewModal