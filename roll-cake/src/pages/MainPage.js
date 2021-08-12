import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';

import { LargeCardItem } from "../components/Compo_cards";
import { MediumCardItem } from "../components/Compo_cards";
import { SmallCardItem } from "../components/Compo_cards";
import { SlideCardItem } from "../components/Compo_cards";

function MainPage() {
  return (
    <>
  <Carousel>
    <Carousel.Item>
      <CarouselDiv>
      <CarouselImage
        className="d-block w-100"
        src="https://github.com/wncjf2000/RollCakeProject/blob/main/roll-cake/src/image/carousel_1.png?raw=true"
        alt="First slide"
      />
      <CarouselSlideCardItem><SlideCardItem
        DevName="CD 프로젝트 레드"
        SoftName="사이버펑크 2077"
        AfterCost="50,000"
        DisRate="25">
      </SlideCardItem></CarouselSlideCardItem>
      </CarouselDiv>
    </Carousel.Item>
    {/*<Carousel.Item>
      <CarouselDiv>
      <CarouselImage
        className="d-block w-100"
        src="https://github.com/wncjf2000/RollCakeProject/blob/main/roll-cake/src/image/carousel_2.png?raw=true"
        alt="Second slide"
      />
      <CarouselSlideCardItem><SlideCardItem
        DevName="EA DICE"
        SoftName="배틀필드 2042"
        AfterCost="100,000"
        DisRate="50">
      </SlideCardItem></CarouselSlideCardItem>
      </CarouselDiv>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselDiv>
      <CarouselImage
        className="d-block w-100"
        src="https://github.com/wncjf2000/RollCakeProject/blob/main/roll-cake/src/image/carousel_3.png?raw=true"
        alt="Third slide"
      />
      <CarouselSlideCardItem><SlideCardItem
        DevName="락스타 게임즈"
        SoftName="레드 데드 리뎀션"
        AfterCost="150,000"
        DisRate="100">
      </SlideCardItem></CarouselSlideCardItem>
      </CarouselDiv>
    </Carousel.Item>*/}
  </Carousel>
  </>
  );
}
const CarouselDiv = styled.div`
display: inline-block;
width: 100%;
height: 40vh;
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
const CarouselSlideCardItem = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 30%;
left: 58%;
`;

export default MainPage;
