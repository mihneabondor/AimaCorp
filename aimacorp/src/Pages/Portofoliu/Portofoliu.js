import './Portofoliu.css'

import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Portofoliu() {
    return (
        <div>
            <NavigationBar/>

            <div className='portofoliu-title'>
                <h1><b>Portfolio</b></h1>
                <br/>
                <h4>We invite you to visit our portfolio to discover our innovative and effective projects. We are proud of our results and are sure they will impress you!</h4>
            </div>

            <Container>
                <Row className="justify-content-md-center row g-0">
                    <Col sm={4} className='img-hover-zoom'><Image fluid src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01evm9.jpg'/></Col>
                    <Col sm={4} className='img-hover-zoom'><Image fluid src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01excp.jpg'/></Col>
                    <Col sm={4} className='img-hover-zoom'><Image fluid src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01ezo8.jpg'/></Col>
                </Row>
                <Row className="justify-content-md-center row g-0">
                    <Col sm={4} className='img-hover-zoom'><Image fluid src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01f2g8.jpg'/></Col>
                    <Col sm={4} className='img-hover-zoom'><Image fluid src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01fas7.jpg'/></Col>
                    <Col sm={4} className='img-hover-zoom'><Image fluid src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01f5jm.jpg'/></Col>
                </Row>
                <Row className="justify-content-md-center row g-0">
                    <Col sm={4} className='img-hover-zoom'><Image fluid src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01f7j4.jpg'/></Col>
                    <Col sm={4} className='img-hover-zoom'><Image fluid src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01f3kz.jpg'/></Col>
                    <Col sm={4} className='img-hover-zoom'><Image fluid src='https://t5b34d.webwave.dev/lib/t5b34d/unsplash-image-lz01fd3x.jpg'/></Col>
                </Row>
            </Container>

            <br/> <br/>
        </div>
    )
}

export default Portofoliu