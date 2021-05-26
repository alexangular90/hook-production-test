import Header from "./parts/Header/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {GlobalStyle} from "./StyledApp";
import ShoppingBasket from "./pages/ShoppingBasket/ShoppingBasket";
import Home from "./pages/Home/Home";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setResize} from "./redux/Slices/UtilsSlice";

function App() {
    const dispatch = useDispatch()

    const scrollHandler = () => {
        const scroll = window.scrollY
        if (scroll === 0) {
            dispatch(setResize(false))
        } else {
            dispatch(setResize(true))
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        // return () => {
        //     document.removeEventListener('scroll', scrollHandler)
        // }
    })

    return (
        <Router>
            <GlobalStyle/>
            <Header/>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/cart"} component={ShoppingBasket}/>
        </Router>
    );
}

export default App;
