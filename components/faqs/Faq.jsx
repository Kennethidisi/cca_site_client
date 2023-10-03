import React, { useState } from 'react'
import down from '../../images/arrowDown.png'
import up from '../../images/arrowUp.png'
import './faq.css'

export default function Faq (props) {
    const[showFaq, setShowFaq] = useState(false)
    return(
        <div className="faq_div">
            <span>
                <h4>{props.question}</h4>
                <img src={showFaq? up : down} alt="faqImg" className="arrow" onClick={()=> setShowFaq(!showFaq)}/>
            </span>

            {showFaq &&  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>}
        </div>
    )
}
