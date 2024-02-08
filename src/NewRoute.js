import React from "react";
import Navs from "./components/navb/Navs";
import DoubleDrop from "./components/autocomplete select/DoubleDrop";
import Backi from "./components/navb/Backi";
import AutoDataShow from "./components/autocomplete select/AutoDataShow";
import Conten from "./components/content/Conten";
import Conta from "./components/form/Conta";
import Footer from "./components/footer/Footer";

function NewRoute() {

  return (
    <div>
      <Navs />
      <DoubleDrop />
      <Backi />
      <AutoDataShow />
      <Conten />
      <Conta />
      <Footer />
    </div>
  );
}

export default NewRoute;
