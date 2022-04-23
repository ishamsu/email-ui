import React, { useState } from 'react';
import "./button.css"

const Button=({label, btnStyle,onClick})=>{


    return(
    <>
    <button type="button" className={'btn' + " " + btnStyle} onClick={onClick}>{label}</button>

    </>
    )


}
export default Button