import React, { useState } from "react";

const Home = () => {
  const [colorBtnRed, setColorBtnRed] = useState("btn-danger");
  const [colorBtnOrange, setColorBtnOrange] = useState("btn-warning");
  const [colorBtnGreen, setColorBtnGreen] = useState("btn-success");
  const [activeBtn, setActiveBtn] = useState("");

  function changeColor(btnName) {
    if (activeBtn !== btnName) {
      setActiveBtn(btnName);
      setColorBtnRed("btn-danger");
      setColorBtnOrange("btn-warning");
      setColorBtnGreen("btn-success");

      if (btnName === "red") {
        setColorBtnRed("btn-red");
      } else if (btnName === "orange") {
        setColorBtnOrange("btn-orange");
      } else if (btnName === "green") {
        setColorBtnGreen("btn-green");
      }
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "200px", width: "100px", backgroundColor: "black" }}>
        <div id="redLight" className={"btn " + colorBtnRed} onClick={() => changeColor("red")}></div>
        <div id="orangeLight" className={"btn " + colorBtnOrange} onClick={() => changeColor("orange")}></div>
        <div id="greenLight" className={"btn " + colorBtnGreen} onClick={() => changeColor("green")}></div>
      </div>
  );
};

export default Home;
