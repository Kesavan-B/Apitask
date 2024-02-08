import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const options = [
  {
    name: "Subash",
    email: "Subash.k@amizhth.com",
    address: "Simmakal",
    subject: [
      {
        language: "React Js",
        domain: "frontend",
      },
      {
        language: "Node Js",
        domain: "backend",
      },
    ],
  },
  {
    name: "Ajay",
    email: "deoajay.j@amizhth.com",
    address: "Aarappalayam",
    subject: [
      {
        language: "Angular",
        domain: "frontend",
      },
      {
        language: "Java",
        domain: "backend",
      },
    ],
  },
  {
    name: "Ragul",
    email: "ragul.k@amizhth.com",
    address: "Aarappalayam",
    subject: [
      {
        language: "Angular",
        domain: "frontend",
      },
      {
        language: "Java",
        domain: "backend",
      },
    ],
  },
  {
    name: "Raj",
    email: "raj.k@amizhth.com",
    address: "Aarappalayam",
    subject: [
      {
        language: "React Js",
        domain: "frontend",
      },
      {
        language: "Node Js",
        domain: "backend",
      },
    ],
  },
];
function DoubleDrop() {
  const [subject, setSubject] = useState();
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Autocomplete
        value={subject}
        onChange={(event, newValue) => {
          setSubject(newValue);
        }}
     
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Name" />
        )}
        getOptionLabel={(options) => options.name}
      />
      {subject && (
        <FormControl fullWidth sx={{ marginTop: "25px" }}>
          <InputLabel>Domain</InputLabel>
          <Select
            id="selected"
            value={selected}
            onChange={handleChange}
            label="Subjects"
            sx={{ textAlign: "left" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {subject.subject.map((subject, index) => (
              <MenuItem key={index} value={subject.domain}>
                {subject.language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default DoubleDrop;
