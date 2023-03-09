import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LogModale from "../../components/logModale/LogModale";

const Skins = () => {
  const [logModaleDisplay, setLogModaleDisplay] = useState(false);

  return (
    <div className="page-container">
      <Header setLogModaleDisplay={setLogModaleDisplay} />
      <main>
        <h1>Your skins unlocked</h1>
      </main>
      <Footer />

      {logModaleDisplay ? (
        <LogModale setLogModaleDisplay={setLogModaleDisplay} />
      ) : null}
    </div>
  );
};

export default Skins;
