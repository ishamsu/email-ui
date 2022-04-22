import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { clearEmailContent, getEmailContent, readMail, updateUnReadMail } from '../../actions/emailAction';
import Avatar from '../avatar/avatar';
import "./list-item.css";
import { useDispatch, useSelector } from "react-redux";
import { getReadableTimeAndDate } from '../../utils/helperFunctions';


const ListItem = ({ onCardClick, data,active,foo }) => {
    const dispatch = useDispatch();


    useEffect(()=>{
        console.log("time",11)
                var elem = document.querySelector(".time");
                console.log("times", elem[0]) 
                elem.classList.add(elem.scrollHeight > 18 ? 'overflows' : null);
    },[])

    return (
        <>
            <div className={active ? " list-item list-item--clicked mt-1" : 'list-item mt-1'} onClick={()=>{
                onCardClick(data?.id);
                console.log("Clicked item", data)
               if(foo!==null){
                dispatch(updateUnReadMail(foo))

               }
               
                if(!active){
                    
                    dispatch(getEmailContent(data?.id, data?.subject, data?.date))
                    dispatch(readMail(data))
                }
                else{
                   
                    dispatch(clearEmailContent(data?.id))
                    dispatch(updateUnReadMail(data?.id))

                }

            }
        }>
                <div className='d-flex flex-row gap-1 list-item__wrapper'>
                    <Avatar
                        label={data?.from?.name.slice(0,1)}
                    />
                    <div className='d-flex flex-col list-item__body'>
                        <div className='word-break-all'>
                        <span>
                            From: <span className='font-700'>{data?.from?.name}</span>
                            <span className='font-700'> 	&lt;{data?.from?.email}&gt;</span>
                        </span>
                        </div>
                        <span style={{ marginTop: "0.4rem" }}>
                            Subject: <span className='font-700'>{data?.subject}</span> 
                        </span>
                        <span className='mt-05 time' >
                            {data?.short_description}
                        </span>
                        <span    style={{ marginTop: "0.4rem" }}>{getReadableTimeAndDate(data?.date)}</span>
                    </div>
                </div>
            </div>

        </>
    )


}
export default ListItem