import React from 'react'

const Menucards = ({ menuData }) => {

  return (<>
    <section className='main-card-container' >
      {menuData.map((curElement) => {
        const { id, name, price, category, img, description } = curElement;

        return (
          <>

            <div className='card-container' key={id}>
              <div className='card'>
                <div className='card-num card-circle subtle'></div>
                <div className='card-body'>

                  <div className='card-auth substitle'>{category}</div>
                  <div className='card-desc substitle'>
                    <h1 className='card-title'>{name}</h1>
                    <h4 >{description}</h4>
                    <h4 className='price'>Rs {price}.00</h4>
                  </div>
                </div>

                <div>
                  <img src={img} alt="img" className='media'></img>
                </div>
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
