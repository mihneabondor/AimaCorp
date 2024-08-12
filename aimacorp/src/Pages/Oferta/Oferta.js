import './Oferta.css'

import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import Footer from '../../Components/Footer/Footer';
import CustomSubtitle from '../../Components/CustomSubtitle/CustomSubtitle';
import CustomButton from '../../Components/CustomButton/CustomButton';
import NumberedSection from '../../Components/NumberedSection/NumberedSection';

import {useNavigate} from 'react-router-dom';

function Oferta() {
    const nav = useNavigate();
    return(
        <div>
            <NavigationBar/>
            <br/> <br/> <br/>

            <div className="aboutus-motivatie" style={{alignItems: 'stretch', marginRight: '30px'}}>
                <div className='aboutus-motivatie-texts'>
                    <CustomSubtitle
                        title='WHO ARE WE?' />
                    <br/>
                    <p>Aima Innovations provides technical consulting and CAD design for engineering projects. Our dedicated and talented team works to provide customized and innovative solutions, leading clients to achieving their goals and realize their ideas faster and more efficiently. We ensure that each project is carried out with your needs in mind, and a high attention to detail, guaranteeing the highest quality of our services for you. Contact us to find out how we can help you make your dreams come true!</p>
                    <br/> <br/>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px'}} viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        <h4 style={{marginLeft: '10px', marginTop:'10px'}}><b>Cluj-Napoca, Cluj, Romania</b></h4>
                    </div>
                    <br/> <br/>
                    <CustomButton
                        title='RESERVE'
                        action={()=>{nav('/contact')}}
                    />
                </div>
                <img src='https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_24/lzqv993q/element_763/rwdMode_1/626x565/20230828-GraviSub_Variant_2_assembly_v17_2023-Aug-28_05-05-40PM-000_CustomizedView57724694357.webp' className='aboutus-motivatie-image' style={{height: '50vh'}} alt=''></img>
            </div>

            <br/> <br/> <br/>

            <div className='worthit'>
                <CustomSubtitle
                    title='WHY IS IT WORTH IT?'
                />
                <br/> <br/>
                <div className='worthit-numberedSection'>
                    <NumberedSection
                        count='1'
                        title="Precision and accuracy in design, ensuring each project meets the client's specifications and requirements."
                    />
                    <NumberedSection
                        count='2'
                        title="Customized solutions tailored to each client's unique needs and preferences. We don't do it for us, we do it for you."
                    />
                    <NumberedSection
                        count='3'
                        title='Fast delivery times, enabling efficient project completion and prompt delivery of results.'
                    />
                    <NumberedSection
                        count='4'
                        title='Expertise and experience in a variety of industries, guaranteeing high quality design solutions for any project.'
                    />
                </div>
            </div>

            <br/> <br/> <br/>
            <Footer/>
        </div>
    )
}

export default Oferta