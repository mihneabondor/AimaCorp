import './Portofoliu.css'

import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import Footer from '../../Components/Footer/Footer';
import CustomSubtitle from '../../Components/CustomSubtitle/CustomSubtitle';
import { Gallery } from "react-grid-gallery";
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { useState } from "react";

function Portofoliu() {
    const images = [
        {
           src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/0/CAD_001_V3_Foil_Packaging_2024-Aug-05_11-55-29AM-000_CustomizedView13411161002_jpg.webp",
           width: 711,
           height: 710,
        },
        {
           src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/2/IMG-20240713-WA0015.webp",
           width: 592,
           height: 394,
        },
        {
           src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/1/IMG-20240713-WA0051.webp",
           width: 592,
           height: 394,
        },
        {
        src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/3/IMG-20240713-WA0085.webp",
        width: 800,
        height: 888,
        },
        {
        src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/4/IMG-20240713-WA0065.webp",
        width: 800,
        height: 888,
        },
        {
        src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/5/20230828-GraviSub_Variant_2_assembly_v17_2023-Aug-28_05-05-40PM-000_CustomizedView57724694357.webp",
        width: 800,
        height: 863,
        },
        {
        src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/6/IMG-20240614-WA0050.webp",
        width: 592,
        height: 450,
        },
        {
        src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/8/IMG-20240614-WA0005.webp",
        width: 592,
        height: 394,
        },
        {
        src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/9/Screenshot-2024-06-13-020509.webp",
        width: 592,
        height: 205,
        },
        {
        src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/11/Screenshot-2024-04-03-115827.webp",
        width: 593,
        height: 428,
        },
        {
        src: "https://jqw818.webwave.dev/files/dynamicContent/sites/jqw818/images/ro/webpage_25/lzqv93af/element_767/10/Drone_FramePCB_Design_2024-Jul-31_06-15-08PM-000_CustomizedView1633478139.webp",
        width: 592,
        height: 592,
        },
    ];
    const [index, setIndex] = useState(-1);
    const handleClick = (index, item) => setIndex(index);

    
    return (
        <div>
            <NavigationBar/>

            <br/> <br/> <br/>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '30px',
                marginRight: '30px',
                maxWidth: '800px'
            }}>
                <CustomSubtitle title='PROJECTS' />
                <br/>
                <p>Our impressive portfolio of projects and technical solutions done by me or my team. With the dedication and satisfaction we offer, we are ready to help you turn your dreams into reality. Contact us today to find out how we can work together to make your project a success! </p>
            </div>

            <br/> <br/> <br/>

            <div style={{marginLeft: '30px', marginRight: '30px'}}><Gallery images={images} enableImageSelection={false} thumbnailImageComponent={ImageComponent} rowHeight={360} onClick={handleClick}/></div>
            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />

            <br/> <br/> <br/>
            <Footer/>
        </div>
    )
}

export default Portofoliu