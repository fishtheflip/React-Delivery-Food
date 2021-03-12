import star from '../../img/star.svg';
import './card.css';
import {Link} from 'react-router-dom';

const Card = ({name, stars, minPrice, timeDelivery, food, id, img}) => {
    
    return (
        <Link to={'/' + id} className="card wow fadeInUp" data-wow-delay="0.2s" id={id}>
            <img  alt="Restorant" className="card-image" alt='img' src={'img/' + img}/>
            <div className="card-text">
                <div className="card-heading">
                    <h3 className='card-title'>{name}</h3>
                    <span className='card-tag tag'> {timeDelivery} минут</span>
                </div>
                <div className="card-info">
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