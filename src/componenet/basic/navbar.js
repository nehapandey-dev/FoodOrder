import React from "react";


function Navbar({ filteritem, menuList }) {
    return (
        <>
            <div className="heading">
               <h2 className="heading1">Hunger Foods</h2>
                <h2>Pick your delicious food here 😋</h2>
            </div>

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
