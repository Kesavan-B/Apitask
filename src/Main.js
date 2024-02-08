import React, { useEffect, useState } from "react";
import Navs from "./components/navb/Navs";
import Conten from "./components/content/Conten";
import Conta from "./components/form/Conta";
import Footer from "./components/footer/Footer";
import Backi from "./components/navb/Backi";
import { useProgressBar } from "./components/context/LoadingContext";
import Loder from "./components/context/Loder";
import DoubleDrop from "./components/autocomplete select/DoubleDrop";
import AutoDataShow from "./components/autocomplete select/AutoDataShow";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewRoute from "./NewRoute";
import Newss from "./components/Newss";

function Main(props) {
  const [data, setData] = useState();
  const { loading, setLoading } = useProgressBar(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData();
    }, 2000);
  }, [setLoading]);

  return (
    <>
      {loading ? (
        <Loder />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<NewRoute />} />
            <Route path="/newRoute" element={<Newss />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default Main;
