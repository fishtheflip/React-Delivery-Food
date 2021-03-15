import RestaurantPageHeader from '../restaurant-page-header/restaurant-page-header';
import RestaurantCards from '../restarants-cards/restarants-card'

const RestaurantPage = ({data, resId, onAdd}) =>{
    console.log('GOOT', resId)
    return(
        <div className='main'>
            <div className='container'>
                <section className='restaurants'>
                    <RestaurantPageHeader data={data} num={resId}/>
                    <RestaurantCards data={data} num={resId} onAdd={onAdd}/>
                </section>
            </div>
        </div>
    )
};

export default RestaurantPage