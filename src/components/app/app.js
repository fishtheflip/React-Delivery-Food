import Container from '../container/container';
import Main from '../main/main';
import Footer from '../footer/footer';
import data from '../../data/data';
import RestaurantPage from '../restaurant-page/restaurant-page';
import ShoppingBasket from '../shopping-basket/shopping-basket';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
    } from "react-router-dom";
import RawMaterial from '../raw-material/raw-material';
import EmptyShoppingBasket from '../empty-shopping-basket.js/empty-shopping-basket';
import { connect } from 'react-redux';





const App = ({state, addItem, inc, dec}) => {
    console.log(state)
    const itemCount = state.food.length;

    
    return(
        <Router>
            
                <Container counter={itemCount}/>
                <Switch>
                    <Route exact path="/">
                            <Main data={data} /> 
                    </Route>
                    <Route exact path="/shop">
                        <ShoppingBasket shoppingBasketItem={state}/>
                    </Route>
                    <Route exact path="/raw">
                        <RawMaterial/>
                    </Route>
                    <Route exact path="/empty">
                        <EmptyShoppingBasket/>
                    </Route>


                    <Route  path={'/:id'} 
                            render={({match})=>{
                                const {id} = match.params
                                    // console.log(match);
                                    return <RestaurantPage data={data} resId={id} onAdd={addItem}/>
                            }}>
                    </Route>

                    
            </Switch>
            <Footer/>

                
        </Router>
    )
};

const mapStateTOProps = (state) => {
    return {
        state: state
    };
};
const mapDispatchToProps = (dispatch) =>{
    return{
        addItem: (id, title, price) => {
            
            const payload = [id, title, price];
            console.log(payload);
            dispatch({type: 'ADD', payload})
        },
        inc: () => dispatch({type: 'INC_ITEM'}),
        dec: () => dispatch({type: 'DEC_ITEM'}),
        delete_all: () => dispatch({type: 'DELETE_ALL'})
    }
};
export default connect(mapStateTOProps, mapDispatchToProps)(App);
// export default App;