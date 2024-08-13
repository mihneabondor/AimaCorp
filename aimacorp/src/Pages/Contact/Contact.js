import './Contact.css'

import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import Footer from '../../Components/Footer/Footer';
import CustomSubtitle from '../../Components/CustomSubtitle/CustomSubtitle';
import Image from 'react-bootstrap/Image'

function Contact() {
    return (
        <div>
            <NavigationBar/>

            <br/> <br/> <br/>
            
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '30px',
                marginRight: '30px',
                justifyContent: 'space-evenly'
            }}>
                <div>
                    <CustomSubtitle title='CONTACT'/>
                    <p>We'll get back to you as soon as possible :)</p>
                    <form name='contact' netlify method="post" data-netlify="true" onSubmit="submit">
                            <p>Name</p>
                            <input type="text" name="name" className='contact-area-form-cell'/>
                            <hr/>
                            
                            <p>Your email address</p>
                            <input type="text" name="email" className='contact-area-form-cell'/>
                            <hr/>

                            <p>Phone</p>
                            <input type="text" name="phone" className='contact-area-form-cell'/>
                            <hr/>

                            <p>Message</p>
                            <textarea type="text" name="message" className='contact-area-form-cell'/>
                            <hr/>
                            <br/>
                            <input type="submit" value="Send" className='contact-area-form-submit'/>
                            <input type="hidden" name="form-name" value="contact" />
                        </form>
                </div>
                <Image style={{width: "60vw", marginLeft: '60px'}} className='contact-area-image' src='https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_22/lzqv92pa/element_724/rwdMode_1/560x852/IMG-20240713-WA0051.webp'/>
            </div>
            <br/> <br/> <br/>

            <Footer/>
            {/* <div className='contact'>
                <br/> <br/>
                <h1>Contact us</h1>
                <div className='contact-area'>
                    <div className='contact-area-form'>
                        <form name='contact' netlify method="post" data-netlify="true" onSubmit="submit">
                            <p>Name</p>
                            <input type="text" name="name" className='contact-area-form-cell'/>
                            <hr/>
                            
                            <p>Your email address</p>
                            <input type="text" name="email" className='contact-area-form-cell'/>
                            <hr/>

                            <p>Phone</p>
                            <input type="text" name="phone" className='contact-area-form-cell'/>
                            <hr/>

                            <p>Message</p>
                            <textarea type="text" name="message" className='contact-area-form-cell'/>
                            <hr/>
                            <br/>
                            <input type="submit" value="Send" className='contact-area-form-submit'/>
                            <input type="hidden" name="form-name" value="contact" />
                        </form>
                    </div>
                    <img src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01ghaj.jpg' alt='' className='contact-area-image'/>
                </div>
            </div> */}
        </div>
    )
}

export default Contact