import '../../Pages/Portofoliu/Portofoliu.css';

function ImageComponent(props) {
    return(
        <div className='img-hover-zoom'><img {...props.imageProps} /></div>
    )
}

export default ImageComponent