import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "./components/service/apiService";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { FaCartPlus } from "react-icons/fa";
import "./App.css";
import Loder from "./components/context/Loder";

function GetShowCrd() {
  const [data, setData] = useState({});
  const [currentImage, setCurrentImage] = useState();
  const [variants, setvariants] = useState();
  const [size, setSize] = useState({});
  const [showStock, setShowStock] = useState({});
  const [amountshow, setAmountshow] = useState({});
  const [newImg, setNewImg] = useState([]);

  const { productId } = useParams();

  const oneShow = () => {
    apiService(`product/ ${productId}`, "", "unauthget")
      .then((result) => {
        setData(result.data);

        if (result.data.numberOfVariants === 0) {
          setNewImg(result.data.variantImages);
          result.data.variantImages.forEach((element) => {
            if (element.defaultImage === 1) {
              setCurrentImage(element.imageURL);
            }
          });
        } else {
          onevariants();
        }

        console.log(result, "onecrd");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const onevariants = () => {
    var req = {
      productId: productId,
      listSize: 10,
      pageNumber: 1,
    };
    apiService("product/variants/list", req, "unauthpost")
      .then((result) => {
        setvariants(result.data.responseModelList);
        result.data.responseModelList.forEach((element) => {
          if (element.defaultVariant === 1) {
            setNewImg(element.variantImages);
            element.variantImages.forEach((val) => {
              if (val.defaultImage === 1) {
                setCurrentImage(val.imageURL);
                setSize({ variantsoptions: element.variantsoptions });
                setShowStock({ stock: element.stock });
                setAmountshow({ amount: element.amount });
              }
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleShowed = (data) => {
    setNewImg(data.variantImages);
    data.variantImages.forEach((element) => {
      if (element.defaultImage === 1) {
        setCurrentImage(element.imageURL);
        setSize({ variantsoptions: element.variantsoptions });
        setShowStock({ stock: element.stock });
        setAmountshow({ amount: element.amount });
      }
    });
  };

  useEffect(() => {
    oneShow();
  }, []);
  useEffect(() => {
    onevariants();
  }, []);

  return (
    <div>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={5}
          sx={{ marginTop: "20px" }}
        >
          <Grid item sm={12} md={6} lg={6} sx={{ textAlign: "center" }}>
            {currentImage ? (
              <>
                <img
                  src={currentImage}
                  alt="Itms"
                  className="item-img"
                  style={{ width: "100%", maxWidth: "300px" }}
                />
              </>
            ) : (
              <p>
                <Loder />
              </p>
            )}

            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
              {newImg &&
                newImg.map((val) => {
                  return (
                    <>
                      <CardMedia
                        key={val.id}
                        sx={{ height: 70, width: "100%", maxWidth: "70px" }}
                        image={val?.imageURL}
                        title="Products"
                        // tochange variant images only
                        onClick={() => setCurrentImage(val.imageURL)}
                      />
                      <p>{val.amountshow}</p>
                      <p>{val.stock}</p>
                    </>
                  );
                })}
            </div>
          </Grid>
          <Grid item sm={12} md={6} lg={6} sx={{ paddingTop: 0 }}>
            <div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "gray" }}
              >
                {data.productName}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#32CD30" }}
              >
                ₹{amountshow && amountshow.amount}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ color: "red" }}
              >
                {/* {data.stockAvl} */}
                <p>only {showStock && showStock.stock} items left</p>
              </Typography>
              <Typography
                gutterBottom
                variant="para"
                component="div"
                sx={{ color: "gray" }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                molestiae iste reprehenderit consequatur voluptates? Aperiam ab
                iusto inventore nulla ex eaque aut nemo voluptatem, molestias
                minima! Consequatur sequi nisi quia?
              </Typography>
              <Typography></Typography>
              <Typography gutterBottom variant="body2" component="div">
                Size : {size && size.variantsoptions}
              </Typography>
              <CardActions
                sx={{ display: "flex", justifyContent: "center", padding: 0 }}
              >
                <Button
                  size="large"
                  fullWidth
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
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    backgroundColor: "orangered",
                    "&:hover": {
                      backgroundColor: "orangered",
                    },
                  }}
                >
                  <FaCartPlus style={{ marginRight: "10px" }} /> Add to Cart
                </Button>
              </CardActions>
            </div>
            <div>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                gap="10px"
                sx={{ marginTop: "20px" }}
              >
                {variants &&
                  variants.map((a) => (
                    <Grid item>
                      <div>
                        <Card onClick={() => handleShowed(a)}>
                          <img
                            src={a.imageURL}
                            alt=""
                            style={{ width: "100%", maxWidth: "50px" }}
                          />

                          <div>
                            <p>Stock{a.stock}</p>
                          </div>
                        </Card>
                      </div>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default GetShowCrd;
