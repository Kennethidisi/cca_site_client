import React, { useEffect, useState } from 'react'
import './review.css'
import people from './reviewData'
import {FormatQuoteOutlined, StarRate, KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';

export default function Review() {
    const[no, setNo] = useState(0)

    useEffect(()=>{
        let lastNo = people.length - 1

        if(no > lastNo){
            setNo(0)
        }

        if(no < 0){
            setNo(lastNo)
        }

    },[no])


    useEffect(()=>{
        const interval = setInterval(()=>{
            setNo(no + 1)
        },7000)

        return()=>{
            clearInterval(interval)
        }
    },[no])

  return (
    <div className='slider_div'>
        {people.map((person, index)=>{

            const {name, id, quote} = person

            let position = 'nextSlide'

            if(index === no){
                position = 'activeSlide'
            }

            if(index === no-1 || (no === 0 && index === people.length - 1)){
                position = 'lastSlide'
            }

            return (
            <article key={id} className={position}>
                <div className='slider_info'>
                    <FormatQuoteOutlined className='quoteIcon'/>

                    <p className='review_text'>{quote}</p>

                    <span className='stars'>
                        <StarRate className='starIcon'/>
                        <StarRate className='starIcon'/>
                        <StarRate className='starIcon'/>
                        <StarRate className='starIcon'/>
                        <StarRate className='starIcon'/>
                    </span>
                </div>

                <h3 className='r_name'>{name}</h3>
            </article>
        )
        })}

        <button onClick={()=> setNo(no - 1)}><KeyboardArrowLeft className='btn'/></button>

        <button onClick={()=> setNo(no + 1)}><KeyboardArrowRight className='btn'/></button>
    </div>
  )
}
