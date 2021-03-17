import star from '../../img/star.svg';
import './card.css';
import {Link} from 'react-router-dom';

const Card = ({name, stars, minPrice, timeDelivery, food, id, img}) => {
    
    return (
        <Link to={'/' + id} className="main-card wow fadeInUp" data-wow-delay="0.2s" id={id}>
            <img  alt="Restorant" className="card-image" alt='img' src={'img/' + img}/>
            <div className="main-card-text">
                <div className="main-card-heading">
                    <h3 className='main-card-title'>{name}</h3>
                    <span className='main-card-tag tag'> {timeDelivery} минут</span>
                </div>
                <div className="main-card-info">
                    <div className="rating">
                        <img src={star} alt='star'/>
                        {stars}
                    </div>
                    <div className="price">
                        От {minPrice} ₸
                    </div>
                    <div className="category">{food}</div>
                </div>
            </div>
        </Link>
    
    )
}
export default Card;