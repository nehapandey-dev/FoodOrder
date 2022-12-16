import React, { useState } from 'react';
import "./style.css";
import Menu from './menuAPI';
import Menucards from './menucards';

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const filteritem = (category) => {
        const updatedList = Menu.filter((curElement) => {
            return curElement.category === category;
        });
        setMenuData(updatedList);
    }
    return (<>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={() => filteritem("Breakfast")}>Breakfast</button>
                <button className='btn-group__item' onClick={() => filteritem("Lunch")}>Lunch</button>
                <button className='btn-group__item' onClick={() => filteritem("Evening")}>Evening</button>
                <button className='btn-group__item' onClick={() => filteritem("Dinner")}>Dinner</button>
                <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
            </div>

        </nav>
        <Menucards menuData={menuData} /></>
    );
}

export default Resturant;