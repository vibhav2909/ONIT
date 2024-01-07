import "./chart.scss"

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Bargraph from "./Bargraph";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from 'recharts';
const data = [
    {
      name: ' January',
      Services:2,
      Cost:200
    },
    {
      name: 'February',
      Services:3,
      Cost:250
    },
    {
      name: 'March',
      Services:1,
      Cost:150
    },
    {
      name: 'April',
      Services:4,
      Cost:570
    },
    {
      name: 'May',
      Services:2,
      Cost:300
    },
    {
      name: 'June',
      Services:3,
      Cost:400
    },
    {
      name: 'July',
      Services:5,
      Cost:450
    },
    {
        name: 'August',
        Services:2,
        Cost:200
      },
      {
        name: 'September',
        Services:4,
        Cost:600
      },
      {
        name: 'October',
        Services:1,
        Cost:200
      },
      {
        name: 'November',
        Services:2,
        Cost:500
      },
      {
        name: 'December',
        Total:1600,
        Cost:1050
      },
  ];
const Chart = () => {
  return (
    <div className="chart">
         <div className="bar">
        <div className="title">Your Costs</div>
       
        <div className="Visit"> NoOfServices
        <FiberManualRecordIcon/></div>
        <div className="Sale"> TotalCost
        <FiberManualRecordIcon/></div>
        <div className="Month"> This Year
        <KeyboardArrowDownIcon/> </div>
        
        </div>
       <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Services" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="rgb(79, 172, 186)" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="rgb(79, 172, 186)" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Cost" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="red" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="red" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Services" stroke="rgb(79, 172, 186)" fillOpacity={1} fill="url(#Services)" />
  <Area type="monotone" dataKey="Cost" stroke="#82ca9d" fillOpacity={1} fill="url(#Cost)" />
</AreaChart>

    </div>
  )
}

export default Chart
