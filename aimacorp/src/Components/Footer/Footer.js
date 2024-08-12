import './Footer.css'

import {ReactComponent as Logo} from '../../Images/logo.svg';

function Footer() {
    return (
        <div className='footer'>
            <a href='tel:+40731657460'>+40 731 657 460</a>
            <a href='mailto: matei@aimacorp.com'>matei@aimacorp.com</a>
            <Logo className='footer-logo'/>
        </div>
    )
}

export default Footer