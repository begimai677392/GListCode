import React from "react";

import MyRoutes from "./routes/MyRoutes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
    <Navbar/>
      <MyRoutes />
      <Footer />
    </>
  );
};

export default App;
