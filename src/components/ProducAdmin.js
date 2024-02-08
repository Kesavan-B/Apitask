import React, { useState, useEffect } from "react";
import Navs from "./navb/Navs";
import { Button,  TextField, Container } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import apiService from "./service/apiService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Loder from "./context/Loder";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function ProducAdmin() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState();

  const { control, handleSubmit, setValue } = useForm();

  useEffect(() => {
    getApi();
    debugger  
  }, []);
  // const onSubmit = (data) => {
  //   console.log(data);
  //   debugger;
  //   apiService("Products", data, "unauthpost")
  //     .then((result) => {
  //       getApi();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const getApi = () => {
  //   setLoading(true);
  //   apiService("Products", "", "unauthget")
  //     .then((result) => {
  //       setData(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };
  const getApi = () => {
    var req = {
      listSize: 5,
      pageNumber: 5,
      showProductImage: 1,
      searchString: "",
      show: "SALEAVAILABLE",
    };
    apiService("product/list", req, "unauthpost")
      .then((result) => {
        setData(result.data.responseModelList);
        console.log(result);

      })
      .catch((err) => {
        console.log(err);
      });
  };
console.log(data);

  // let logoselecetdFile = "";
  // const handleFileUpload = (event) => {
  //   if (event !== null) {
  //     if (event.target === undefined) {
  //       logoselecetdFile = event;
  //     } else {
  //       logoselecetdFile = event.target.files[0];
  //     }
  //     if (logoselecetdFile) {
  //       var reader = new FileReader();
  //       var imagetype = logoselecetdFile.type;
  //       var imagedatatype = imagetype.split("/");
  //       var img_crt_type = imagedatatype[1];
  //       if (
  //         img_crt_type === "jpeg" ||
  //         img_crt_type === "jpg" ||
  //         img_crt_type === "png"
  //       ) {
  //         var fileValue = logoselecetdFile;
  //         reader.readAsDataURL(logoselecetdFile);
  //         reader.onload = () => {
  //           var logourl1 = reader.result;
  //           var spl = logourl1.split(","); // eslint-disable-next-line 
  //           var ImageValue = spl[1];
  //           var img_name = fileValue.name;
  //           debugger;
  //           setValue("imageName", img_name);
  //           setValue("imageURL", logourl1);
  //           debugger;
  //         };
  //       }
  //     }
  //   }
  // };

  return (
    <div>
      <Navs />
  <Container>
  <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                alignItems: "center",
                margin: "30px 0px",
              }}
            >
              <div >
                <h1>
                  {" "}
                  <span style={{ color: "#7B50D5" }}>Upload</span> Products...
                </h1>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
                  size="small"
                  sx={{ background: "#7B50D5", textDecoration: "none" }}
                >
                  Add Products
                </Button>
              </div>
            </div>
      {loading ? (
        <Loder />
      ) : (
        <Container>
          {" "}
       
          <div>
           
            {loading ? (
              <Loder />
            ) : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "800", color: "#7B50D5" }}>
                        ProdName
                      </TableCell>
                      <TableCell sx={{ fontWeight: "800", color: "#7B50D5" }}>
                        Price
                      </TableCell>
                      <TableCell sx={{ fontWeight: "800", color: "#7B50D5" }}>
                        Category
                      </TableCell>
                      <TableCell sx={{ fontWeight: "800", color: "#7B50D5" }}>
                        Image
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data &&
                      data.map((a, i) => (
                        <TableRow
                          key={i}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                          {a.productName}
                          </TableCell>
                          <TableCell>₹{a.salePrice - a.discount}</TableCell>
                          <TableCell>{a.categoryName}</TableCell>
                          <TableCell>{a.brand}</TableCell>
                          
                          <TableCell size="small">
                            <img
                              src={a.imageURL}
                              alt="Prod"
                              style={{ width: "100%", maxWidth: "28px" }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        </Container>
      )}
  </Container>
    </div>
  );
}

export default ProducAdmin;
