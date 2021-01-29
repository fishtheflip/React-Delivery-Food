import './restaurant-page-header.css';

const RestaurantPageHeader = () =>{
    return (
        <div className="section-heading">
        <h1 className="section-title">Ciao Pizza</h1>
        <div className="card-info card-res">
            <div className="rating">
                <img src="img/star.svg" alt="rating" className="rating-star"/>
                4,7
            </div>
            <div className="price"> От 1400₸</div>
            <div className="category">Суши</div>
        </div>
    </div>
    )
};
export default RestaurantPageHeader;