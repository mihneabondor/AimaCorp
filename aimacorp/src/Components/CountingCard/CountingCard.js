import './CountingCard.css';

function CountingCard(props) {
    return(
        <div className='counting-card'>
            <h2 className='margin-bottom-10'><b>{props.count}</b></h2>
            <h4 className='margin-bottom-10'><b>{props.title}</b></h4>
            <p className='margin-bottom-10'>{props.desc}</p>
        </div>
    )
}

export default CountingCard