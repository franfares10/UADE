import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './views/login';
import Productos from './views/products';

export const RoutesMap = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Login}/>
                <Route path="/products" Component={Productos}/>
            </Routes>
        </Router>
    )
}