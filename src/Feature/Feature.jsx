import { KeyboardArrowUpOutlined, MoreVert } from "@mui/icons-material";
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  flex: 1;
`;

// const Wrapper = styled.div``;

// top
const Top = styled.div`
  // background-color: red;
  padding: 10px;
`;

const TitleTOP = styled.div`
  justify-content: space-between;
  display: flex;
`;

const Features = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 4px;
  -webkit-box-shadow: 5px 14px 16px 20px rgba(0, 0, 0, 0.07);
  box-shadow: 5px 14px 16px 20px rgba(0, 0, 0, 0.07);
`;

//Bottom

const Bottom = styled.div`
  padding: 10px;
  padding: 0;
  margin: auto;
`;

// handle Bottom
const Titles = styled.div`
 margin: auto;
 padding: 0px;
 font-size; 20px;
 font-weight: 300px;
 text-align: center;
`;

const TitlePrice = styled.p`
  font-weight: bold;
`;

const TitleSale = styled.p`
  // color: red;
  color: purple;
  font-weight: 400;
`;

const TitleDesc = styled.p`
  // color: red;
  font-weight: 400;
`;

const FeatureCart = styled.div`
  // background-color: red;
  width: 50%;
  padding: 20px;
  margin: auto;
`;

// summary
const Summary = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Items = styled.div`
  padding: 10px;
`;

const ItemTitle = styled.div`
  font-weight: 500;
`;

const ItemResult = styled.div`
  &.positive {
    color: green;
  }

  &.negative {
    color: red;
  }
`;

const ResultAmount = styled.div``;

export const Feature = () => {
  return (
    <Container>
      {/* <Wrapper> */}
      <Features>
        <Top>
          <TitleTOP>
            Total Revenue
            <MoreVert fontSize="small" />
          </TitleTOP>
        </Top>
        <Bottom>
          <FeatureCart>
            {/* <CircularProgressbar value={70} text={"70%"}/> */}
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          </FeatureCart>
          <Titles>
            <TitleSale>Total sales made today</TitleSale>
            <TitlePrice>20$</TitlePrice>
            <TitleDesc>
              Previous transactions processing. Last payments may not be
              included.
            </TitleDesc>
          </Titles>

          {/* summary  */}
          <Summary>
            <Items>
              <ItemTitle>Target</ItemTitle>
              <ItemResult className="positive">
                <KeyboardArrowUpOutlined fontSize="small" />
                <ResultAmount>$12.4k</ResultAmount>
              </ItemResult>
            </Items>
            <Items>
              <ItemTitle>Last Week</ItemTitle>
              <ItemResult className="positive">
                <KeyboardArrowUpOutlined fontSize="small" />
                <ResultAmount>$12.4k</ResultAmount>
              </ItemResult>
            </Items>
            <Items>
              <ItemTitle>Last Month</ItemTitle>
              <ItemResult className="positive">
                <KeyboardArrowUpOutlined fontSize="small" />
                <ResultAmount>$12.4k</ResultAmount>
              </ItemResult>
            </Items>
          </Summary>
        </Bottom>
      </Features>
      {/* </Wrapper> */}
    </Container>
  );
};
