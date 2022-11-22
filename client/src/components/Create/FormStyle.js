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
    font-family:'roboto';
    margin-bottom: 40px;
    width: 400px;
    height: 100px;
    font-size: 14px;
    
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
button{
    border: 1px solid #fda8a8;
    background-color:#f14944;  
    color: white;
    height: 30px;
    width: 130px;
    margin-right: 10px;
    border-radius: 3px;

    :hover{
        background-color:#ff7570;
    }

}
.reset{
    margin-top: 10px;
    border: 1px solid #fda8a8;
    background-color:#f14944;
    color: white;
    height: 30px;
    width: 130px;
    border-radius: 3px;

    :hover{
        background-color:#ff7570; 
    }
}
small{
    color: gray;
}

`