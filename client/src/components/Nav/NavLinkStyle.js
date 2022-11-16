import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyle = styled(NavLink)`
display: inline-flex;
text-decoration: none;
background-color: #ff4545;
height: 30px;
width: 180px;
justify-content: center;
align-items: center;
border-radius: 9px;

:hover{
    color:#e9ec3b;
    background-color: white;
}

`
