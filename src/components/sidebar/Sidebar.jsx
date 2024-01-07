import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import WalletIcon from '@mui/icons-material/Wallet';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MessageIcon from '@mui/icons-material/Message';
import ExtensionIcon from '@mui/icons-material/Extension';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HouseIcon from '@mui/icons-material/House';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <HouseIcon/>
            <span classname="logo<">OniT </span>
            </div>
            <hr/>
        <div className="centre">
            <ul>
                <li>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </li>
                
                <li>
                    <CalendarMonthIcon/>
                    <span>Calendar</span>
                </li>
                <li>
                    <MenuBookIcon/>
                    <span>Independent ServiceProvider</span>
                </li>
                <li>
                    <ExtensionIcon/>
                    <span>Service Center</span>
                </li>
                <li>
                    <AttachMoneyIcon/>
                    <span> Subscription</span>
                </li>
               
                <li>
                    <TrendingUpIcon/>
                    <span>Residential Society</span>
                </li>
                <li>
                    <WalletIcon/>
                    <span>Wallet</span>
                </li>
                <li>
                    <PermIdentityIcon/>
                    <span>MyAccount</span>
                </li>


            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
       
            
        </div>
    </div>
  )
}

export default Sidebar
