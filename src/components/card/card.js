import logo from '../../img/img1.jpg';
import star from '../../img/star.svg';
import './card.css';
import {Link} from 'react-router-dom';

const Card = ({name, stars, minPrice, timeDelivery, food, id}) => {
    // let idStr = id +'';
    return (
        <Link to='/1'  className="card wow fadeInUp" data-wow-delay="0.2s">
            <img src={logo} alt="Ciao Pizza" className="card-image" alt='img'/>
            <div className="card-text">
                <div className="card-heading">
                    <h3>{name}</h3>
                    <span> {timeDelivery} минут</span>
                </div>
                <div className="card-info">
                    <div className="rating">
                        <img src={star} alt='star'/>
                        {stars}
                    </div>
                    <div className="price">
                        От {minPrice} тг
                    </div>
                    <div className="category">{food}</div>
                </div>
            </div>
        </Link>
    )
}
export default Card;