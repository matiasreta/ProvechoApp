import styled from 'styled-components'
import {NavLink } from "react-router-dom";

export const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    
    border: 1px solid #83d813;
    background-color:#67cf70; 
    color: white;
    padding: 8px 30px 8px 30px;
    border-radius: 3px;

    :hover{
        background-color:#83d813; 
    }

`