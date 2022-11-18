import styled from "styled-components";

export const ImgStyle = styled.div`
max-width: 400px;

min-height: 700px;
max-height: 920px;
background-image: url(${props => props.img});
background-size:cover;
background-position:left;
background-repeat:no-repeat;
`
