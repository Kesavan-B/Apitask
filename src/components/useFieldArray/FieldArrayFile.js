import React, { useEffect, useState } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, FormControl, TextField } from "@mui/material";
import { MdDeleteOutline, MdOutlineAdd } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import apiService from "../service/apiService";

function FieldArrayFile() {
  const [data, setData] = useState([]);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const {
    fields: itemFields,
    append: addItem,
    remove: delItem,
  } = useFieldArray({
    control,
    name: "items",
  });

  useEffect(() => {
    getApis();
  }, []);

  const onSubmit = (formData) => {
    apiService("taData", formData, "unauthpost")
      .then((result) => {
        getApis();
        reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getApis = () => {
    apiService("taData", "", "unauthget")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteItem = (index) => {
    delItem(index);
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };
  if (itemFields.length === 0) {
    addItem();
  }

  return (
    <>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "fixed",
                bottom: "40px",
                right: "40px",
                zIndex: 0,
              }}
            >
              <MdOutlineAdd
                style={{
                  fontSize: "30px",
                  background: "#36454F",
                  color: "#fff",
                  borderRadius: "20px",
                  padding: "5px",
                }}
                onClick={() => addItem()}
              />
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead sx={{ background: "#36454F" }}>
                <TableRow>
                  <TableCell align="center" sx={{ color: "#fff" }}>
                    S.No
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#fff" }}>
                    Enter Name
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#fff" }}>
                    Enter Email
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#fff" }}>
                    Enter Mobile
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#fff" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemFields &&
                  itemFields.map((item, index) => {
                    return (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        key={item.id}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {`step ${index + 1}`}
                        </TableCell>
                        {/* <TableCell align="right">
                          <FormControl>
                            <Controller
                              name={`items.${index}.Name`}
                              control={control}
                              defaultValue=""
                              rules={{
                                required: "Items required",
                                minLength: {
                                  value: 3,
                                  message: "Max 3 Words",
                                },
                              }}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  size="small"
                                  label="Enter Name.."
                                  type="text"
                                />
                              )}
                            />
                            <p style={{ color: "red", textAlign: "left" }}>
                              {errors.items?.[index]?.Name &&
                                errors.items?.[index]?.Name?.message}
                            </p>
                          </FormControl>
                        
                        </TableCell>

                        <TableCell align="right">
                          <FormControl>
                            <Controller
                              name={`items.${index}.number`}
                              control={control}
                              defaultValue=""
                              rules={{
                                required: "Number is required",
                                minLength: {
                                  value: 10,
                                  message: "Invalid number",
                                },
                                maxLength: {
                                  value: 10,
                                  message: "Invalid number",
                                },
                              }}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  size="small"
                                  label="Enter Number.."
                                  type="number"
                                />
                              )}
                            />
                            <p style={{ color: "red", textAlign: "left" }}>
                              {errors.items?.[index]?.number &&
                                errors.items?.[index]?.number?.message}
                            </p>
                          </FormControl>
                        </TableCell> */}
                        <TableCell align="right">
                          <FormControl>
                            <Controller
                              name={`items.${index}.email`}
                              control={control}
                              defaultValue=""
                              rules={{
                                required: "Email is required",
                                pattern: {
                                  value:
                                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                  message: "Enter valid email",
                                },
                              }}
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  size="small"
                                  label="Enter Email.."
                                  type="email"
                                />
                              )}
                            />
                            <p style={{ color: "red", textAlign: "left" }}>
                              {errors.items?.[index]?.email &&
                                errors.items?.[index]?.email?.message}
                            </p>
                          </FormControl>
                        </TableCell>
                        <TableCell align="center">
                          <button type="submit" style={{ border: "none" }}>
                            <TiTick
                              type="submit"
                              style={{
                                fontSize: "22px",
                                color: "green",
                                marginLeft: "5px",
                              }}
                            />
                          </button>
                          <MdDeleteOutline
                            onClick={() => delItem(index)}
                            style={{
                              fontSize: "22px",
                              color: "red",
                              marginLeft: "5px",
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </form>
        {/* {data && data.map((a, i) => (
          <ul key={i} style={{ display: "flex" }}>
            <li style={{marginLeft:'10px'}}>{a?.Name}</li>
            <li style={{marginLeft:'10px'}}>{a?.number}</li>
            <li style={{marginLeft:'10px'}}>{a?.email}</li>
            <p>
              {" "}
              <MdDeleteOutline
                onClick={() => deleteItem(i)}
                style={{
                  fontSize: "22px",
                  color: "red",
                  marginLeft: "5px",
                }}
              />
            </p>
          </ul>
        ))} */}
      </Container>
    </>
  );
}

export default FieldArrayFile;
