import styled from "styled-components";

import logo_Steam from "../image/logo/Steam.png";
import logo_Humble_Bundle from "../image/logo/Humble_Bundle.png";
import logo_GOG from "../image/logo/GOG.png";
import logo_ghd from "../image/logo/GameHotDeal.png";

import "../styles/Compo/Compo_cards.css";

const onHandleClick = (Address) => {
  window.open(Address, "_blank");
};

function LargeCardItem({
  Picture,
  Platform,
  DevName,
  SoftName,
  BeforeCost,
  AfterCost,
  Currency,
  DisRate,
  Address,
}) {
  // const [logo, setLogo] = useState([]);
  var logo;

  switch (Platform) {
    case "Steam":
      logo = logo_Steam;
      break;
    case "HumbleBundle":
      logo = logo_Humble_Bundle;
      break;
    case "GOG":
      logo = logo_GOG;
      break;
    default:
      console.log("Error Platform", Platform);
      logo = logo_ghd;
      break;
  }

  switch (Currency) {
    case "KRW":
      Currency = "₩";
      break;
    case "USD":
      Currency = "$";
      break;
    default:
      console.log("Error,", Currency);
      Currency = "₩";
      break;
  }

  return (
    <LarWrapperDiv onClick={() => onHandleClick(Address)}>
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
              <LarBeforeCostString>
                {Currency}
                {BeforeCost / 100}
              </LarBeforeCostString>
              &nbsp;→&nbsp;
              <LarAfterCostString>
                {Currency}
                {AfterCost / 100}
              </LarAfterCostString>
            </LarCostStringTd>
            <LarPlatImageTd rowSpan="2">
              <LarPlatImage>
                <img
                  src={logo}
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
              <LarRateString>{(DisRate / 100).toFixed(0)}%</LarRateString>
            </LarRateStringTd>
          </tr>
        </thead>
      </LarWrapperTable>
    </LarWrapperDiv>
  );
}

const LarWrapperDiv = styled.article`
  border: 0px solid black;
  width: 100vw;
  height: 100vh;
  max-width: 1200px;
  // max-height: 170px;
  // max-width: 62.5vw;
  max-height: 22vmin;
  object-fit: cover;
  border-collapse: collapse;
  background-color: #f0f5f9;
  border-radius: 12px;
  vertical-align: center;
`;

const LarWrapperTable = styled.table`
  width: 100vw;
  height: 100vh;
  max-width: 1200px;
  max-height: 22vmin; // 170px
  vertical-align: center;
`;

const LarSoftImageTd = styled.td`
  width: 25%; // 20%
  vertical-align: center;
  text-align: center;
`;

const LarSoftImage = styled.div`
  border: 0px solid black;
  vertical-align: center;
  padding-top: 8.5%;
  padding-bottom: 7%;
  padding-left: 5%; // 10%
  padding-right: 7.5%; // 10 %
  // width: 80%;
`;

const LarDevStringTd = styled.td`
  height: 35%;
  width: 40%;
  font-size: 3vmin; // 33px
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
  font-size: 4.6vmin; // 50px
  width: 50vmin; // 550px
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
// 이름 길때 줄임.

const LarCostStringTd = styled.td`
  vertical-align: top;
  text-align: right;
  padding-top: 1%;
  font-size: 3vmin; // 33px
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
  font-size: 6.5vmin; // 70px
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
  Currency,
  DisRate,
  Address,
}) {
  var logo;

  switch (Platform) {
    case "Steam":
      logo = logo_Steam;
      break;
    case "HumbleBundle":
      logo = logo_Humble_Bundle;
      break;
    case "GOG":
      logo = logo_GOG;
      break;
    default:
      console.log("Error Platform", Platform);
      logo = logo_ghd;
      break;
  }

  switch (Currency) {
    case "KRW":
      // console.log("Currency", Currency);
      Currency = "₩";
      break;
    case "USD":
      // console.log("Currency", Currency);
      Currency = "$";
      break;
    default:
      console.log("Error,", Currency);
      Currency = "₩";
      break;
  }

  return (
    <MedWrapperDiv onClick={() => onHandleClick(Address)}>
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
                  src={logo}
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
              <MedRateString>{(DisRate / 100).toFixed(0)}%</MedRateString>
            </MedRateStringTd>
          </tr>
          <tr>
            <MedCostStringTd>
              <MedBeforeCostString>
                {Currency}
                {BeforeCost / 100}
              </MedBeforeCostString>
              &nbsp;→&nbsp;
              <MedAfterCostString>
                {Currency}
                {AfterCost / 100}
              </MedAfterCostString>
            </MedCostStringTd>
          </tr>
        </thead>
      </MedWrapperTable>
    </MedWrapperDiv>
  );
}

const MedWrapperDiv = styled.article`
  border: 0px solid black;
  width: 50vw;
  height: 100vh;
  max-width: 540px; //540px
  max-height: 11vmin; //120px
  object-fit: cover;
  border-collapse: collapse;
  background-color: #f0f5f9;
  border-radius: 12px;
  vertical-align: center;
`;
// 가로 세로를 vw, vh로 변경

const MedWrapperTable = styled.table`
  width: 100%;
  height: 100%;
  max-width: 540px
  max-height: 11vmin; //120px
`;
// 가로 세로를 vw, vh로 변경

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
  // font-size: 15px;
  font-size: 1.4vmin;
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
  // font-size: 25px;
  font-size: 2.3vmin;
  width: 23vmin; // 250px
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
// 이름 길때 줄임.

const MedCostStringTd = styled.td`
  width: 48%;
  vertical-align: bottom;
  padding-bottom: 3%;
  font-weight: bold;
  font-size: 1.4vmin; // 15px
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
  // font-size: 30px;
  font-size: 2.8vmin; // 30px
  font-weight: bold;
  font-style: normal;
`;

export { MediumCardItem };

function SmallCardItem({
  Platform,
  SoftName,
  BeforeCost,
  AfterCost,
  Currency,
  Address,
}) {
  var logo;

  switch (Platform) {
    case "Steam":
      logo = logo_Steam;
      break;
    case "HumbleBundle":
      logo = logo_Humble_Bundle;
      break;
    case "GOG":
      logo = logo_GOG;
      break;
    default:
      console.log("Error Platform", Platform);
      logo = logo_ghd;
      break;
  }

  switch (Currency) {
    case "KRW":
      // console.log("Currency", Currency);
      Currency = "₩";
      break;
    case "USD":
      // console.log("Currency", Currency);
      Currency = "$";
      break;
    default:
      console.log("Error,", Currency);
      Currency = "₩";
      break;
  }

  return (
    <SmaWrapperDiv onClick={() => onHandleClick(Address)}>
      <SmaWrapperTable>
        <thead>
          <tr>
            <SmaPlatImageTd>
              <SmaPlatImage>
                <img
                  src={logo}
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
              <SmaBeforeCostString>
                {Currency}
                {BeforeCost / 100}
              </SmaBeforeCostString>
              &nbsp;→&nbsp;
              <SmaAfterCostString>
                {Currency}
                {AfterCost / 100}
              </SmaAfterCostString>
            </SmaCostStringTd>
          </tr>
        </thead>
      </SmaWrapperTable>
    </SmaWrapperDiv>
  );
}

const SmaWrapperDiv = styled.article`
  border: 0px solid black;
  width: 50vw;
  height: 100vh;
  max-width: 540px; // 540px
  max-height: 4.6vmin; // 50px
  object-fit: cover;
  border-collapse: collapse;
  background-color: #f0f5f9;
  border-radius: 12px;
  vertical-align: center;
`;

const SmaWrapperTable = styled.table`
  width: 100%;
  height: 100%;
  max-width: 540px; // 540px
  max-height: 4.6vmin; // 50px
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
  font-size: 1.852vmin; // 20px
  width: 23vmin; // 248px
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
// 이름 길때 줄임.

const SmaCostStringTd = styled.td`
  vertical-align: center;
  text-align: right;
  font-weight: bold;
  font-size: 1.852vmin; // 20px
  padding-right: 5%;
`;

const SmaBeforeCostString = styled.text`
  border: 0px solid black;
  text-decoration: line-through;
  color: #f7c9c5;
  font-weight: bold;
  font-size: 1.852vmin; // 20px
`;

const SmaAfterCostString = styled.text`
  border: 0px solid black;
  color: #e74333;
  font-weight: bold;
  font-size: 1.852vmin; // 20px
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
              <SliCostString>{AfterCost}</SliCostString>
            </SliCostStringTd>
          </tr>
          <tr>
            <SliRateStringTd>
              <SliRateString>{(DisRate / 100).toFixed(0)}% 할인</SliRateString>
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
  height: 80%;
  max-width: 25vmin; //300px
  max-height: 20vmin; //230px
  object-fit: cover;
  border-collapse: collapse;
`;

const SliWrapperTable = styled.table`
  width: 100%;
  height: 80%;
  max-width: 25vmin; //300px
  max-height: 20vmin; //230px
  background-color: rgba(0, 0, 0, 0.5);
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
