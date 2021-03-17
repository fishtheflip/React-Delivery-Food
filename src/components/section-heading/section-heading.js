import './section-heading.css';
import React from 'react';
import SectionFilter from '../section-filter/section-filter';
const SectionHeading = ({FilterFunctionPizza, FilterFunctionSushi, FilterFunctionAll}) =>{
    return(
        <React.Fragment>
        <div className="section-heading">
            <h1 className="section-heading-title">Рестораны</h1>
            <SectionFilter 
            FilterFunctionPizza={FilterFunctionPizza} 
            FilterFunctionSushi={FilterFunctionSushi}
            FilterFunctionAll={FilterFunctionAll}
            />

        </div>

                </React.Fragment>
        
    )
}
export default SectionHeading;