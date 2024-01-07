import "./widget.scss"
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Widget = ({type}) => {
  let data;

  switch (type){
    case "Policies":
      data={
        title: "Policies",
        title1:"Details"
      };
      break;
      case "Social Links ":
      data={
        title: "Social Links ",
        title1:"Instagram..."
      };
      break;
      case "Address":
      data={
        title: "Address",
        title1:"A37 Sec63..."
      };
      break;
      case " Become a Partner":
      data={
        title: " Become a Partner",
        title1:"Details"
      };
      break;
      default:
        break;
        

  }


  return (
    <div className="widget">
         <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.title1}</span>
         
          </div>
         <div className="right">
          <MoreVertIcon/>
         </div>
    </div>
  )
}

export default Widget
