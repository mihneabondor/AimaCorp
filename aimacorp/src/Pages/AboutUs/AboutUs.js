import './AboutUs.css'

import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import FourReviewStack from '../../Components/FourReviewStack/FourReviewStack';
import CustomSutbtitle from '../../Components/CustomSubtitle/CustomSubtitle';
import Footer from '../../Components/Footer/Footer';

import {useNavigate} from 'react-router-dom'

function AboutUs() {
    const nav = useNavigate();

    return (
        <div>
            <NavigationBar/>

            <br/> <br/> <br/>

            <div className="aboutus-motivatie">
                <div className='aboutus-motivatie-texts'>
                    <CustomSutbtitle
                        title='WHO ARE WE?' />
                    <br/>
                    <p>Aima Innovations provides technical consulting and CAD design for engineering projects. Our dedicated and talented team works to provide customized and innovative solutions, leading clients to achieving their goals and realize their ideas faster and more efficiently. We ensure that each project is carried out with your needs in mind, and a high attention to detail, guaranteeing the highest quality of our services for you. Contact us to find out how we can help you make your dreams come true!</p>
                    <br/>
                </div>
                <img src='https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_21/lzqv8tkl/element_702/rwdMode_1/588x347/1.webp' className='aboutus-motivatie-image' alt=''></img>
            </div>

            <br/> <br/> <br/>

            <div className='cepotface'> </div>

            <br/> <br/> <br/>
            <div className='reviews'>
                <CustomSutbtitle
                    title="OUR CLIENTS' OPINION"
                />
                <FourReviewStack
                    title1='Tech Solutions Co.'
                    review1='We hired this engineering firm for a project and were very impressed with their professionalism and expertise. They delivered innovative solutions and were very attentive to details. We recommend with confidence!'
                    title2='Innovate Engineering Ltd.'
                    review2='Working with this engineering firm was a wonderful experience. They were dedicated, efficient and provided the highest quality service. We will definitely use them for future projects.'
                    title3='Precision Design Inc.'
                    review3='We are very pleased with the work done by this engineering firm. Their dynamic approach and focus on results really sets them apart. The team was experienced and delivered exceptional results.'
                    title4='Futuretech Solutions'
                    review4='We have worked with many engineering firms in the past, but none have impressed us as much as this one. Their passion for each project, attention to detail and high quality service make them stand out. We highly recommend him to anyone in need of engineering services.'
                />
                <br/>
                <br/>
                <br/>
            </div>

            <Footer/>
        </div>
    )
}

export default AboutUs;