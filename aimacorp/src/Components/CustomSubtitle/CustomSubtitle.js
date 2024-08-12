import './CustomSubtitle.css'

function CustomSubtitle(props) {
    return (
        <div className='customsubtitle'>
            <div className='customsubtitle-line'/>
            <h2 style={{fontFamily: 'serif'}}>
                <b>{props.title}</b>
            </h2>
        </div>
    )
}

export default CustomSubtitle