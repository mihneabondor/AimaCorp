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
                    <h2>Excelență în Inginerie </h2>
                    <p>Excelență în inginerie / Partenerul tău pentru soluții inovatoare <br/> și eficiente în inginerie. Bun venit la [Company Name].</p>
                </div>
            </div>

            <br/> <br/>

            <div className='main-oferta-speciala'>
                <h2>Oferta specială pentru tine</h2>
                <br/>
                <div className='main-oferta-speciala-detail'>
                    <p className='main-oferta-speciala-detail-text'>Consultație inițială gratuită: Programați o întâlnire cu echipa noastră de ingineri experimentați pentru a discuta nevoile proiectului dumneavoastră și a primi sfaturi de la experți cu privire la cele mai bune soluții pentru proiectul dumneavoastră de inginerie.</p>
                    <div className="vl" />
                    <p className='main-oferta-speciala-detail-text'>10% reducere la primul proiect: Pentru clienții noi, oferim un discount special la primul proiect cu noi. Profitați de această ofertă cu durată limitată pentru a experimenta serviciile noastre de inginerie de înaltă calitate la un tarif redus.</p>
                </div>
            </div>

            <br/> <br/>

            <div className='main-counting'>
                <CountingCard
                    count='01.'
                    title='Specializare în proiectare'
                    desc='Specializare în proiectare și consultanță / Oferim soluții inovatoare și eficiente pentru clienții noștri.'
                />

                <CountingCard
                    count='02.'
                    title='Pasiune și dedicare'
                    desc='Pasiunare și dedicare / Ne dedicăm cu pasiune fiecărui proiect pe care îl preluăm.'
                />

                <CountingCard
                    count='03.'
                    title='Echipă de profesioniști'
                    desc='Echipă de profesioniști experimentați, oferind servicii de cea mai înaltă calitate.'
                />

                <CountingCard
                    count='04.'
                    title='Abordare dinamică'
                    desc='Abordare dinamică și orientată către rezultate / Suntem recunoscuți pentru abordarea noastră dinamică.'
                />
            </div>

            <div className='motiv-image'>
                <div className='motiv-text'>
                    <h2> <b>De ce să colaborezi cu noi?</b> </h2>
                    <p>Ar trebui să colaborezi pentru că suntem o firmă de inginerie specializată, dedicată și pasionată de fiecare proiect pe care îl preluăm. Oferim soluții inovatoare și eficiente, datorită echipei noastre de profesioniști experimentați. Lucrăm cu determinare și atenție la detalii pentru a asigura succesul fiecărui proiect în parte. Recunoscuți pentru abordarea noastră dinamică și orientată către rezultate, vă garantăm mereu servicii de cea mai înaltă calitate. Cu noi, veți avea parte de experiență, expertiză și profesionalism, care vă vor ajuta să obțineți rezultate remarcabile în proiectele dumneavoastră.</p>
                    <button onClick={() => {nav('/contact')}} className='motiv-button'>Contact</button>
                </div>
            </div>

            <div className='main-procesare'>
                <br/> <br/>
                <h2>Procesare</h2>
                <div className='main-procesare-cards'>
                    <CheckmarkCard
                        title='Primul pas'
                        desc='Contactează-ne cu cerințele și obiectivele proiectului.'
                    />

                    <CheckmarkCard
                        title='Pasul doi'
                        desc='Contactează-ne cu cerințele și obiectivele proiectului.'
                    />

                    <CheckmarkCard
                        title='Pasul trei'
                        desc='Contactează-ne cu cerințele și obiectivele proiectului.'
                    />

                    <CheckmarkCard
                        title='Pasul patru'
                        desc='Contactează-ne cu cerințele și obiectivele proiectului.'
                    />
                </div>
            </div>
        </>
    )
}

export default Main;