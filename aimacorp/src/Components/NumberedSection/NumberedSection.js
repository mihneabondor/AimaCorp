import './NumberedSection.css'

function NumberedSection(props) {
    return(
        <div className='numberedSection'>
            <p className='numberedSection-number'><b>{props.count}</b></p>
            <p>{props.title}</p>
        </div>
    )
}

export default NumberedSection