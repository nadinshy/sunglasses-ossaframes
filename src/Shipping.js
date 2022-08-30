import { useState } from 'react';
import { dataShipping } from './dataShipping';
import image from './image.avif';

function Shipping() {

const [shipping] = useState(dataShipping);
const [showText, setShowText] = useState(false);

const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText (!showText)
}

    return(
        <div>
            <div className='shipping'>
                <h1>Shipping and Delivery</h1>
            </div>

            <div className='shipping'>
            <img src={image} width='350px' alt='shipping'/>
            </div>

            {shipping.map((element => {
                const {id, title, description, showMore} = element;
                return(
                    <div className='shipping-text' key={id}>
                        <div>
                        <h2> {title} </h2>
                    </div>

                   <div>
                    <p>{showMore ? description : description.substring(0,170) + "..."}
                    <button className='button-show' onClick={ () => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
                    </p>
                   </div>
                   </div> 
                )
            }))}
        </div>
    )
}


export default Shipping;