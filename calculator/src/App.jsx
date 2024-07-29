import Container from "./components/Container";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDeleteLeft } from "react-icons/fa6";
import Heading from "./components/Heading";
import { useState } from "react";
import { AiFillCalculator } from "react-icons/ai";
import "./App.css";
function App() {
  const [value, setValue] = useState("");
  const buttonData = [
    "CE",
    "%",
    "/",
    <AiFillCalculator />,
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    <FaDeleteLeft />,
    "=",
  ];

  const handleBtnClick = (data) => {
    if (data == "CE") {
      setValue("");
    } else if (data == "=") {
      if (value.search("^")) {
        console.log("function");
      } else {
        let ans = eval(value);
        setValue(ans);
      }
    } else if (data == "clear") {
      let ans = value.slice(0, -1);
      setValue(ans);
    } else if (data == "nochange") {
      setValue(value);
    } else {
      setValue(value + data);
    }
  };

  return (
    <>
      <Container>
        <Heading></Heading>
        <Display value={value}></Display>
        <Buttons list={buttonData} handleBtnClick={handleBtnClick}></Buttons>
      </Container>
    </>
  );
}

export default App;
