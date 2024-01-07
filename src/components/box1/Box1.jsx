import "./box1.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
//   const data1= [
//     {
//         img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",

//     },
//   ];
  
const Box1 = () => {
  return (
    <div className="x">
        <div className="x1">
         Health Services
        <MoreVertIcon/>
        </div>
   
    {/* <AreaChart
          width={300}
          height={150}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart> */}
        <div className="bottom">
            <div className="pics">
           
        <div className="pic1"><img src="https://img.freepik.com/free-vector/hand-drawn-doctor-cartoon-illustration_23-2150680327.jpg?w=900&t=st=1704627673~exp=1704628273~hmac=f1de91b5c756ea401247f2efc1be644fcce6c1756fa44579fb0b2dbba383cb18" /></div>
        <div className="pic2"><img src="https://www.evolvepsychiatry.com/wp-content/uploads/psychiatrist-2209b.jpg"/></div>
        <div className="pic3"><img src="data:image/jpeg;base64,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"/></div>
        <div className="pic3"><img src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-16400,resizemode-75,msid-92641715/industry/healthcare/biotech/healthcare/care-acquires-indores-specialty-hospital-chl.jpg"/></div>
        </div>
         
        <div className="name">
        <div className="name1">Pediatrician
        <div className="ui">Dr. abc</div>
        
        </div>
        <div className="name2">Psychiatrist
        <div className="ui">Dr. mnp</div></div>
        <div className="name3">Blood Test
        <div className="ui">Dr. Lal Path labs</div></div>
        <div className="name3">Care In Home
        <div className="ui">ABC Hospital</div></div>
            </div>
            
            <div className="money">
        <div className="mo1">Book</div>
        <div className="mo2">One on One</div>
        <div className="mo3">Book Date</div>
        <div className="mo3">Details</div>
            </div>
        </div>
        </div>
  )
}

export default Box1
