import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import db from "../components/firebase.config";
import { onSnapshot, collection } from "firebase/firestore";

import "../styles/Main/Main.css";
// import jsonData from "../TempData.json";
// import jsonData from "../DBresult.json";

import { SlideCardItem } from "../components/Compo_cards";
import { HotdealsS, HotdealsM } from "../components/Hotdeals";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [carouselData, carouselSetData] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "ScrapingDB"), (snapshot) =>
        setData(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );
  useEffect(
    () =>
      onSnapshot(collection(db, "CarouselDB"), (snapshot) =>
        carouselSetData(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );
  // useEffect(() => {
  //   setData(jsonData.ScrapingDB);
  // }, []);

  return (
    <>
      <main>
        <section>
          <Carousel>
            <Carousel.Item>
              <CarouselDiv>
                {carouselData.slice(0, 1).map((carouselDeal) => {
                  return (
                    <>
                      <CarouselImage
                        className="d-block w-100"
                        src={carouselDeal.ImageSrc}
                        alt="First slide"
                      />
                      <a href={carouselDeal.HotdealHref}>
                        <CarouselLogoImage_1
                          src={carouselDeal.LogoImageSrc}
                          alt="Logo"
                          clWidth={carouselDeal.clWidth}
                          clTop={carouselDeal.clTop}
                          clLeft={carouselDeal.clLeft}
                          clFilter={carouselDeal.clFilter}
                        ></CarouselLogoImage_1>
                      </a>
                      <CarouselSlideCardItem>
                        <SlideCardItem
                          DevName={carouselDeal.DevName}
                          SoftName={carouselDeal.SoftName}
                          AfterCost={carouselDeal.AfterCost}
                          DisRate={carouselDeal.DisRate}
                        ></SlideCardItem>
                      </CarouselSlideCardItem>
                    </>
                  );
                })}
                ;
              </CarouselDiv>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselDiv>
                {carouselData.slice(1, 2).map((carouselDeal) => {
                  return (
                    <>
                      <CarouselImage
                        className="d-block w-100"
                        src={carouselDeal.ImageSrc}
                        alt="First slide"
                      />
                      <a href={carouselDeal.HotdealHref}>
                        <CarouselLogoImage_1
                          src={carouselDeal.LogoImageSrc}
                          alt="Logo"
                          clWidth={carouselDeal.clWidth}
                          clTop={carouselDeal.clTop}
                          clLeft={carouselDeal.clLeft}
                          clFilter={carouselDeal.clFilter}
                        ></CarouselLogoImage_1>
                      </a>
                      <CarouselSlideCardItem>
                        <SlideCardItem
                          DevName={carouselDeal.DevName}
                          SoftName={carouselDeal.SoftName}
                          AfterCost={carouselDeal.AfterCost}
                          DisRate={carouselDeal.DisRate}
                        ></SlideCardItem>
                      </CarouselSlideCardItem>
                    </>
                  );
                })}
                ;
              </CarouselDiv>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselDiv>
                {carouselData.slice(2, 3).map((carouselDeal) => {
                  return (
                    <>
                      <CarouselImage
                        className="d-block w-100"
                        src={carouselDeal.ImageSrc}
                        alt="First slide"
                      />
                      <a href={carouselDeal.HotdealHref}>
                        <CarouselLogoImage_1
                          src={carouselDeal.LogoImageSrc}
                          alt="Logo"
                          clWidth={carouselDeal.clWidth}
                          clTop={carouselDeal.clTop}
                          clLeft={carouselDeal.clLeft}
                          clFilter={carouselDeal.clFilter}
                        ></CarouselLogoImage_1>
                      </a>
                      <CarouselSlideCardItem>
                        <SlideCardItem
                          DevName={carouselDeal.DevName}
                          SoftName={carouselDeal.SoftName}
                          AfterCost={carouselDeal.AfterCost}
                          DisRate={carouselDeal.DisRate}
                        ></SlideCardItem>
                      </CarouselSlideCardItem>
                    </>
                  );
                })}
                ;
              </CarouselDiv>
            </Carousel.Item>
          </Carousel>
        </section>
        <div>
          <section>
            <MediumCardMapTable>
              <tr>
                <MediumCardHeaderTd>할인율 순 핫딜</MediumCardHeaderTd>
                <MediumCardMapMiddleTd></MediumCardMapMiddleTd>
                <MediumCardHeaderTd>가격 순 핫딜</MediumCardHeaderTd>
              </tr>
              <tr>
                <td>
                  {/* <HotdealsM hotdeals={data} order="popularity" /> */}
                  <HotdealsM hotdeals={data} order="HighDisRate" />
                </td>
                <MediumCardMapMiddleTd></MediumCardMapMiddleTd>
                <td>
                  <HotdealsM hotdeals={data} order="LowPrice" />
                </td>
              </tr>
              <tr>
                <MediumCardButtonTd colSpan="3">
                  <MediumCardButtonDiv>
                    <Link to="/hotdeal">
                      <button class="MoreButton">할인율 핫딜 더 보기 →</button>
                    </Link>
                  </MediumCardButtonDiv>
                </MediumCardButtonTd>
                {/* <td></td>
                <MediumCardButtonTd>
                  <MediumCardButtonDiv>
                    <Link to="/hotdeal">
                      <button class="MoreButton">가격 핫딜 더 보기 →</button>
                    </Link>
                  </MediumCardButtonDiv>
                </MediumCardButtonTd> */}
              </tr>
            </MediumCardMapTable>
          </section>
          <section>
            <MediumCardMapTable>
              <tr>
                <MediumCardHeader2Td>최신 순 핫딜</MediumCardHeader2Td>
              </tr>
            </MediumCardMapTable>
            <MediumCardMapTable>
              <tr>
                <td>
                  <HotdealsS hotdeals={data} num={10} />
                </td>
                <MediumCardMapMiddleTd></MediumCardMapMiddleTd>
                <td>
                  <HotdealsS hotdeals={data} num={20} />
                </td>
              </tr>
            </MediumCardMapTable>
          </section>
        </div>
      </main>
      <footer class="footer">...</footer>
    </>
  );
};
const CarouselDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 40vmin;
  max-width: 1919px;
  max-height: 500px;
  overflow: hidden;
  style="cursor: default"
`;
const CarouselImage = styled.img`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CarouselLogoImage = styled.img`
  width: 25%;
  position: absolute;
  top: 35%;
  left: 18%;
`;
const CarouselLogoImage_1 = styled.img`
  width: ${(props) => props.clWidth};
  position: absolute;
  top: ${(props) => props.clTop};
  left: ${(props) => props.clLeft};
  filter: ${(props) => props.clFilter};
`;
const CarouselLogoImage_2 = styled.img`
  width: 10%;
  position: absolute;
  top: 25%;
  left: 30%;
`;
const CarouselLogoImage_3 = styled.img`
  width: 10%;
  position: absolute;
  top: 30%;
  left: 32%;
`;
const CarouselLogoImageInvert = styled.img`
  width: 25%;
  position: absolute;
  top: 35%;
  left: 18%;
  filter: invert(100%);
`;
const CarouselSlideCardItem = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 25%;
  left: 58%;
`;

const MediumCardMapTable = styled.table`
  margin-left: auto;
  margin-right: auto;
`;
const MediumCardHeaderTd = styled.td`
  padding-top: 5%;
  font-family: "BusanBada";
  vertical-align: center;
  text-align: center;
  font-size: 140%;
  padding-bottom: 0.5%;
`;
const MediumCardHeader2Td = styled.td`
  padding-top: 50%;
  font-family: "BusanBada";
  vertical-align: center;
  text-align: center;
  font-size: 140%;
  padding-bottom: 2.5%;
`;
// const MediumCardMapDiv = styled.div`
//   padding-bottom: 4%;
// `;
const MediumCardMapMiddleTd = styled.td`
  width: 5%;
  text-align: center;
`;
const MediumCardButtonDiv = styled.div`
  width: 55%;
  margin-left: auto;
  margin-right: auto;
`;
const MediumCardButtonTd = styled.td`
  font-family: "NanumSquareRound";
  vertical-align: center;
  text-align: center;
`;

export default MainPage;
