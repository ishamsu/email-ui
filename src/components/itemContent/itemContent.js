import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { favEmail } from '../../actions/emailAction';
import { getReadableTimeAndDate } from '../../utils/helperFunctions';
import Avatar from '../avatar/avatar';
import Button from '../button/button';
import "./item-content.css"

const ItemContent = ({content, onClickFavBtn}) => {
    const [btnActive, setBtnActive]= useState(false)


    return (
        <>
            <div className='item-content'>
                <div className='item-content__wrapper mt-1 d-flex flex-row mr-1' >
                    <Avatar
                        label={"s"}
                    />
                    <div className='d-flex flex-col ml-1 '>
                        <div className='d-flex flex-row space-between'>
                            <h3 className='mt-1 '>{ content.subject}</h3>
                            <Button
                                label={!btnActive ? "Mark as fovourite" : "Favorite"}
                                btnStyle="btn--secondary"
                                onClick={() => {
                                    onClickFavBtn(content.id, btnActive)
                                    setBtnActive(!btnActive)
                                
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