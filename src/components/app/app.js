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





const App = (props) => {
    console.log(props.state.food)
    const itemCount = props.state.food.length;
   
    
    return(
        <Router>
            
                <Container counter={itemCount}/>
                
                <Switch>
                    <Route exact path="/">
                            <Main data={data} /> 
                    </Route>
                    <Route exact path="/shop">
                        <ShoppingBasket />
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
                                    return <RestaurantPage data={data} resId={id} />
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
        addItem: () => dispatch({type: 'ADD'}),
        inc: () => dispatch({type: 'INC_ITEM'}),
        dec: () => dispatch({type: 'DEC_ITEM'})
    }
};
export default connect(mapStateTOProps, mapDispatchToProps)(App);
// export default App;