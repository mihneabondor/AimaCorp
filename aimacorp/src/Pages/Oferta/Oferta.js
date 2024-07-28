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
                <h1><b>Oferta</b></h1>
                <br/>
                <h4 className='oferta-descriere'>Introducere: Oferim servicii de proiectare și consultanță în inginerie, optimizare a costurilor de construcție, eficiență energetică, sisteme de climatizare personalizate, managementul proiectelor de construcții și implementarea tehnologiilor verzi.</h4>
                <br/>
                <div className='oferta-arrow-container'>
                    <ThreeArrowTexts
                        text1='Proiectare și consultanță'
                        text2='Consultanță în construcție'
                        text3='Proiectare electrice eficiente'
                    />
                    <ThreeArrowTexts
                        text1='Eficiență energetică'
                        text2='Sisteme de climatizare'
                        text3='Managementul proiectelor'
                    />
                    <ThreeArrowTexts
                        text1='Instalații sanitare'
                        text2='Tehnologii verzi'
                        text3='Structuri metalice inovatoare'
                    />
                </div>

                <div className='oferta-cooperare'>
                    <h2 className='oferta-cooperare-title'><b>Cum arată cooperarea?</b></h2>
                    <div className='oferta-cooperare-checkmarks'>
                        <CheckmarkCard
                            title='Stabilirea obiectivelor comune'
                            desc='Stabilirea obiectivelor comune'
                            className='oferta-checkmarkcard'
                        />

                        <CheckmarkCard
                            title='Comunicare eficientă'
                            desc='Comunicare deschisă și onestă este cheia.'
                        />

                        <CheckmarkCard
                            title='Împărțirea responsabilităților'
                            desc='Distribuirea sarcinilor și responsabilităților în mod echitabil.'
                        />

                        <CheckmarkCard
                            title='Rezolvarea Conflictelor'
                            desc='Abordarea conflictelor intr-un mod pozitiv.'
                        />
                    </div>
                </div>

                <br/> <br/>
                <div className='oferta-contact'>
                    <img className='oferta-contact-image' src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01g4w7.jpg' alt=''/>
                    <div className='oferta-contact-container'>
                        <br/>
                        <h3><b>Puneți-vă pariurile pe calitate.</b></h3>
                        <h4 className='oferta-contact-container-desc'>Puneți pariu pe calitatea înaltă! Echipa noastră de ingineri specializați oferă soluții inovatoare și eficiente pentru fiecare proiect. Alegeți succesul cu noi!</h4>
                        <br/>
                        <button className='oferta-contact-container-button' onClick={() => {nav('/contact')}}> Contact </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Oferta