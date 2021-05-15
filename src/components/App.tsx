import React from 'react';
import pizzas from '../data/pizza.json';
import Pizza from './Pizza';
import AppCSS from './App.module.css';
import PizzaSVG from '../svg/original.svg';
import Cart from '../components/Cart';
import AppStateProvider from './AppState';
import SpecialOffer from './SpecialOffer';

const App = () => {
    const specialOfferPizza = pizzas.find(x => x.specialOffer);

    return (
        <AppStateProvider>
            <div className={AppCSS.container}>
                <div className={AppCSS.header}>
                    <PizzaSVG width={120} height={120} />
                    <div className={AppCSS.siteTitle}>Delicious Pizza</div>
                    <Cart />
                </div>
                {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
                <ul className={AppCSS.pizzaList}>
                    {pizzas.map((pizza) => {
                        return <Pizza key={pizza.id} pizza={pizza} />;
                    })}
                </ul>
            </div>
        </AppStateProvider>
    );
};

export default App;