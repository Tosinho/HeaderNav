import React from 'react'
import styled from "styled-component"

const Product = () => {
    return (
        <Container>
            <Wrapper>
                <image src={""}/>
                <video src= {""}
                autoPlay={true}
                loop
                muted
                playsInline/>
            </Wrapper>
        </Container>
    )
}

export default Product

const Container = styled.div`
margin-top:40px;
display: grid;
grid-template-columns: repeat(5, minmax (0, 1fr));
grid-gap: 20px;
padding: 20px;
`;

const Wrapper = styled.div`
width: 100%;
height: 250px;
background-color: white;
border-radius: 5px;
border: 2px solid black;
color: black;
transition: all 350ms;
transform: scale(1);
box-shadow: rgb(0 0 0/ 49%) 0px 26px 30px -10px;
position: relative;

img{
    height: 100%;
    width: 100%;
    object-fit: contain;
}
video{
    position: absolute;
    left: 0;
    z-index:100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
}
:hover{
    transform: scale(1.03);
    border:4px solid white;
    cursor: pointer;
    box-shadow: rgb(0 0 0 0 /69%) 0px 26px 30px -10px;

    video{
        opacity: 1;
    }
}
`;