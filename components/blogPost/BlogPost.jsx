import React, { useEffect, useState } from 'react'
import './blogPost.css'
import Blog from './blog'
import ceo from './blogImage/profile_img.jpg'


export default function BlogPost() {
    const[value, setValue] = useState(0)

    useEffect(()=>{
        let lastNo = Blog.length - 1

        if(value > lastNo){
            setValue(0)
        }

        if(value < 0){
            setValue(lastNo)
        }

    },[value])


    useEffect(()=>{
        const interval = setInterval(()=>{
            setValue(value + 1)
        },10000)

        return()=>{
            clearInterval(interval)
        }
    },[value])


  return (
    <div className="container_blog">
        {Blog.map((blg, index)=>{
            const{img, id} = blg;
            let myClass = "next_slide"

            if(value === index){
                myClass = "active_slide"
            }

            if(index === value - 1 || (value === 0 && index === Blog.length - 1)){
                myClass = "last_slide"
            }

            return(
                <aside className={myClass} key={id}>
                    <section className='b_post_container'>
                        <div className='img_div'>
                            <img src={img} alt="blogImg" />
                        </div>

                        <div className='blog_post_details'>
                            <h4>Business, Travel <span>- October 5, 2025</span></h4>
                            <h1>Your most unhappy customers are your greatest source of learning.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque nisi doloribus quibusdam quo quam sit provident saepe. Facere molestias quaerat voluptatem delectus fugit dolores optio quibusdam. Voluptatem necessitatibus nisi vitae, similique, laborum voluptate pariatur earum maiores voluptas sint autem!</p>
                            <div className='poster_div'>
                                <img src={ceo} alt="" />
                                <span>
                                    <h5>Musuliu Thompson</h5>
                                    <p>CEO and founder</p>
                                </span>
                            </div>
                        </div>
                    </section>

                    <div className='small_div'>
                        <small onClick={()=> setValue(0)} style={{backgroundColor: index === 0? "darkorange" : "silver"}}></small>
                        <small onClick={()=> setValue(1)} style={{backgroundColor: index === 1? "darkorange" : "silver"}}></small>
                        <small onClick={()=> setValue(2)} style={{backgroundColor: index === 2? "darkorange" : "silver"}}></small>
                        <small onClick={()=> setValue(3)} style={{backgroundColor: index === 3? "darkorange" : "silver"}}></small>
                        <small onClick={()=> setValue(4)} style={{backgroundColor: index === 4? "darkorange" : "silver"}}></small>
                        <small onClick={()=> setValue(5)} style={{backgroundColor: index === 5? "darkorange" : "silver"}}></small>
                    </div>
                </aside>
            )
        })}
    </div>
  )
}
