import facebook from './facebook.png';
import instagram from './instagram.png';
import email from './email.png';
import contImage from './glasses.avif';



function Contact() {
    return(
        <div>
        <div className="cont-title">
            <h1>CONTACT INFORMATION</h1>
        </div>
        <div className="cont-text">
            <h2>Shop Shop glasses at OSSA FRAMES . Your personal frames hunter. Free priority shipping and free returns on domestic orders from $150.</h2>
        </div>
        <div className="cont-text">
            <p>We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below.</p>
        </div>
        <div className='cont-pic'>
<img src= {contImage } width='100%' alt='cont'/>
        </div>

        <div className="cont-buttons">
            <button className='facebook'><img src={ facebook } alt='facebook'/></button>
            <button className='instagram'><img src={ instagram } alt='instagram'/></button>
            <button className='email'><img src={ email } alt='email'/></button>
        </div>
        </div>
    )
}

export default Contact;