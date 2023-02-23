import React from "react";
import Cartbtn from "./Cartbtn";

function Navbar({ filteritem, menuList }) {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {menuList.map((curElement) => {
                        return (
                            <button
                                className="btn-group__item"
                                onClick={() => filteritem(curElement)}
                            >
                                {curElement}
                            </button>
                        );
                    })}
                </div>
                
            </nav>
            
        </>
    );
}

export default Navbar;
