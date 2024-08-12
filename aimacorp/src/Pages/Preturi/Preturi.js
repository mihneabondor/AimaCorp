import './Preturi.css'

import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import PretCard from '../../Components/PretCard/PretCard'

function Preturi() {
    return (
        <div>
            <NavigationBar/>

            <div className='preturi'>
                <h1><b>Prices</b></h1>
                <h4>To learn more about our competitive and transparent rates, we invite you to contact us for a personalized evaluation of your project. We offer quality solutions at affordable prices.</h4>
            </div>

            <div className='preturi-preturi'>
                <PretCard
                    title='Standard'
                    desc='Basic subscription package / $50 per month'
                    price='50'
                    text1='Access to basic tools'
                    text2='Monthly progress reports'
                    text3='Email support'
                    text4='Limited phone support'
                    text5='10% discount on future sales'
                />
                <PretCard
                    title='Pro'
                    desc='Advanced Subscription Package / $100 per month'
                    price='100'
                    popular='true'
                    text1='Acces to advanced design tools'
                    text2='Weekly progress reports'
                    text3='Email and phone support'
                    text4='Priority consultancy scheduling'
                    text5='20% discount on future sales'
                />
                <PretCard
                    title='Premium'
                    desc='Acces to premium tools'
                    price='150'
                    text1='Acces to premium tools'
                    text2='Daily progress reports'
                    text3='Priority email and phone support'
                    text4='Dedicated project manager'
                    text5='30% discount on future sales'
                />
            </div>

            <br/> <br/>
        </div>
    )
}

export default Preturi