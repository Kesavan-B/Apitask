import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Admui from "./components/Admui";
import ProducAdmin from "./components/ProducAdmin";
import CustProd from "./components/CustProd";
import LoadingContext, {
  useProgressBar,
} from "./components/context/LoadingContext";
import AutoSel from "./components/autocomplete select/AutoSel";
import AutoDataShow from "./components/autocomplete select/AutoDataShow";
import DoubleDrop from "./components/autocomplete select/DoubleDrop";
import FieldArrayFile from "./components/useFieldArray/FieldArrayFile";
import GetShowCrd from "./GetShowCrd";
import ApiCrds from "./components/ApiCrds";
import Newss from "./components/Newss";

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="/Contactlist" element={<Admui />} />
        <Route path="/ProductAdmin" element={<ProducAdmin />} />
        <Route path="/Custprod" element={<CustProd />} />
        <Route path="/getshowcrd/:productId" element={<ApiCrds />} />
      </Routes>
    </>
  );
}

export default App;
