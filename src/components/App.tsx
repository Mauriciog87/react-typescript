import React from 'react';
import pizzas from '../data/pizza.json';
import Pizza from './Pizza';
import AppCSS from './App.module.css';
import PizzaSVG from '../svg/original.svg';
import Cart from '../components/Cart';
import AppStateProvider from './AppState';

const App = () => {
    return (
        <AppStateProvider>
            <div className={AppCSS.container}>
                <div className={AppCSS.header}>
                    <PizzaSVG width={120} height={120} />
                    <div className={AppCSS.siteTitle}>Delicious Pizza</div>
                    <Cart />
                </div>
                <ul>
                    {pizzas.map((pizza) => {
                        return <Pizza key={pizza.id} pizza={pizza} />;
                    })}
                </ul>
            </div>
        </AppStateProvider>
    );
};

export default App;