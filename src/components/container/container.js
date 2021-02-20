import './container.css';
import Header from '../header/header';

const Container = ({counter}) =>{
    return(
        <div className='container'><Header counter={counter}/></div>
    )
};
export default Container;