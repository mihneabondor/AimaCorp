import './Preturi.css'

import NavigationBar from '../../Components/NavigationBar'
import PretCard from '../../Components/PretCard/PretCard'

function Preturi() {
    return (
        <div>
            <NavigationBar/>

            <div className='preturi'>
                <h1><b>Prețuri</b></h1>
                <h4>Pentru a afla mai multe despre tarifele noastre competitive și transparente, vă invităm să ne contactați pentru o evaluare personalizată a proiectului dumneavoastră. Oferim soluții de calitate la prețuri accesibile.</h4>
            </div>

            <div className='preturi-preturi'>
                <PretCard
                    title='Standard'
                    desc='Pachet de abonament de bază / 50 USD pe lună'
                    price='50'
                    text1='Acces la unelte de proiectare'
                    text2='Rapoarte lunare despre progres'
                    text3='Suport prin e-mail'
                    text4='Suport limitat telefonic'
                    text5='10% discount la viitoare achiziții'
                />
                <PretCard
                    title='Pro'
                    desc='Pachet de abonament de avansat / 100 USD pe lună'
                    price='100'
                    popular='true'
                    text1='Acces la unelte de proiectare'
                    text2='Rapoarte săptămânale despre progres'
                    text3='Suport prin e-mail și telefonic'
                    text4='Programare priotară pentru consultații'
                    text5='20% discount la viitoare achiziții'
                />
                <PretCard
                    title='Premium'
                    desc='Acces la instrumente de proiectare premium'
                    price='150'
                    text1='Acces la unelte premium'
                    text2='Rapoarte zilnice despre progres'
                    text3='Suport prin e-mail și telefonic prioritar'
                    text4='Manager de proiect dedicat'
                    text5='30% discount la viitoare achiziții'
                />
            </div>

            <br/> <br/>
        </div>
    )
}

export default Preturi