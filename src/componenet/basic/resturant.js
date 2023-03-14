import React, { useState } from 'react';
import "./style.css";
import Menu from './menuAPI';
import Menucards from './menucards';
import Navbar from './navbar';

const uniqueList = [...new Set(Menu.map((curElement) => {
    return curElement.category;
})
), "All"];

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filteritem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            //we have to pass return keyword for return all the value
            return
        }
        const updatedList = Menu.filter((curElement) => {
            return curElement.category === category;
        });
        setMenuData(updatedList);
        setMenuList(menuList)
    }
    return (<>
        <Navbar filteritem={filteritem}  menuList={menuList} />
        <Menucards menuData={menuData} /></>
    );
}

export default Resturant;