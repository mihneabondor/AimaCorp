import './Main.css'

import Navbar from '../../Components/NavigationBar/NavigationBar';
import CheckmarkCard from '../../Components/CheckmarkCard/CheckmarkCard';
import CustomButton from '../../Components/CustomButton/CustomButton';
import ImageCard from '../../Components/ImageCard/ImageCard';
import CustomSubtitle from '../../Components/CustomSubtitle/CustomSubtitle';
import Footer from '../../Components/Footer/Footer';

import {useNavigate} from 'react-router-dom'

function Main() {
    const nav = useNavigate();
    return(
        <>
            <Navbar />

            <div className='main-image'>
                <div className='main-text'>
                    <h1 style={{fontFamily: 'serif'}}><b>MAKE YOUR <br/> DREAMS COME TRUE</b></h1>
                    <br/>
                    <p>Discover customized CAD solutions <br/> for your projects</p>
                    <br/> <br/>
                    <CustomButton
                        title='CONTACT'
                        action={()=>{nav('/contact')}}
                    />
                </div>
            </div>

            <br/> <br/> <br/>

            <div className='main-procesare'>
                <div className='main-procesare-cards'>
                    <CheckmarkCard
                        title='Custom technical consultancy'
                        desc='Our individualized approach ensures perfect solutions for each project'
                    />

                    <CheckmarkCard
                        title='Talented and passionate team'
                        desc='We always strive to focus on your needs'
                    />

                    <CheckmarkCard
                        title='Focus on confidentiality'
                        desc="When it comes to what's important, we put your interests in confidentiality first"
                    />

                    <CheckmarkCard
                        title='Attention to detail and precision'
                        desc='Flawless end result, meeting the high quality standards of the customers.'
                    />
                </div>
            </div>

            <br/> <br/> <br/>

            <div className='main-procesare'>
                <CustomSubtitle
                    title='OUR OFFER'
                />
                <div className='main-procesare-cards' style={{marginTop: '75px'}}>
                    <ImageCard
                        image='https://i.ibb.co/q08Prvg/offer1.png'
                        title='Custom technical consultancy'
                        desc='We offer specialized consultante for a large variety of engineering projects'
                    />
                    <ImageCard
                        image='https://i.ibb.co/LkRsD6Q/offer2.png'
                        title='CAD Designs'
                        desc='Our team offers high quality CAD Designs'
                    />
                    <ImageCard
                        image='https://i.ibb.co/FHP0m2S/offer3.png'
                        title='Innovative solutions for successful projects'
                        desc='We are proud of our ability to deliver custom innovative solutions to each client'
                    />
                </div>
            </div>

            <br/> <br/> <br/>

            <div className='main-image-footer'>
                <div className='main-text-footer'>
                    <h3><b>Questions? Contact us!</b></h3>
                    <br/> <br/>
                    <CustomButton
                        title='CONTACT'
                        action={()=>{nav('/contact')}}
                    />
                </div>
            </div>
            
            <Footer/>
            
        </>
    )
}

export default Main;