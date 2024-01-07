import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const List = () => {
    const rows = [
        {
          id: 1,

          img: "https://content.jdmagicbox.com/comp/hyderabad/n2/040pxx40.xx40.180205210229.f5n2/catalogue/ismail-carpenter-works-asif-nagar-hyderabad-carpenters-tm7sr.jpg?clr=",
          customer: "ABC Company",
        
          amount: 50,
          method: "Carpenter",
          status: "4.5",
          earning: "Rs400",
          visitor: "12hrs",
        },
        {
          id: 2,

          img: "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
          customer: "XYZ Enterprises",

          amount: 90,
          method: "Electrician",
          status: "4.3",
          earning: "Rs500",
          visitor: "6hrs",
        },
        {
          id: 3,

          img: "https://metropha.com/wp-content/uploads/2018/09/Metro-Plumbing-_-6-Characteristics-That-An-Emergency-Plumber-In-Chattanooga-TN-Must-Have.jpg",
          customer: "MNO Limites",

          amount: 35,
          method: "Plumber",
          status: "3.7",
          earning: "Rs300",
          visitor: "24hrs",
        },
        {
          id: 4,

          img: "https://www.neit.edu/wp-content/uploads/2022/03/An-AC-technician-at-work.jpg",
          customer: "PQR Organisation",

          amount: 20,
          method: "AC Services",
          status: "4.0",
          earning: "Rs800",
          visitor: "12hrs",
        },
        {
          id: 5,

          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "JKL Services",

          amount: 70,
          method: "Digital Services",
          status: "4.4",
          earning: "Rs700",
          visitor: "18hrs",
        },
      ];
    
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tablecell"> Id</TableCell>
           <TableCell className="tablecell">Name</TableCell>
           <TableCell className="tablecell"></TableCell>
           <TableCell className="tablecell"> Category</TableCell>
           <TableCell className="tablecell">Sales</TableCell>
           <TableCell className="tablecell">Rating</TableCell>
           <TableCell className="tablecell">Start Price</TableCell>
           <TableCell className="tablecell">Response Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell >
                {row.id}
              </TableCell>
              {/* <TableCell className="tablecell">{row.id}</TableCell> */}
              <TableCell className="tablecell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product} 
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              
              <TableCell className="tablecell">{row.status}
              <StarBorderIcon/></TableCell>
              
              <TableCell className="tablecell">{row.earning}</TableCell>
              <TableCell className="tablecell">{row.visitor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List
