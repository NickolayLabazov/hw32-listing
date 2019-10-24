import React from 'react';
import PropTypes from 'prop-types';

export default function List({ img, url, title, currency_code, price, quantity }) {

    return (
        <>
            <div className="item" >
                <div className="item-image">
                    <a href={url}>
                        <div className='UserInfo'>
                            <img src={img.url_570xN} alt='sdfghs' />
                            <div></div>
                        </div>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{title.length > 50 ? `${title.substr(0, 50)}...` : title}</p>
                    <p className="item-price">{currency_code === 'USD' ? `$${price}` : (currency_code === 'EUR' ? `€${price}` : `${price} ${currency_code}`)}</p>
                    <p className={quantity <= 10 ? "item-quantity level-low" : (quantity <= 20 ? "item-quantity level-medium" : "item-quantity level-medium")}>{quantity}</p>
                </div>
            </div>
        </>
    );
}

List.defaultProps = {
    title: 'Название товара',
    img: {
        url_570xN: 'https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg',
    }
};

List.propTypes = {
    img: PropTypes.object,
    url: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    quantity: PropTypes.number,
}  