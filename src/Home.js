import { useState } from 'react';
import { dataSlides } from './dataSlides';


function Home() {

    const [girl, setGirl] = useState(0);
    const {id, picture} = dataSlides[girl];
    console.log(dataSlides[girl])

    const left = () => {
        setGirl ((girl => {
            girl --;
            if (girl < 0) {
                return dataSlides.length - 1
            }
            return girl;
        }))
    }

    const right = () => {
        setGirl ((girl => {
            girl ++;
            if (girl > dataSlides.length -1) {
                girl = 0;
            }
            return girl;
        }))
    }

    return(
        <div className='slides-container'>
            <div className='btn-slides'>
            <button className='btn-arrow' onClick={left}>⇦</button>
            </div>
        <div className='slides'>
            <img src={picture} width='700px' height='750px' alt='girl'/>
        </div>

        <div className='btn-slides'>
            <button className='btn-arrow' onClick={right}>⇨</button>
        </div>
        </div>
    )
}

export default Home;