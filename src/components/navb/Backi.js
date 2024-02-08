import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link, Routes } from "react-router-dom";

function Backi() {
  return (
    <div className="backs-img">
      <div className="banner-cont">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            sx={{}}
          >
            <Grid item sm={12} md={5} lg={5} sx={{ paddingTop: "90px" }}>
              <div className="fullcont">
                <h1>
                  We articulate goals and set the strategy
                  <br />{" "}
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: "200",
                      color: "whitesmoke",
                    }}
                  >
                    for growing your <br /> business
                  </span>
                </h1>
              </div>
              <div className="fullcont-p">
                <p>
                  {" "}
                  At Telecord we provide industry leading creative & strategic
                  solutions for you
                </p>
              </div>
              <div style={{ paddingBottom: "20px" }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "30px",
                    backgroundColor: "#FF7074",
                    color: "#fff",
                  }}
                >
                  <Link to="/newRoute"> Read More</Link>
                </Button>
              </div>
            </Grid>
            <Grid item sm={12} md={7} lg={7}></Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Backi;
