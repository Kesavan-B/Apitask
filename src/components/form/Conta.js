import React, { useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { TACT } from "../../assests/Imgd";
import "./Conta.css";
import apiService from "../service/apiService";

function Conta(props) {
  // eslint-disable-next-line
  const { data, setData } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getApi();
  });
  const onSubmit = (data) => {
    console.log(data);
    apiService("users", data, "unauthpost")
      .then((result) => {
        getApi();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getApi = () => {
    apiService("users", "", "unauthget")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {});
  };

  return (
 <div>
   <div className="back-img"></div>
     <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item sm={12} md={6} lg={6}>
        <div className="Frms">
          <div className="main-frm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="title">
                <h1>
                  <span style={{ color: "#7B50D5" }}>Contact</span> Us...
                </h1>
                <p>Enter your details to register...</p>
              </div>
              <div className="name-div">
                <div className="fields">
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{
                      required: "Enter  Name",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 char",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Name"
                        size="small"
                        type="text"
                        error={Boolean(errors?.firstName?.message)}
                      />
                    )}
                  />
                  {errors?.firstName?.message && (
                    <span className="aler">{errors?.firstName?.message}</span>
                  )}
                </div>
              </div>
              <div className="name-div">
                <div className="fields">
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Enter email",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Enter valid email",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Email"
                        size="small"
                        type="text"
                        error={Boolean(errors?.email?.message)}
                      />
                    )}
                  />
                  {errors?.email?.message && (
                    <span className="aler">{errors?.email?.message}</span>
                  )}
                </div>
                <div className="fields">
                  <Controller
                    fullWidth
                    name="phno"
                    control={control}
                    rules={{
                      required: "Enter Phno Name",
                      minLength: {
                        value: 10,
                        message: "Enter a Valid Number",
                      },
                      maxLength: {
                        value: 10,
                        message: "Max 10 char",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        label="Phone Number"
                        size="small"
                        type="number"
                        error={Boolean(errors?.phno?.message)}
                      />
                    )}
                  />
                  {errors?.phno?.message && (
                    <span className="aler">{errors?.phno?.message}</span>
                  )}
                </div>
              </div>

              <div className="name-div">
                <div className="fields">
                  <Controller
                    fullWidth
                    name="messages"
                    control={control}
                    rules={{
                      required: "Enter message",
                      minLength: {
                        value: 3,
                        message: "Min 3 char",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        {...field}
                        label="message"
                        size="small"
                        type="text"
                        error={Boolean(errors?.messages?.message)}
                      />
                    )}
                  />
                  {errors?.messages?.message && (
                    <span className="aler">{errors?.messages?.message}</span>
                  )}
                </div>
              </div>
              <div className="whole-btn">
                <div className="bt-sub">
                  <Button
                    fullWidth
                    variant="contained"
                    size="small"
                    type="submit"
                    sx={{ background: "#7B50D5", textTransform: "none" }}
                    className="sub-btn"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Grid>
      <Grid item sm={12} md={6} lg={6}>
        <img
          src={TACT}
          alt="aaa"
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </Grid>
    </Grid>
    <div className="back-img"></div>
 </div>
  );
}

export default Conta;
