import styled from 'styled-components'

export const InformationStyle = styled.div`

margin: auto;
width: 1100px;
padding-left:80px;
padding-right:80px;
background-color: aliceblue;
display: grid;
grid-template-columns: 1fr 1fr;

.name{
    grid-column-start:1;
    grid-row-start:1;
    grid-row-end:2;
}


img{
    margin-left:100px;
    max-width: 360px;
    height: 600px;
    object-fit: cover;
    
}
h4{
    font-size: 18px;
    font-weight: 500;
    color: #6b594d;
    margin-bottom: 20px;
}

h1{
    padding-top:20px;
    font-family: 'Lora', serif;
    font-weight: 100;
    font-size: 60px;
    text-align:center;
    margin-bottom: 50px;
}
li{
    margin-top: 20px;
    
}
p{  
    margin-bottom:30px;
    color: white;
    font-weight: 300;
    font-size: 13px;
    margin-right: 4px;
    text-align: center;
    vertical-align: baseline;
    background-color: #ADC178;
    display: inline-block;
    
    padding:6px;
    border-radius: 80px;
}
.comments{
margin-top: 100px;
border: 2px solid #ADC178;
padding: 10px;
grid-column-start:1;
grid-column-end: -1;
margin-bottom: 100px;
}
.instructions{
    grid-column-start:1;
    grid-column-end: -1;
}


`