import './restarants-card.css';
import RestaurantCard from '../restaurant-card/restaurant-card'

const RestaurantCards = ({data, num, onAdd}) =>{
    // console.log(data);
    const card = data[num].goods.map((item)=>{
        return <RestaurantCard
                key={item.id}
                img={item.img}
                price={item.price}
                title={item.title}
                food={data[0].food}
                id={item.id}
                onAdd={onAdd}
                foodId={item.foodId}

        />
    })
    return(
        <div className='cards'>
            {card}

        </div>
    )
};

export default RestaurantCards;
