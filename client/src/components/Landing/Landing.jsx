import React from "react";
import { NavLinkStyle } from "./NavLinkStyle";
//import img from '../../img/2222.webp'
import {ImgStyleLand} from './ImgStyleLand'
import {LandingStyle} from './LandingStyle'

export const Landing=()=>{

    return(
    <LandingStyle>
        <div>
        <ImgStyleLand></ImgStyleLand>
        <h1>PROVECHO</h1>
        <p>Healthy Recipes We Made With Love For You</p>
        <NavLinkStyle to={'/home'}>HOME</NavLinkStyle>
        </div>
        <div className="line"></div>
    </LandingStyle>
    )

}