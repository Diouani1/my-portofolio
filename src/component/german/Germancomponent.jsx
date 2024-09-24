import React from "react";
import { Route, Routes } from "react-router-dom";

import Navcomponent from "./navcomponent/Navcomponent";
import Maincomponent from "./maincomponent/Maincomponent";
import Aboutcomponent from "./aboutcomponent/Aboutcomponent";
import Contactcomponent from "./contactcomponent/Contactcomponent";
import Footercomponent from "./footercomponent/Footercomponent";
import Projectcomponent from "./projectcomponent/Projectcomponent"

function Germancomponent() {
  return (
    <div>
      <Navcomponent />
      <Routes>
        <Route path="/german" element={<Maincomponent />} />
        <Route path="/about" element={<Aboutcomponent />} />
        <Route path="/contact" element={<Contactcomponent />} />
        <Route path="/project" element={<Projectcomponent />} />

        <Route path="*" element={<Maincomponent />} />
      </Routes>
      <Footercomponent />
    </div>
  );
}

export default Germancomponent;
