import './PretCard.css'

import { useNavigate } from 'react-router-dom'

function PretCard(props) {
    const nav = useNavigate()
    return (
        <div className='pretcard'>
            <div className='pretcard-header'>
                <h4><b>{props.title}</b></h4>
                <small style={{
                    marginLeft: 'auto',
                    marginRight: '0',
                    background: 'white',
                    padding: '7px 10px 0px 10px',
                    display: props.popular ? 'initial' : 'none'
                }}>Cel mai popular</small>
            </div>
            <br/>
            <b/>
            <p>{props.desc}</p>
            <h2><b> {props.price}</b></h2>
            <hr/>
            <div className='checkmarktext'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='checkmarktext-checkmark'><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <p>{props.text1}</p>
            </div>
            <div className='checkmarktext'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='checkmarktext-checkmark'><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <p>{props.text2}</p>
            </div>
            <div className='checkmarktext'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='checkmarktext-checkmark'><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <p>{props.text3}</p>
            </div>
            <div className='checkmarktext'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='checkmarktext-checkmark'><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <p>{props.text4}</p>
            </div>
            <div className='checkmarktext'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='checkmarktext-checkmark'><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <p>{props.text5}</p>
            </div>

            <button className='pretcard-button' onClick={()=>{nav('/contact')}}>Alege</button>
        </div>
    )
}

export default PretCard