import styled from 'styled-components'
import {NavLink } from "react-router-dom";

export const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    
    border: 1px solid #c7c7c7;
    background-color:#ADC178; 
    color: white;
    padding: 8px 30px 8px 30px;
    border-radius: 3px;

    :hover{
        background-color:#83d813; 
    }

`