import { Container, Grid } from "@mui/material";
import React from "react";
import "./Conten.css";
import { CONIMG } from "../../assests/Imgd";



function Conten() {

  return (
    <div  >
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{margin:'0px auto'}}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div>
              {" "}
              <img src={CONIMG} alt="wrkimg" className="con-img" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="whole-cont">
              <div className="small-tit">
                <span style={{background:'#CBC3E3',padding:'5px 12px',borderRadius:'15px'}}>Lorem</span>
              </div>
              <div className="content">
                <div>
                  <h1><span style={{color:'#7B50D5'}}>We </span> Believe in Ideas That <br/>Create Change</h1>
                  <h5 >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </h5>
                </div>
                
                <div className="cont-para">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. 
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Conten;
