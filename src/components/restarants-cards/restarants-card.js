import './restarants-card.css';
import RestaurantCard from '../restaurant-card/restaurant-card'

const RestaurantCards = ({data, num}) =>{
    // console.log(data);
    const card = data[num].goods.map((item)=>{
        return <RestaurantCard
                key={item.id}
                img={item.img}
                price={item.price}
                title={item.title}
                food={data[0].food}
                id={item.id}

        />
    })
    return(
        <div className='cards'>
            {card}

        </div>
    )
};

export default RestaurantCards;

// const card = data.map((item)=>{
//     return <Card key={item.id}
//             id={item.id}
//             name={item.name} 
//             stars={item.stars} 
//             minPrice={item.minPrice} 
//             timeDelivery={item.timeDelivery} 
//             food={item.food}
//             img={item.img}/>
// })
// return(
//     <div className="cards">
//         {card}
//     </div>
// )