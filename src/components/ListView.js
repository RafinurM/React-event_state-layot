import React from "react";


function ShopItem(data) {
    return (
        <div className="ShopItem">
            <div className="ShopItemImageWrapper"><img className="ShopItemImage" src={data.data.img} alt={data.data.name}/></div>
            <div className="ShopItemName"><span>{data.data.name}</span></div>
            <div className="ShopItemColor"><span>{data.data.color}</span></div>
            <div className="ShopItemPrice"><span>${data.data.price}</span></div>
            <div className="ShopItemButtonWrapper"><a href="#" className="ShopItemButton">add to cart</a></div>
        </div>
    )
}

function ListView(props) {
    let products = props.items.map((element, index) => <ShopItem key = {index} data={element}/> )
    
    return (
        <div className="ShopListWrapper">{products}</div>
    )
}

export default ListView