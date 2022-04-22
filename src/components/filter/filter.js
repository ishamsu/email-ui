import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import "./filter.css"

const Filter = ({item,defaultItem, handleOnClick}) => {
    const [clicked, setClicked] = useState(0)
    useEffect(()=>{
        setClicked(defaultItem)
        const stickyElm = document.querySelector('.filter')
   const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
    {threshold: [1]}
  );

    observer.observe(stickyElm)
    
    // unmount
    return function(){
      observer.unobserve(stickyElm)
    }
       
        
    },[])
       


    return (
        <>
        <div className='filter'>
        <div className='filter__wrapper d-flex flex-row gap-1 y-center'>
                <span>Filter by:</span>
                {item.map((ele)=>{
                    return <>
<Button
                    label={ele}
                    btnStyle={ele !== clicked ? "btn--default" : "btn--primary"}
                    onClick={() => {
                        setClicked(ele)
                        handleOnClick(ele)
                    }}
                />
                    </>
                })}
                
            </div>
        </div>
           


        </>
    )


}
export default Filter