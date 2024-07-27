import './Contact.css'

import NavigationBar from '../../Components/NavigationBar'

function Contact() {
    return (
        <div>
            <NavigationBar/>
            <div className='contact'>
                <br/> <br/>
                <h1>Contactează-mă</h1>
                <div className='contact-area'>
                    <div className='contact-area-form'>
                        <form name='contact' netlify method="post" data-netlify="true" onSubmit="submit">
                            <p>Nume</p>
                            <input type="text" name="name" className='contact-area-form-cell'/>
                            <hr/>
                            
                            <p>Adresa ta de e-mail</p>
                            <input type="text" name="email" className='contact-area-form-cell'/>
                            <hr/>

                            <p>Telefon</p>
                            <input type="text" name="phone" className='contact-area-form-cell'/>
                            <hr/>

                            <p>Mesaj</p>
                            <textarea type="text" name="message" className='contact-area-form-cell'/>
                            <hr/>
                            <br/>
                            <input type="submit" value="Trimite" className='contact-area-form-submit'/>
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