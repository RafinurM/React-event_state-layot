import React from "react";

function ShopCard(data) {
    return (
        <div className="ShopCard">
            <div className="ShopCardName"><span>{data.data.name}</span></div>
            <div className="ShopCardColor"><span>{data.data.color}</span></div>
            <div className="ShopCardImageWrapper"><img className="ShopCardImage" src={data.data.img} /></div>
            <div className="ShopCardFooter">
                <div className="ShopCardPrice"><span>${data.data.price}</span></div>
                <div className="ShopCardButtonWrapper"><a href="#" className="ShopCardButton">add to cart</a></div></div>
        </div>
    )

}


function CardsView(props) {
    let products = props.cards.map(element => <ShopCard data={element} />)

    return (
        <div className="ShopCardsWrapper">{products}</div>
    )
}

export default CardsView