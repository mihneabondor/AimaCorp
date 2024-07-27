import './AboutUs.css'

import NavigationBar from '../../Components/NavigationBar'
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
                    <h4><b>Munca mea nu e doar un job, ci și o pasiune.</b></h4>
                    <br/>
                    <h2><b>Andrei Popescu</b></h2>
                    <br/>
                    <p>Sunt mândru proprietar al unei firme de inginerie specializată în design și consultanță. Cu o experiență în inginerie și o pasiune pentru soluții inovatoare, conduc echipa mea de profesioniști experimentați cu determinare și atenție la detalii. Sunt cunoscut pentru abordarea dinamică și mentalitatea orientată către rezultate, întotdeauna străduindu-mă să ofer servicii de cea mai înaltă calitate clienților mei.</p>
                    <br/>
                    <button className='aboutus-motivatie-texts-button' onClick={() => {nav('/contact')}}>Contact</button>
                </div>
            </div>

            <br/> <br/>

            <div className='cepotface'>
                <h3 className='cepotface-title'><b>Ce pot face pentru tine?</b></h3>
                <div className='cepotface-arrowtexts-container'>
                <ThreeArrowTexts
                    text1='Proiectare și consultanță'
                    text2='Studii de fezabilitate'
                    text3='Managementul proiectelor'
                />

                <ThreeArrowTexts
                    text1='Eficiență energetică'
                    text2='Automatizare industrială'
                    text3='Consultanță infrastructurală'
                />

                <ThreeArrowTexts
                    text1='Control de calitate construcții'
                    text2='Protecția mediului'
                    text3='Asistență tehnică'
                />
                </div>
            </div>

            <div className='reviews'>
                <h3 className='cepotface-title'><b>Ce spun clienții despre mine?</b></h3>
                <FourReviewStack
                    title1='Tech Solutions Co.'
                    review1='Am angajat această firmă de inginerie pentru un proiect și am fost foarte impresionați de profesionalismul și expertiza lor. Au livrat soluții inovatoare și au fost foarte atenți la detalii. Recomandăm cu încredere!'
                    title2='Innovate Engineering Ltd.'
                    review2='Lucrul cu această firmă de inginerie a fost o experiență minunată. Au fost dedicați, eficienți și au furnizat servicii de cea mai înaltă calitate. Cu siguranță îi vom folosi pentru proiectele viitoare.'
                    title3='Precision Design Inc.'
                    review3='Suntem foarte multumiți de munca efectuată de această firmă de inginerie. Abordarea lor dinamică și focusul asupra rezultatelor îi diferențiază cu adevărat. Echipa a fost experimentată și a livrat rezultate excepționale.'
                    title4='Futuretech Solutions'
                    review4='Am lucrat cu multe firme de inginerie în trecut, dar niciuna nu ne-a impresionat atât de mult ca aceasta. Pasiunea lor pentru fiecare proiect, atenția la detalii și serviciile de înaltă calitate îi fac să iasă în evidență. Îi recomandăm cu încredere oricui are nevoie de servicii de inginerie.'
                />
            </div>
            

        </div>
    )
}

export default AboutUs;