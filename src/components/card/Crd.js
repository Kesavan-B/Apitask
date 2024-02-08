import React  from "react";
import "./Crd.css";
import { Box, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FaSuitcase } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import { MdOutlineDiamond } from "react-icons/md";


function Crd() {

  return (
    <div className="crd-div" >
      <div className="crd-tit">
      <span style={{background:'#CBC3E3',padding:'5px 12px',borderRadius:'15px'}}>Lorem</span>
        <h2><span style={{color:'#7B50D5'}}>Why</span> Choose Us</h2>
      </div>
      <Container maxWidth="lg">
      <Box className="data-crd">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{margin:'0px auto'}}
        >
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card sx={{ maxWidth:200,height:'200px',borderRadius:'10px'}}>
              <CardActionArea>
              
                <CardContent  className="crd-cont">
                <div className="icn"><FaSuitcase /></div>
                  <Typography gutterBottom variant="h6" component="div">
                    Unique Approach
                  </Typography>
                  <Typography variant="para" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card sx={{ maxWidth:200,height:'200px',borderRadius:'10px'}}>
              <CardActionArea>
              
                <CardContent className="crd-cont">
                <div className="icn"> <FaCrown /></div>
                  <Typography gutterBottom variant="h6" component="div">
                    Great Team
                  </Typography>
                  <Typography variant="para" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card sx={{ maxWidth:200,height:'200px',borderRadius:'10px'}}>
              <CardActionArea>
             
                <CardContent  className="crd-cont">
                <div className="icn"> <MdOutlineDiamond /></div>
                  <Typography gutterBottom variant="h6" component="div">
                    B2B Experience
                  </Typography>
                  <Typography variant="para" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
      </Container>
      
    </div>
  );
}

export default Crd;
