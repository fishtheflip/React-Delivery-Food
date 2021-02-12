import Promo from '../promo/promo';
import Restaurants from '../restaurants/restaurants';
import './main.css';

const Main = ({data, clickFunction}) =>{
    return(
        <div className='container'>
            <Promo />
            <Restaurants data={data} clickFunction={clickFunction}/>
            
        </div>
    )
}
export default Main;