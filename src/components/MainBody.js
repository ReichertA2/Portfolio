import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import pic from "../new_pic3.png";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Avatar from "@mui/material/Avatar";

// #background: "#303030"
export default function MainBody() {
  return (
    <Box sx={{ background: "#303030", pt: 10 }}>
      <Card
        sx={{
          mx: 45,
          display: "flex",
          background: "#303030",
          border: "none",
          boxShadow: "none",
        }}
      >
        {/* <CardContent sx={{textAlign: "center"}}> */}
        <CardContent sx={{ width: "56%", margin: "auto" }}>
          {/* <div sx={{display: "inline-block", width:"25%"}}> */}
          <Button sx={{ textAlign: "center", mb: 2 }} variant="contained">
            Full Stack Developer
          </Button>

          <Typography sx={{ fontSize: 35 }} gutterBottom>
            Truth can only be found in one place: <span className="font-semibold opacity-80">the code</span>
          </Typography>
          {/* <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography> */}
          {/* <Typography sx={{ mb: 1.5 }}>adjective</Typography> */}
          <Typography variant="body2" sx={{ width:"55%"}}>
            Hi, I am a Software Developer focused in React-Frontend and
            Flask-Backend utilizing PostgreSQL.
            {/* <br /> */}
          </Typography>
          {/* </div> */}
        </CardContent>
        {/* <CardActions> */}
        {/* <Button size="small">Learn More</Button> */}
        {/* </CardActions> */}
        {/* <div sx={{}}> */}
          {/* <Avatar sx={{ background: "#424242", width: 60, height: 60}}>
      <JavascriptIcon sx={{fontSize:100}}/>
      </Avatar> */}

          <img src={pic} alt={"profile"} width="270px" />
          {/* <Avatar sx={{ background: "#424242", width: 60, height: 60}}>
      <JavascriptIcon sx={{fontSize:100}}/>
      </Avatar> */}
        {/* </div> */}
      </Card>
    </Box>
  );
}
