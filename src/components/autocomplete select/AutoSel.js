import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Datas = [
  "Government Departments",
  "Corporate",
  "Academic and R&D Institutions",
  "Others",
];

function AutoSel() {
  return (
    <div className="ato-sel">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Datas}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Categories" />}
      />
    </div>
  );
}

export default AutoSel;
