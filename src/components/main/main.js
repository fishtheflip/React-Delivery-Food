import Promo from '../promo/promo';
import Restaurants from '../restaurants/restaurants';
import './main.css';

const Main = ({data}) =>{
    return(
        <div className='container'>
            <Promo />
            <Restaurants data={data}/>
            
        </div>
    )
}
export default Main;