import './section-filter.css';
import {useState} from 'react';

const SectionFilter = ({FilterFunctionPizza, FilterFunctionSushi, FilterFunctionAll}) => {
    
    const [allFilter, setAllFilter] = useState({active:true});
    const [pizzaFilter, setPizzaFilter] = useState({active:false});
    const [sushiFilter, setSushiFilter] = useState({active:false});

    const toggleAllFilter = ()=> {
        setPizzaFilter({active:false});
        setSushiFilter({active:false});

        FilterFunctionAll();
        const currentState = allFilter.active;
        setAllFilter({active:!currentState});
        
    }

    const togglePizzaFilter = () => {

        setSushiFilter({active:false});
        setAllFilter({active:false});

        const currentState = pizzaFilter.active;
        setPizzaFilter({active:!currentState});
        if(!pizzaFilter.active){
            FilterFunctionPizza();

        } else {
            FilterFunctionAll();
        }
        
    }
    const toggleSushiFilter = () => {
        setPizzaFilter({active:false});
        setAllFilter({active:false});
        const currentState = sushiFilter.active;
        setSushiFilter({active:!currentState});
        if(!sushiFilter.active){
            FilterFunctionSushi();
        } else {
            FilterFunctionAll();
        }
        
    }
    
    return (
        <div className='section-filter'>
        <ul>
            <li onClick={toggleAllFilter} className={allFilter.active ? 'active' : null} >Все</li>
            <li onClick={togglePizzaFilter} className={pizzaFilter.active ? 'active' : null}>Пицца</li>
            <li onClick={toggleSushiFilter} className={sushiFilter.active ? 'active' : null}>Суши</li>
        </ul>
    </div>
    )
};
export default SectionFilter;