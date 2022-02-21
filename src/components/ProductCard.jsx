import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'
import numberWithCommas from '../untils/numberWithCommas'
import { useDispatch } from 'react-redux'
import { set } from '../redux/product-modal/productModalSlice'
const ProductCard = props => {
    const dispatch= useDispatch()
    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card_image">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <div className="product-card_name">
                    {props.name}
                </div>
                <div className="product-card_price">
                    {numberWithCommas(props.price)}
                    <span className="product-card_price_old">
                        <del>{numberWithCommas(390000)}</del>
                    </span>
                </div>

            </Link>
            <div className="product-card_btn">
                <Button
                    size="sm"
                    icon="bx bx-cart"
                    animate={true}
                    onClick={()=>dispatch(set(props.slug))}
                >
                    Chọn mua</Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string,
    img01: PropTypes.string,
    img02: PropTypes.string,
    price: PropTypes.number,
    slug: PropTypes.string
}

export default ProductCard
