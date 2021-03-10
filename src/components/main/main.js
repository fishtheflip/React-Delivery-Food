import Promo from '../promo/promo';
import Restaurants from '../restaurants/restaurants';
import './main.css';

const Main = ({data, FilterFunctionPizza, FilterFunctionSushi, FilterFunctionAll}) =>{
    return(
        <div className='container'>
            <Promo />
            <Restaurants data={data} 
            FilterFunctionPizza={FilterFunctionPizza}
            FilterFunctionSushi={FilterFunctionSushi}
            FilterFunctionAll={FilterFunctionAll}
            />
            
        </div>
    )
}
export default Main;