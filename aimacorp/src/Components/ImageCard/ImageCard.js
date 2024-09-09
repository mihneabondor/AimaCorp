import './ImageCard.css'

function ImageCard(props) {
    return(
        <div className='imageCard'>
            <img src={props.image} alt='' style={{width: '120%'}}/>
            <br/>
            <h4><b>{props.title}</b></h4>
            <p>{props.desc}</p>
        </div>
    )
}

export default ImageCard