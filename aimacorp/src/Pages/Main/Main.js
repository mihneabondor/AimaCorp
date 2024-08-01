import './Main.css'

import Navbar from '../../Components/NavigationBar';
import CountingCard from '../../Components/CountingCard/CountingCard';
import CheckmarkCard from '../../Components/CheckmarkCard/CheckmarkCard';

import {useNavigate} from 'react-router-dom'

function Main() {
    const nav = useNavigate();
    return(
        <>
            <Navbar />

            <div className='main-image'>
                <div className='main-text'>
                    <h2>Excellent in engineering </h2>
                    <p>Excellent in engineering / Your partner in innovative <br/> and effective engineering solutions.</p>
                </div>
            </div>

            <br/> <br/>

            <div className='main-oferta-speciala'>
                <h2>Your special offer</h2>
                <br/>
                <div className='main-oferta-speciala-detail'>
                    <p className='main-oferta-speciala-detail-text'>Free Initial Consultation: Schedule a meeting with our team of experienced engineers to discuss your project needs and get expert advice on the best solutions for your engineering project.</p>
                    <div className="vl" />
                    <p className='main-oferta-speciala-detail-text'>10% discount on the first project: For new customers, we offer a special discount on the first project with us. Take advantage of this limited time offer to experience our high quality engineering services at a discounted rate.</p>
                </div>
            </div>

            <br/> <br/>

            <div className='main-counting'>
                <CountingCard
                    count='01.'
                    title='Specialization in design'
                    desc='Specializing in design and consulting / We offer innovative and effective solutions for our clients.'
                />

                <CountingCard
                    count='02.'
                    title='Passion and dedication'
                    desc='Passion and dedication / We dedicate ourselves with passion to every project we take on.'
                />

                <CountingCard
                    count='03.'
                    title='Team of professionals'
                    desc='Team of experienced professionals offering the highest quality service.'
                />

                <CountingCard
                    count='04.'
                    title='Dynamic approach'
                    desc='Dynamic and result-oriented approach / We are recognized for our dynamic approach.'
                />
            </div>

            <div className='motiv-image'>
                <div className='motiv-text'>
                    <h2> <b>Why should you work with us?</b> </h2>
                    <p>You should collaborate because we are a specialist engineering firm, dedicated and passionate about every project we take on. We offer innovative and effective solutions, thanks to our team of experienced professionals. We work with determination and attention to detail to ensure the success of each individual project. Recognized for our dynamic and result-oriented approach, we always guarantee you the highest quality service. With us, you will have experience, expertise and professionalism, which will help you achieve outstanding results in your projects.</p>
                    <button onClick={() => {nav('/contact')}} className='motiv-button'>Contact</button>
                </div>
            </div>

            <div className='main-procesare'>
                <br/> <br/>
                <h2>Processing</h2>
                <div className='main-procesare-cards'>
                    <CheckmarkCard
                        title='First step'
                        desc='Contact us with your project requirements and goals.'
                    />

                    <CheckmarkCard
                        title='Second step'
                        desc='The team will analyze the project and offer solutions.'
                    />

                    <CheckmarkCard
                        title='Third step'
                        desc='Work closely with our experienced professionals.'
                    />

                    <CheckmarkCard
                        title='Fourth step'
                        desc='Get consultancy and innovative designs'
                    />
                </div>
            </div>
        </>
    )
}

export default Main;