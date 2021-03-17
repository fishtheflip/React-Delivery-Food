import './restaurant-card.css';


const RestaurantCard = ({id, img, price, title, food, onAdd, foodId}) =>{

    return(
        <div className="card" id={id}>
        <img src={"img/food/" + img} alt="food" className="card-image-restaurant"/>
        <div className="card-text">
            <div className="card-heading">
                <h3 className="card-title card-title-reg">{title}</h3>
                
            </div>
            <div className="card-info">
                <div className="ingredients">{food}</div>
            </div>
            <div className="card-buttons">
                <button className="button button-primary" id={id} onClick={()=> onAdd(id, title, price, foodId)}>
                    <span className="button-cadr-text" >В Корзину</span>
                    <img src="img/shopres.svg" alt="logo" className="card-button-image"/>
                </button>
                <strong className="card-price-bold">{price}₸</strong>
            </div>
        </div>
    </div>
    )
};

export default RestaurantCard; 