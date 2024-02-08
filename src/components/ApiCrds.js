import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useState } from "react";
import apiService from "./service/apiService";

function ApiCrds() {
  // this state for store whole datas
  const [store, setStore] = useState({});
  // this state for to show image and datas which display when clicked
  const [bigImag, setBigImag] = useState();
  // this state for to show variants image on bigiImag
  const [varImg, setVarImg] = useState();
  //   to set responsemodellist list datas and show images and details in ui
  const [variants, setVariants] = useState();

  // getting (id) from custProd.js using params
  const { productId } = useParams();

  const mainImg = () => {
    // store id from params to product/ api and in get method
    apiService(`product/ ${productId}`, "", "unauthget")
      .then((result) => {
        // store whole data
        setStore(result.data);

        // this for if numberOfVariants is 0 display a variants of images
        if (result.data.numberOfVariants === 0) {
          // pass variantImages data in varImg
          setVarImg(result.data.variantImages);
          //   to show clickable image we use forEach to change original array
          result.data.variantImages.forEach((img) => {
            // if defaultImage (id) is 1 show big image when card is clicked
            if (img.defaultImage === 1) {
              // this for showing big imag when card is clicked
              setBigImag(img.imageURL);
            }
          });
        } else {
          // if numberOfVariants is not 0 call this function
          variantShow();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const variantShow = () => {
    var req = {
      // this id from params
      productId: productId,
      listSize: 10,
      pageNumber: 1,
    };
    apiService("product/variants/list", req, "unauthpost")
      .then((result) => {
        setVariants(result.data.responseModelList);
        result.data.responseModelList.forEach((values) => {
          // if defaultVariant is 1 (there is variant of images in this)
          if (values.defaultVariant === 1) {
            // pass variantImages data in varImg to show ui for variant products for having variant image cards
            setVarImg(values.variantImages);
            values.variantImages.forEach((val) => {
              // if defaultImage is 1 pass imageURL to bigImag (main image)
              if (val.defaultImage === 1) {
                setBigImag(val.imageURL);
                val.imageURL = values.imageURL;
              }
            });
          }
           //    mapping variant images to show all datas
          values.variantImages.forEach((val) => {
            // if defaultImage is 1
            if (val.defaultImage === 1) {
              values.imageURL = val.imageURL;
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // create one function for show and change variants
  const clickedImages = (img) => {
    // pass data to varImg
    setVarImg(img.variantImages);
    // map img.variantImages
    img.variantImages.forEach((items) => {
      // if defaultImage 1 pass datas to bigImg(mainimg)
      if (items.defaultImage === 1) {
        setBigImag(items.imageURL);
      }
    });
  };
  useEffect(() => {
    mainImg();
  }, []);

  useEffect(() => {
    variantShow();
  }, []);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={12} md={6} lg={6}>
          {bigImag ? (
            <>
              <img
                src={bigImag}
                alt="products"
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </>
          ) : (
            <p>loading</p>
          )}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {varImg &&
              varImg.map((a, i) => {
                return (
                  <div key={i}>
                    <img
                      src={a.imageURL}
                      alt="var"
                      //   to show variant images in bigimage when click
                      onClick={() => setBigImag(a.imageURL)}
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        height: "200px",
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Buy Now
            </Button>
            <Button size="small" variant="contained">
              Add to Cart
            </Button>
          </CardActions>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {variants &&
              variants.map((a, i) => {
                return (
                  <div onClick={() => clickedImages(a)} key={i}>
                    <img
                      src={a.imageURL}
                      alt="variants"
                      style={{ width: "100%", maxWidth: "100px" }}
                    />
                  </div>
                );
              })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ApiCrds;
