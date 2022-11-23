import styled from "styled-components";

export const FilterStyle = styled.div`
background-color: #ece0d9;
min-height: 1080px;
//background: linear-gradient(180deg, rgba(255,255,255,1) 3%, #e6d7ce 15%);
//background: linear-gradient(180deg, rgba(255,255,255,1) 0%, #e6d7ce 100%, #e6d7ce);
//background-color: #fafafa;
border: 1px solid gray;
margin-left:320px;
padding-left: 30px;
div{
    position: fixed;
}
h4{ 
    text-align: center;
    color:#ADC178;
    margin-top: 2rem; 
    margin-bottom: 0.4rem; 
}
small{
    text-align: center;
    display: block;
    margin-bottom: 3rem; 
}
p{ 
    padding-top:10px;
    height: 30px;
    text-align: center;
    width: 180px;
    background-color: #ece0d9;
    font-size: 13px;
}
.diets{
    display: block;
    height: 30px;
    width: 180px;
}


.material-symbols-outlined {
    font-size: larger;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
button{
    background-color: #ece0d9;
    border: 0px;
    border-bottom:1px solid #b8b9b4;

    width: 60px;
    height: 26px;
    margin-bottom:8px;

:hover{
    background-color: #ADC178;
}
}

`