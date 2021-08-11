import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';

import { LargeCardItem } from "../components/Compo_cards";
import { MediumCardItem } from "../components/Compo_cards";
import { SmallCardItem } from "../components/Compo_cards";

function MainPage() {
  return (
  <Carousel>
    <Carousel.Item>
      <CarouselDiv>
      <CarouselImage
        className="d-block w-100"
        src="https://github.com/wncjf2000/RollCakeProject/blob/main/roll-cake/src/image/carousel_1.png?raw=true"
        alt="First slide"
      />
      </CarouselDiv>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselDiv>
      <CarouselImage
        className="d-block w-100"
        src="https://github.com/wncjf2000/RollCakeProject/blob/main/roll-cake/src/image/carousel_2.png?raw=true"
        alt="Second slide"
      />
      </CarouselDiv>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselDiv>
      <CarouselImage
        className="d-block w-100"
        src="https://github.com/wncjf2000/RollCakeProject/blob/main/roll-cake/src/image/carousel_3.png?raw=true"
        alt="Third slide"
      />
      </CarouselDiv>
    </Carousel.Item>
  </Carousel>
  );
}
const CarouselDiv = styled.div`
display: inline-block;
width: 100%;
height: 100%;
max-width: 1919px;
max-height: 500px;
overflow: hidden;
`;
const CarouselImage = styled.img`
display: inline-block;
overflow: hidden;
width: auto;
height: 100%;
object-fit: cover;
`;

export default MainPage;
