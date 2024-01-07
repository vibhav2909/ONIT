import "./query.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };
const Query = () => {
  return (
    <div className="query">
        <div className="Top">
        Booked Services
        <MoreVertIcon/>
        </div>
        <div className="bottom">
            <div className="pics">
           
        <div className="pic1"><img src="https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg" /></div>
        <div className="pic2"><img src="https://www.bhg.com/thmb/MaQDVndcD-FF3qtf9e50rmfVml4=/4000x0/filters:no_upscale():strip_icc()/bhg-modern-kitchen-8RbSHoA8aKT9tEG-DcYr56-039892da05774ea78f8682b3f693bb5d.jpg"/></div>
        <div className="pic3"><img src="https://metropha.com/wp-content/uploads/2018/09/Metro-Plumbing-_-6-Characteristics-That-An-Emergency-Plumber-In-Chattanooga-TN-Must-Have.jpg"/></div>
        <div className="pic3"><img src="https://content.jdmagicbox.com/comp/hyderabad/n2/040pxx40.xx40.180205210229.f5n2/catalogue/ismail-carpenter-works-asif-nagar-hyderabad-carpenters-tm7sr.jpg?clr="/></div>

        </div>
         
        <div className="name">
        <div className="name1">Electrical Services
        <div className="ui">by ABC Company</div>
        
        </div>
        <div className="name2">Kitchen Appliances
        <div className="ui">by XYZ Company</div></div>
        <div className="name3">Plumbing
        <div className="ui">by MNP Company</div></div>
        <div className="name4">Carpenter
        <div className="ui">by PQR Company</div>
        
        </div>
            </div>
            <div className="abc">
            <div className="money">
        <div className="mo1">Cancel/Resechdule</div>
        <div className="mo2">Cancel/Resechdule</div>
        <div className="mo3">Cancel/Resechdule</div>
        <div className="mo4">Cancel/Resechdule</div>
            </div>
            <div className="dec">
        <div className="dec1">Details</div>
        <div className="dec2">Details</div>
        <div className="dec3">Details</div>
        <div className="dec4">Details</div>
            </div>
            </div>
        </div>
    </div>
    
  )
}

export default Query
