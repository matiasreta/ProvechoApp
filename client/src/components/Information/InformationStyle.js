import styled from 'styled-components'

export const InformationStyle = styled.div`

margin: auto;
width: 1100px;
padding-left:80px;
background-color: aliceblue;
display: grid;
grid-template-columns: 1fr 1fr;

img{
    margin: auto;
    width: 520px;
    height: 600px;
    object-fit: cover;
    
}


h1{
    font-family: 'Lora', serif;
    font-weight: 100;
    font-size: 60px;
    text-align:center;
}
li{
    margin-bottom: 10px;
}
.comments{
border: 1px solid red;
padding: 10px;
}

`