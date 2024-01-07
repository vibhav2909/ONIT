import "./featured.scss"
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title"> Upcoming Reminders</h1>
        <MoreVertIcon/>
      </div>
      <div className="bottom">

      <div className="featuredChart">
      
            <CircularProgressbar value={70} text={"6days"} strokeWidth={6} />

        </div>
        <div className="down">
        <p className="title">Current Week</p>
        <p className="amount">2000</p>
       <TrendingUpIcon/>
       <KeyboardArrowUpIcon/>
       </div>
       <div className="down">
        <p className="title">Last Week</p>
        <p className="amount">1500</p>
       <TrendingDownIcon/>
       <KeyboardArrowDownIcon/>
       </div>

      </div>
    </div>
  )
}

export default Featured
