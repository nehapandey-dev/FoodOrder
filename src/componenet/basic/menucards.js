import React from 'react'

const Menucards = ({menuData}) =>{
    
  return (<>
    <section className='main-card-container' ><h2>Order your Delicious food here😋</h2>
    {menuData.map((curElement)=>{
        return(<><div></div>
    <div className='card-container' key={curElement.id}>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-num card-circle subtle'></div>
                    <div className='card-auth substitle'>{curElement.category}</div>
                    <div className='card-desc substitle'>
                        <h1 className='card-title'>{curElement.name}</h1>
                        <h4 >{curElement.description}</h4></div>
                    
                </div>
                <img src={curElement.img} alt="img" className='media'></img>
                <button className="btns" >Order Now</button>
            </div>
        </div>
        </>);
    })}
    </section>
    </>
  );
}

export default Menucards;