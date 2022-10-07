import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Container, Title, Wrapper } from "./Chart.styled";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

export const Chart = ({ title }) => {
  return (
    <Container>
        {/* <Title>Last 6 Months Chart</Title> */}
        {title}
        <ResponsiveContainer width="100%" aspect={3 / 1} >
          <AreaChart
            width={730}
            height={500}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" stopOpacity={0.8} />
                <stop offset="95%" stopColor="red" stopOpacity={0} />
              </linearGradient>
              {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient> */}
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" className="chartName" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="blue"
              fillOpacity={1}
              fill="url(#Total)"
            />
            {/* <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            /> */}
          </AreaChart>
        </ResponsiveContainer>
    </Container>
  );
};
