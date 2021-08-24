import styled from "styled-components";
import "./Compo_cards.css";

function LargeCardItem({
  Picture,
  Platform,
  DevName,
  SoftName,
  BeforeCost,
  AfterCost,
  DisRate
}) {
  return (
    <LarWrapperDiv>
      <LarWrapperTable>
        <thead>
          <tr>
            <LarSoftImageTd rowSpan="2">
              <LarSoftImage>
                <img
                  src={Picture}
                  alt="MainPicture"
                  width="100%"
                  height="100%"
                ></img>
              </LarSoftImage>
            </LarSoftImageTd>
            <LarDevStringTd>
              <LarDevString>{DevName}</LarDevString>
            </LarDevStringTd>
            <LarCostStringTd>
              <LarBeforeCostString>{BeforeCost}</LarBeforeCostString>
              &nbsp;→&nbsp;
              <LarAfterCostString>{AfterCost}</LarAfterCostString>
            </LarCostStringTd>
            <LarPlatImageTd rowSpan="2">
              <LarPlatImage>
                <img
                  src={Platform}
                  alt="MainPlatform"
                  width="100%"
                  height="100%"
                ></img>
              </LarPlatImage>
            </LarPlatImageTd>
          </tr>
          <tr>
            <LarSoftStringTd>
              <LarSoftString>{SoftName}</LarSoftString>
            </LarSoftStringTd>
            <LarRateStringTd>
              <LarRateString>{DisRate}</LarRateString>
            </LarRateStringTd>
          </tr>
        </thead>
      </LarWrapperTable>
    </LarWrapperDiv>
  );
}

const LarWrapperDiv = styled.article`
  border: 0px solid black;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 170px;
  object-fit: cover;
  border-collapse: collapse;
  background-color: #f0f5f9;
  border-radius: 12px;
`;

const LarWrapperTable = styled.table`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 170px;
`;

const LarSoftImageTd = styled.td`
  width: 20%;
  vertical-align: center;
  text-align: center;
`;

const LarSoftImage = styled.div`
  border: 0px solid black;
  vertical-align: center;
  padding-top: 8.5%;
  padding-bottom: 7%;
  padding-left: 10%;
  padding-right: 10%;
  width: 80%;
`;

const LarDevStringTd = styled.td`
  height: 35%;
  width: 40%;
  font-size: 33px;
  color: #a9abad;
  text-align: left;
  vertical-align: top;
  font-weight: normal;
  font-style: normal;
  padding-top: 1.7%;
`;

const LarDevString = styled.text`
  border: 0px solid black;
  font-weight: normal;
  font-style: normal;
`;

const LarSoftStringTd = styled.td`
  vertical-align: top;
  padding-top: 0.5%;
`;

const LarSoftString = styled.text`
  border: 0px solid black;
  font-weight: 900;
  font-size: 50px;
`;

const LarCostStringTd = styled.td`
  vertical-align: top;
  text-align: right;
  padding-top: 1%;
  font-size: 33px;
  font-weight: bold;
`;

const LarBeforeCostString = styled.text`
  border: 0px solid black;
  text-decoration: line-through;
  color: #f7c9c5;
`;

const LarAfterCostString = styled.text`
  border: 0px solid black;
  padding-right: 9%;
  color: #e74333;
`;

const LarRateStringTd = styled.td`
  vertical-align: top;
  text-align: right;
`;

const LarRateString = styled.text`
  border: 0px solid black;
  padding-right: 9%;
  font-size: 70px;
  font-weight: bold;
  font-style: normal;
`;

const LarPlatImageTd = styled.td`
  width: 12%;
  vertical-align: center;
  padding-left: 2%;
  padding-right: 2%;
`;

const LarPlatImage = styled.div`
  border: 0px solid black;
  text-align: center;
`;

export { LargeCardItem };

function MediumCardItem({
  Picture,
  Platform,
  DevName,
  SoftName,
  BeforeCost,
  AfterCost,
  DisRate
}) {
  return (
    <MedWrapperDiv>
      <MedWrapperTable>
        <thead>
          <tr>
            <MedSoftImageTd rowSpan="4">
              <MedSoftImage>
                <img
                  src={Picture}
                  alt="MainPicture"
                  width="100%"
                  height="100%"
                ></img>
              </MedSoftImage>
            </MedSoftImageTd>
            <MedDevStringTd>
              <MedDevString>{DevName}</MedDevString>
            </MedDevStringTd>
            <MedPlatImageTd rowSpan="2">
              <MedPlatImage>
                <img
                  src={Platform}
                  alt="MainPlatform"
                  width="100%"
                  height="100%"
                ></img>
              </MedPlatImage>
            </MedPlatImageTd>
          </tr>
          <tr>
            <MedSoftStringTd rowSpan="2">
              <MedSoftString>{SoftName}</MedSoftString>
            </MedSoftStringTd>
          </tr>
          <tr>
            <MedRateStringTd rowSpan="2">
              <MedRateString>{DisRate}</MedRateString>
            </MedRateStringTd>
          </tr>
          <tr>
            <MedCostStringTd>
              <MedBeforeCostString>{BeforeCost}</MedBeforeCostString>
              &nbsp;→&nbsp;
              <MedAfterCostString>{AfterCost}</MedAfterCostString>
            </MedCostStringTd>
          </tr>
        </thead>
      </MedWrapperTable>
    </MedWrapperDiv>
  );
}

const MedWrapperDiv = styled.article`
  border: 0px solid black;
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 120px;
  object-fit: cover;
  border-collapse: collapse;
  background-color: #f0f5f9;
  border-radius: 12px;
`;

const MedWrapperTable = styled.table`
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 120px;
`;

const MedSoftImageTd = styled.td`
  width: 32%;
  vertical-align: center;
  text-align: center;
`;

const MedSoftImage = styled.div`
  padding-top: 6%;
  padding-bottom: 3.7%;
  padding-left: 7%;
  width: 85%;
`;

const MedDevStringTd = styled.td`
  height: 30%;
  font-size: 15px;
  color: #a9abad;
  text-align: left;
  vertical-align: bottom;
  font-weight: normal;
  font-style: normal;
  padding-top: 2.5%;
`;

const MedDevString = styled.text`
  border: 0px solid black;
  font-weight: normal;
  font-style: normal;
`;

const MedSoftStringTd = styled.td`
  vertical-align: top;
`;

const MedSoftString = styled.text`
  border: 0px solid black;
  font-weight: 900;
  font-size: 25px;
`;

const MedCostStringTd = styled.td`
  width: 48%;
  vertical-align: bottom;
  padding-bottom: 3%;
  font-weight: bold;
  font-size: 15px;
`;

const MedBeforeCostString = styled.text`
  border: 0px solid black;
  text-decoration: line-through;
  color: #f7c9c5;
`;

const MedAfterCostString = styled.text`
  border: 0px solid black;
  color: #e74333;
`;

const MedPlatImageTd = styled.td`
  width: 20%;
  vertical-align: center;
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 6%;
`;

const MedPlatImage = styled.div`
  border: 0px solid black;
  text-align: center;
`;

const MedRateStringTd = styled.td`
  vertical-align: bottom;
  padding-bottom: 2.2%;
  text-align: center;
`;

const MedRateString = styled.text`
  border: 0px solid black;
  padding-right: 5%;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
`;

export { MediumCardItem };

function SmallCardItem({ Platform, SoftName, BeforeCost, AfterCost }) {
  return (
    <SmaWrapperDiv>
      <SmaWrapperTable>
        <thead>
          <tr>
            <SmaPlatImageTd>
              <SmaPlatImage>
                <img
                  src={Platform}
                  alt="MainPlatform"
                  width="100%"
                  height="100%"
                ></img>
              </SmaPlatImage>
            </SmaPlatImageTd>
            <SmaSoftStringTd>
              <SmaSoftString>{SoftName}</SmaSoftString>
            </SmaSoftStringTd>
            <SmaCostStringTd>
              <SmaBeforeCostString>{BeforeCost}</SmaBeforeCostString>
              &nbsp;→&nbsp;
              <SmaAfterCostString>{AfterCost}</SmaAfterCostString>
            </SmaCostStringTd>
          </tr>
        </thead>
      </SmaWrapperTable>
    </SmaWrapperDiv>
  );
}

const SmaWrapperDiv = styled.article`
  border: 0px solid black;
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 48px;
  object-fit: cover;
  border-collapse: collapse;
  background-color: #f0f5f9;
  border-radius: 12px;
`;

const SmaWrapperTable = styled.table`
  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 48px;
`;

const SmaPlatImageTd = styled.td`
  vertical-align: center;
  width: 11.5%;
  padding-top: 1.7%;
  padding-bottom: 0.9%;
  padding-left: 3%;
  padding-right: 3%;
`;

const SmaPlatImage = styled.div`
  border: 0px solid black;
  font-weight: normal;
  font-style: normal;
`;

const SmaSoftStringTd = styled.td`
  vertical-align: center;
`;

const SmaSoftString = styled.text`
  border: 0px solid black;
  font-weight: 900;
  font-size: 20px;
`;

const SmaCostStringTd = styled.td`
  vertical-align: center;
  text-align: right;
  font-weight: bold;
  font-size: 20px;
  padding-right: 5%;
`;

const SmaBeforeCostString = styled.text`
  border: 0px solid black;
  text-decoration: line-through;
  color: #f7c9c5;
  font-weight: bold;
  font-size: 20px;
`;

const SmaAfterCostString = styled.text`
  border: 0px solid black;
  color: #e74333;
  font-weight: bold;
  font-size: 20px;
`;

export { SmallCardItem };


function SlideCardItem({ DevName, SoftName, AfterCost, DisRate }) {
  return (
    <SliWrapperDiv>
      <SliWrapperTable>
        <thead>
          <tr>
            <SliDevStringTd>
              <SliDevString>{DevName}</SliDevString>
            </SliDevStringTd>
          </tr>
          <tr>
            <SliSoftStringTd>
              <SliSoftString>{SoftName}</SliSoftString>
            </SliSoftStringTd>
          </tr>
          <tr>
            <SliCostStringTd>
              <SliCostString>{AfterCost} KRW</SliCostString>
            </SliCostStringTd>
          </tr>
          <tr>
            <SliRateStringTd>
              <SliRateString>{DisRate}% 할인</SliRateString>
            </SliRateStringTd>
          </tr>
        </thead>
      </SliWrapperTable>
    </SliWrapperDiv>
  );
}

const SliWrapperDiv = styled.article`
  border: 0px solid black;
  width: 100%;
  height: 100%;
  max-width: 17.25vw; //300px
  max-height: 10.8vw; //230px
  object-fit: cover;
  border-collapse: collapse;
`;

const SliWrapperTable = styled.table`
  width: 100%;
  height: 100%;
  max-width: 17.25vw; //300px
  max-height: 10.8vw; //230px
  background-color: rgba( 0, 0, 0, 0.5 );
  border-radius: 12px;
  color: #ffffff;
  box-sizing: border-box;
`;

const SliDevStringTd = styled.td`
text-align: center;
padding-top: 8%; //8%
`;

const SliDevString = styled.text`
border: 0px solid black;
font-size: 1.05vw; //18px
`;

const SliSoftStringTd = styled.td`
text-align: center;
padding-top: 1%; //1%
`;

const SliSoftString = styled.text`
font-weight: 900;
font-size: 1.35vw; //24px
`;

const SliCostStringTd = styled.td`
text-align: center;
padding-top: 8%; //8%
`;

const SliCostString = styled.text`
font-weight: bold;
font-size: 1.2vw; //21px
`;

const SliRateStringTd = styled.td`
text-align: center;
padding-bottom: 4%; //4%
`;

const SliRateString = styled.text`
font-size: 1.05vw; //18px
`;

export { SlideCardItem };
