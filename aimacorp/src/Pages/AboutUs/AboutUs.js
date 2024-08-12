import './AboutUs.css'

import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import ThreeArrowTexts from '../../Components/ThreeByThreeArrowTexts/ThreeArrowTexts';
import FourReviewStack from '../../Components/FourReviewStack/FourReviewStack';

import {useNavigate} from 'react-router-dom'

function AboutUs() {
    const nav = useNavigate();

    return (
        <div>
            <NavigationBar/>

            <br/> <br/>

            <div className="aboutus-motivatie">
                <img src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01gpvz.jpg' className='aboutus-motivatie-image' alt=''></img>
                <div className='aboutus-motivatie-texts'>
                    <h4><b>My work is not a just a job, it's a passion</b></h4>
                    <br/>
                    <h2><b>Andrei Popescu</b></h2>
                    <br/>
                    <p>I'm the proud owner of an engineering company that specializes in design and consultancy. With a considerable background in engineering and a strong passion for innovative solutions, I proudly lead a team of experimented experts. I am known for my dynamic approach and results-oriented mindset, always striving to provide the highest quality service to my clients. </p>
                    <br/>
                    <button className='aboutus-motivatie-texts-button' onClick={() => {nav('/contact')}}>Contact</button>
                </div>
            </div>

            <br/> <br/>

            <div className='cepotface'>
                <h3 className='cepotface-title'><b>What can I do for you?</b></h3>
                <div className='cepotface-arrowtexts-container'>
                <ThreeArrowTexts
                    text1='Engineering and consultancy'
                    text2='Feasibility studies'
                    text3='Project management'
                />

                <ThreeArrowTexts
                    text1='Energetic efficency'
                    text2='Industrial automatization'
                    text3='Punctual consultancy'
                />

                <ThreeArrowTexts
                    text1='Quality control'
                    text2='Environment protection'
                    text3='Technical support'
                />
                </div>
            </div>

            <div className='reviews'>
                <h3 className='cepotface-title'><b>What does our clients think?</b></h3>
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
            </div>
            

        </div>
    )
}

export default AboutUs;