import SectionHeading from '../section-heading/section-heading';
import Cards from '../cards/cards'
const Restaurants =({data, clickFunction})=>{
    return(
        <section className="restaurants">
            <SectionHeading />
            <Cards data={data} clickFunction={clickFunction}/>
        </section>
    )
};
export default Restaurants;

