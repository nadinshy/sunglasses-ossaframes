import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import Sunglasses from './Sunglasses';


function Shop() {

    const [sunglasses, setSunglasses] = useState(data);
    
    const chosenSunglasses = (searchTerm) => {
        const newSunglasses = data.filter(item => item.searchTerm === searchTerm);
        setSunglasses(newSunglasses);
    }
    return(
        <div>
<div className='brand'>
    <h1>OSSA FRAMES</h1>
</div>
<Buttons filteredSunglasses={chosenSunglasses}/>
<Sunglasses listSunglasses={sunglasses}/>
        </div>
    )
}

export default Shop;