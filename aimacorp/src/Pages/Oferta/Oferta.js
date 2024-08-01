import './Oferta.css'

import NavigationBar from '../../Components/NavigationBar'
import ThreeArrowTexts from '../../Components/ThreeByThreeArrowTexts/ThreeArrowTexts'
import CheckmarkCard from '../../Components/CheckmarkCard/CheckmarkCard'

import {useNavigate} from 'react-router-dom';

function Oferta() {
    const nav = useNavigate();
    return(
        <div>
            <NavigationBar/>

            <div className='oferta'>
                <h1><b>Our offer</b></h1>
                <br/>
                <h4 className='oferta-descriere'>Introduction: We offer design and engineering consulting services, construction cost optimization, energy efficiency, customized air conditioning systems, construction project management and green technology implementation.</h4>
                <br/>
                <div className='oferta-arrow-container'>
                    <ThreeArrowTexts
                        text1='Design and consulting'
                        text2='Construction consultancy'
                        text3='Efficient electrical design'
                    />
                    <ThreeArrowTexts
                        text1='Energetic efficiency'
                        text2='Air conditioning systems'
                        text3='Project management'
                    />
                    <ThreeArrowTexts
                        text1='Plumbing'
                        text2='Green technologies'
                        text3='Innovative metal designs'
                    />
                </div>

                <div className='oferta-cooperare'>
                    <h2 className='oferta-cooperare-title'><b>How does our cooperation look like?</b></h2>
                    <div className='oferta-cooperare-checkmarks'>
                        <CheckmarkCard
                            title='Establishing common objectives'
                            desc='Establishing common objectives'
                        />

                        <CheckmarkCard
                            title='Efficient communication'
                            desc='Open and honest communication is key.'
                        />

                        <CheckmarkCard
                            title='Sharing responsabilities'
                            desc='Distributing tasks and responsibilities fairly.'
                        />

                        <CheckmarkCard
                            title='Conflict resolution'
                           desc='Approaching conflicts in an optimistic fashion.'
                        />
                    </div>
                </div>

                <br/> <br/>
                <div className='oferta-contact'>
                    <img className='oferta-contact-image' src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01g4w7.jpg' alt=''/>
                    <div className='oferta-contact-container'>
                        <br/>
                        <h3><b>Bet on quality</b></h3>
                        <h4 className='oferta-contact-container-desc'>Bet on high quality! Our team of specialized engineers offers innovative and efficient solutions for every project. Choose success with us!</h4>
                        <br/>
                        <button className='oferta-contact-container-button' onClick={() => {nav('/contact')}}> Contact </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Oferta