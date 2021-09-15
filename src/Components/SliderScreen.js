import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from "Product"
import img from "./Study/images"

const SliderScreen = () => {
const settings = {
dot:true,
Infinite:true,
speed:500,
slidesToshow: 1,
slidetoScroll:1,
autoplay: true,


}

    return (
        <Container>
            <Wrapper>
        <MySlider {...settings}>
          <MyStyled>
            <Sliderimg src= {img}/>
          </MyStyled>
        </MySlider>
            </Wrapper>
        </Container>
    );
};

export default SliderScreen

const Myslider =styled(slider)`
.slick-list{
    overflow: visible;
   margin-top:20px ;

   li.slick-active{
       color: white;
   }
   Button{
       z-index: 1;
   }
}

`



const Sliderimg = styled.img`

width: 100%;
height: 100%;
border-radius: 10px;
object-fit: contain;
overflow: hidden;
z-index: -1;
`


const MyStyled = styled.div`
width: 100%;
height: 285px;
background-color: whitesmoke;
border-radius: 10px;
color: black;
border: 2px solid grey;
transition: all 350ms;

::hover{
    border: 2px solid grey;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(000 / 73%) 0px 16px 10px -10px;
}
`;

const Container= styled.div`
width: 100%;
height: 400px;
padding-top: 80px;
`;
const Wrapper= styled.div`
width: 80%;
margin: 0 auto;
`;