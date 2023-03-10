import './assets/style.css';
import Router from './Router';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import { getUser } from './reducks/users/selectors';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import { getSubtotal } from './reducks/carts/selectors';

let pageUrl = window.location.toString();

function App() {
    const [showFooter, setShowFooter] = useState(true);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUser(selector);
    const subtotal = getSubtotal(selector);

    useEffect(() => {
        if (pageUrl.includes('shipping') || pageUrl.includes('thankyou')) {
            setShowFooter(false);
        }
        dispatch(fetchUserFromLocalStorage());
    }, []);
    return (
        <>
            <Header />
            <Router />
            {showFooter && <Footer price={subtotal} />}
            </>
    );
}

export default App;
