import './CustomButton.css'

function CustomButton(props) {
    return(
        <button onClick={() => {props.action()}} variant="dark" className='customButton'><b>{props.title}</b></button>
    )
}

export default CustomButton