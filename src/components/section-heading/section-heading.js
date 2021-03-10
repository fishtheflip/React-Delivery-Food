import './section-heading.css';
import React from 'react';
import SectionFilter from '../section-filter/section-filter';
const SectionHeading = ({FilterFunctionPizza, FilterFunctionSushi, FilterFunctionAll}) =>{
    return(
        <React.Fragment>
        <div className="section-heading">
            <h1 className="section-title">Рестораны</h1>
            {/* <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/> */}
            <SectionFilter FilterFunctionPizza={FilterFunctionPizza} 
            FilterFunctionSushi={FilterFunctionSushi}
            FilterFunctionAll={FilterFunctionAll}
            />

        </div>

                </React.Fragment>
        
    )
}
export default SectionHeading;