import './FourReviewStack.css'

function FourReviewStack(props) {
    return(
        <div className="review-container">
            <div className="box">
                <h3> <b>{props.title1}</b> </h3>
                <br/>
                <p> <i>{props.review1}</i> </p>
                <br/>
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    </div>
            </div>

            <div className="box">
                <h3> <b>{props.title2}</b> </h3>
                <br/>
                <p> <i>{props.review2}</i> </p>
                <br/>
                <div>
                <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
            </div>

            <div className="box">
                <h3> <b>{props.title3}</b> </h3>
                <br/>
                <p> <i>{props.review3}</i> </p>
                <br/>
                <div>
                <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
            </div>

            <div className="box">
                <h3> <b>{props.title4}</b> </h3>
                <br/>
                <p> <i>{props.review4}</i> </p>
                <br/>
                <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
            </div>
        </div>
    )
}

export default FourReviewStack