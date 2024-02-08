import React, { useState, useEffect } from "react";
import Navs from "./navb/Navs";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import apiService from "./service/apiService";
import { Container, Grid } from "@mui/material";
import { useProgressBar } from "./context/LoadingContext";
import Loder from "./context/Loder";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

function CustProd(props) {
  const [store, setStore] = useState();
  const { loading, setLoading } = useProgressBar();
  const navigate = useNavigate();

  const getApi = () => {
    setLoading(true);
    var req = {
      // listSize: 5,
      // pageNumber: 2,
      showProductImage: 1,
      // searchString: "",
      // show: "SALEAVAILABLE",
    };
    apiService("product/list", req, "unauthpost")
      .then((result) => {
        setStore(result.data.responseModelList);
        console.log(result, "custprod");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleShow = (productId) => {
    navigate(`/getshowcrd/${productId}`);
    console.log(productId);
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <Navs />
      <Container>
        <h1 style={{ color: "#7B50D5", margin: "30px 0px" }}>Products...</h1>
        {loading ? (
          <Loder />
        ) : (
          <div>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
              sx={{ marginTop: "20px" }}
            >
              {store &&
                store.map((p, i) => {
                  return (
                    <Grid item sm={12} md={4} lg={4} key={i}>
                      <Card sx={{ maxWidth: 300, borderRadius: "10px" }}>
                        <CardMedia
                          sx={{ height: 200, width: "100%", maxWidth: "200px" }}
                          image={p.imageURL}
                          alt="asd"
                          title="Products"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            onClick={() => handleShow(p.productId)}
                          >
                            {p.productName}
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ color: "#32CD30" }}
                          >
                            ₹ {p.salePrice - p.discount}
                          </Typography>

                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "red" }}
                          >
                            only {p.stockAvl} items left
                          </Typography>
                        </CardContent>
                        <CardActions
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Button
                            size="medium"
                            variant="contained"
                            sx={{
                              backgroundColor: "orange",
                              "&:hover": {
                                backgroundColor: "orange",
                              },
                            }}
                          >
                            Buy Now
                          </Button>
                          <Button
                            size="medium"
                            variant="contained"
                            sx={{
                              backgroundColor: "orangered",
                              "&:hover": {
                                backgroundColor: "orangered",
                              },
                            }}
                          >
                            <FaCartPlus style={{ marginRight: "10px" }} /> Add
                            to Cart
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        )}
      </Container>
    </div>
  );
}

export default CustProd;
