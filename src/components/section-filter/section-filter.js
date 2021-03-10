import './section-filter.css';
import {useState} from 'react';

const SectionFilter = ({FilterFunctionPizza, FilterFunctionSushi, FilterFunctionAll}) => {
    
    const [allFilter, setAllFilter] = useState({active:true});
    const [pizzaFilter, stetPizzaFilter] = useState({active:false});
    const [sushiFilter, setSushiFilter] = useState({active:false});

    const toggleAllFilter = ()=> {
        const currentState = allFilter.active;
        setAllFilter({active:!currentState});
        
    }
    
    const togglePizzaFilter = () => {
        const currentState = pizzaFilter.active;
        stetPizzaFilter({active:!currentState});
        if(!pizzaFilter.active){
            FilterFunctionPizza();
        } else {
            FilterFunctionAll();
        }
        
    }
    
    return (
        <div className='section-filter'>
        <ul>
            <li onClick={toggleAllFilter} className={allFilter.active ? 'active' : null} >Все</li>
            <li onClick={togglePizzaFilter} className={pizzaFilter.active ? 'active' : null}>Пицца</li>
            <li onClick={FilterFunctionSushi}>Суши</li>
        </ul>
    </div>
    )
};
export default SectionFilter;