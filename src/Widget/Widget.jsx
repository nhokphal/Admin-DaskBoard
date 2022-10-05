import styled from "@emotion/styled";
import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOn,
  MonetizationOnOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Container,
  Counter,
  Left,
  Link,
  Percentage,
  Right,
  Title,
} from "./Widget.styled";

export const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 100;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: (
          <PersonOutline
            className="icon"
            style={{
              borderRadius: "30px",
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };

      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              borderRadius: "30px",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View net earning",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{
              borderRadius: "30px",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              borderRadius: "30px",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Container>
      {/* <Wrapper> */}
      {/* left */}
      <Left>
        <Title>{data.title}</Title>
        <Counter>
          {data.isMoney && "$"} {amount}
        </Counter>
        <Link>{data.link}</Link>
      </Left>
      {/* </Wrapper> */}
      <Right>
        <Percentage className="positive">
          {diff}%
          <KeyboardArrowUp />
        </Percentage>
        {data.icon}
      </Right>
    </Container>
  );
};
