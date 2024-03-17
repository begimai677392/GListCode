import React from "react";

import Footer from "./components/Footer/Footer";
import MyRoutes from "./routes/MyRoutes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <MyRoutes />
      <Footer />
    </>
  );
};

export default App;
