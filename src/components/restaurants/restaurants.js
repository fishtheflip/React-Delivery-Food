import SectionHeading from '../section-heading/section-heading';
import Cards from '../cards/cards'
const Restaurants =({data})=>{
    return(
        <section className="restaurants">
            <SectionHeading />
            <Cards data={data} />
        </section>
    )
};
export default Restaurants;

