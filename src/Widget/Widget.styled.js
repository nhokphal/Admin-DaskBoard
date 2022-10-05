import styled from "styled-components";


export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 100px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.29);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.29);
  border-radius: 10px;
`;

export const Left = styled.div`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  gap: 5px;
`;

// left
export const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: purple;
`;
export const Counter = styled.span`
  font-size: 28px;
  font-weight: 300;
`;
export const Link = styled.span`
  font-size: 12px;
  border-bottom: 1px solid;
`;

// right

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  //   to imbed className add "."
  .icon {
    font-size:28px;
    padding: 5px;
    color: red;
    align-self: flex-end;
  }
`;

export const Percentage = styled.div`
  display: flex;

  &.positive {
    color: green;
  }
  &.negative {
    color: red;
  }
`;

