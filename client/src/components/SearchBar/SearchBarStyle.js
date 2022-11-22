import styled from "styled-components";

export const SearchBarStyle=styled.div`
display: inline-flex;
height: 30px;
width: 250px;
background-color: #6C584C;



input{

::-webkit-search-decoration,
::-webkit-search-cancel-button,
::-webkit-search-results-button,
::-webkit-search-results-decoration { display: none; }
color: white;
//background-color: #fff4db;
background-color: #6C584C;
width: 200px;
border: none;
border-bottom: 2px solid #ADC178;
outline: 0;
overflow-x: hidden;

::placeholder { 
  color: white;
  
}

}
.material-symbols-outlined{
    color: #ADC178;
    :hover{
    color: red;
}
    
}
div{
border-bottom: 2px solid #9BD082;
}
`