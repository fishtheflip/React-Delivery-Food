import SectionHeading from '../section-heading/section-heading';
import Cards from '../cards/cards'
const Restaurants =({data, FilterFunctionPizza, FilterFunctionSushi, FilterFunctionAll})=>{
    return(
        <section className="restaurants">
            <SectionHeading 
            FilterFunctionPizza={FilterFunctionPizza}
            FilterFunctionSushi={FilterFunctionSushi}
            FilterFunctionAll={FilterFunctionAll}
            />
            <Cards data={data}  />
        </section>
    )
};
export default Restaurants;

