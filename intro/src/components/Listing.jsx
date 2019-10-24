import React from 'react';
import List from './List.jsx';

export default function Listing(props) {

    const { items } = props;

    return (
        <div className="item-list">
            {items.map(item => <List
                img={item.MainImage}
                key={item.listing_id}
                url={item.url}
                title={item.title}
                currency_code={item.currency_code}
                price={item.price}
                quantity={item.quantity}
            />)}
        </div>
    );
}