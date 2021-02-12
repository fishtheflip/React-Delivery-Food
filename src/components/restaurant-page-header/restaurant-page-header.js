import './restaurant-page-header.css';

const RestaurantPageHeader = ({data, num}) =>{
    return (
        <div className="section-heading">
        <h1 className="section-title">{data[num].name}</h1>
        <div className="card-info card-res">
            <div className="rating">
                <img src="img/star.svg" alt="rating" className="rating-star"/>
                {data[num].stars}
            </div>
            <div className="price"> От {data[num].minPrice}₸</div>
            <div className="category">{data[num].food}</div>
        </div>
    </div>
    )
};
export default RestaurantPageHeader;