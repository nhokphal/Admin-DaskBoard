import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "./TableDTB";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  .image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  .tableCell{
    padding: 20px;
    margin: 20px;
    }
  .status {
    
    &.positive {
      color: green;
    }
    &.negative {
      color; red;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const Tables = () => {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <ImageWrapper>
                    <div className="cellWrapper">
                      <img src={row.img} alt="" className="image" />
                      {row.product}
                    </div>
                  </ImageWrapper>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  {/* <Wrapper> */}
                  <span className={`status ${row.status}`}>{row.status}</span>
                  {/* </Wrapper> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
