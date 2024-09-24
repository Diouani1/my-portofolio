import React from "react";
import Navcomponent from "./navcomponent/Navcomponent";
import Maincomponent from "./maincomponent/Maincomponent";
import Footercomponent from "./footercomponent/Footercomponent";
import { Route, Routes } from "react-router-dom";
import Aboutcomponent from "./aboutcomponent/Aboutcomponent";
import Contactcomponent from "./contactcomponent/Contactcomponent";
import Projectcomponent from "./projectcomponent/Projectcomponent";

function Englishcomponent() {
  return (
    <div>
      <Navcomponent />
      <Routes>
        <Route path="/" element={<Maincomponent />} />
        <Route path="/about" element={<Aboutcomponent />} />
        <Route path="/contact" element={<Contactcomponent />} />
        <Route path="/project" element={<Projectcomponent />} />
        <Route path="*" element={<Maincomponent />} />
      </Routes>

      <Footercomponent />
    </div>
  );
}

export default Englishcomponent;
