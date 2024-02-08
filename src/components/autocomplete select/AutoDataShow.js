import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

const options = [
  {
    name: "Subash",
    email: "Subash.k@amizhth.com",
    address: "Simmakal",
    subject: ["react1", "react2"],
  },
  {
    name: "Ajay",
    email: "deoajay.j@amizhth.com",
    address: "Aarappalayam",
    subject: ["Angular1", "Angular2"],
  },
  {
    name: "Ragul",
    email: "ragul.k@amizhth.com",
    address: "Aarappalayam",
    subject: ["java1", "java2"],
  },
  {
    name: "Raj",
    email: "raj.k@amizhth.com",
    address: "Aarappalayam",
    subject: ["java1", "java2"],
  },
];

function AutoDataShow() {
  const [email, setEmail] = useState();

  return (
    <div>
      <br />
      <Autocomplete
        value={email}
        onChange={(event, newValue) => {
          setEmail(newValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Name" />}
        getOptionLabel={(options) => options.name}
      />
      <br />
      <div style={{ textAlign: "left", marginBottom: "20px" }}>{`Email : ${
        email ? email.email : ""
      }`}</div>
    </div>
  );
}

export default AutoDataShow;
