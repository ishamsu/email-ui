import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { favEmail } from '../../actions/emailAction';
import { getReadableTimeAndDate } from '../../utils/helperFunctions';
import Avatar from '../avatar/avatar';
import Button from '../button/button';
import "./item-content.css"

const ItemContent = ({content, onClickFavBtn}) => {
    const [btnActive, setBtnActive]= useState(false)
    let fav = useSelector((state) => state.emails.fav);

  

    useEffect(() => {
        console.log("funck",fav)
        fav.forEach((item)=>{
            console.log("funck",item.id,content.id)
            if(item.id==content.id){
                setBtnActive(true)
            }
        })
    }, [fav]);


    return (
        <>
            <div className='item-content'>
                <div className='item-content__wrapper d-flex flex-row mr-1' >
                    <Avatar
                        label={"s"}
                    />
                    <div className='d-flex flex-col ml-1 '>
                        <div className='d-flex flex-row space-between'>
                            <h3 className='mt-1 '>{ content.subject}</h3>
                            <Button
                                label={!btnActive ? "Mark as fovourite" : "Favorited"}
                                btnStyle={!btnActive ? "btn--secondary" : "btn--disable"}
                                onClick={() => {
                                    if(!btnActive){
                                        onClickFavBtn(content.id, btnActive)
                                        setBtnActive(!btnActive)
                                    }
                                   
                                
                                }}
                            />
                        </div>

                        <span className='mb-1'>{getReadableTimeAndDate(content?.date)}</span>
                        <div className='word-break-all item-content__overflow-container' dangerouslySetInnerHTML={{ __html: content.body }} />

                    </div>
                </div>

            </div>
        </>
    )


}
export default ItemContent