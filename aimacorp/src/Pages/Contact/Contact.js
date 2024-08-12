import './Contact.css'

import NavigationBar from '../../Components/NavigationBar/NavigationBar'

function Contact() {
    return (
        <div>
            <NavigationBar/>
            <div className='contact'>
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
            </div>
        </div>
    )
}

export default Contact