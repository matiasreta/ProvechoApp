import styled from "styled-components";

export const FormStyle = styled.form`
margin: auto;
display: flex;
flex-flow: column;

h3{
    text-align:center;
    margin-bottom:20px;
    padding-top: 1.6rem;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Lora', serif;
}

div{
    
    margin-bottom: 40px;
    width: 400px;
    height: 100px;
    
}
textarea{
    padding-left:4px;
    padding-top:7px;
    border: 1px solid red;
    background-color: #f5faff;
    font-family:'roboto';
    height: 100%;
    width:100%;
}

`