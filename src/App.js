import Header from "./parts/Header/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {GlobalStyle} from "./StyledApp";
import ShoppingBasket from "./pages/ShoppingBasket/ShoppingBasket";
import ProductPage from "./pages/ProductPage/ProductPage";
import {useEffect, useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setResize} from "./redux/Slices/UtilsSlice";
import productItemData from './data.json'
import {setProduct} from "./redux/Slices/ProductItemSlice";

function App() {
    const dispatch = useDispatch()
    dispatch(setProduct(productItemData))
    const product = useSelector(state => state.productData.product)

    const scrollHandler = () => {
        if (window.scrollY === 0) {
            dispatch(setResize(false))
        } else {
            dispatch(setResize(true))
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
    },[])

    return (
        <Router>
            <GlobalStyle/>
            <Header/>
            <Route exact path={"/"}>
                <ProductPage {...product}/>
            </Route>
            <Route exact path={"/cart"} component={ShoppingBasket}/>
        </Router>
    );
}

export default App;
