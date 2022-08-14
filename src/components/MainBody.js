import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import pic from "../new_pic3.png";

// #background: "#303030"
export default function MainBody() {
  return (
    <Card  sx={{ mx: 50, mt: 10, display: "flex", background: "#303030", border: "none", boxShadow: "none"  }}>
      {/* <CardContent sx={{textAlign: "center"}}> */}
      <CardContent sx={{ width: "60%" }}>
        {/* <div sx={{display: "inline-block", width:"25%"}}> */}
        <Button sx={{ textAlign: "center", mb: 2 }} variant="contained">
          Full Stack Developer
        </Button>

        <Typography sx={{ fontSize: 35 }} gutterBottom>
          Truth can only be found in one place: the code
        </Typography>
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{/* adjective */}</Typography>
        <Typography variant="body2">
          Hi, I am a Software Developer focused in React-Frontend and
          Flask-Backend utilizing PostgreSQL.
          <br />
        </Typography>
        {/* </div> */}
      </CardContent>
      {/* <CardActions> */}
      {/* <Button size="small">Learn More</Button> */}
      {/* </CardActions> */}
      <div sx={{}}>
        <img src={pic} alt={"profile"} width="270px" />
      </div>
    </Card>
  );
}
