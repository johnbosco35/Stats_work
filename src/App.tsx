/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaRunning } from "react-icons/fa";
import { TbSwimming, TbBike } from "react-icons/tb";

const App = () => {
  const [date, setDates] = useState(new Date());
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleDateDecrement = () => {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() - 1);
    // console.log(newDate);
    setDates(newDate);
  };

  const RandomChange = () => {
    setNumber(Math.floor(Math.random() * 10));
  };
  const RandomChange1 = () => {
    setNumber1(Math.floor(Math.random() * 10));
  };
  const RandomChange2 = () => {
    setNumber2(Math.floor(Math.random() * 10));
  };

  const handleDateIncrement = () => {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + 1);
    setDates(newDate);
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
  });
  const dateString = dateFormatter.format(date);
  // console.log(dateString);

  const Held = dateString.split(" ")[1];
  const Held2 = dateString.split(" ")[0];
  return (
    <Container>
      <Main>
        <Main1>
          <IoIosArrowUp
            style={{ color: "white" }}
            onClick={() => {
              handleDateIncrement();
              RandomChange();
              RandomChange1();
              RandomChange2();
            }}
          />
          <h2>{Held}</h2>
          <p>{Held2}</p>
          <IoIosArrowDown
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => {
              handleDateDecrement();
              RandomChange();
              RandomChange1();
              RandomChange2();
            }}
          />
        </Main1>
        <Main1>
          <Card>
            <FaRunning
              size={30}
              style={{ color: "#238BE6", cursor: "pointer" }}
            />
            <Holdin>
              <h4>RUNNING</h4>
              <pre>
                {number}km/<span>10km</span>
              </pre>
            </Holdin>
          </Card>
        </Main1>
        <Main1>
          <Card>
            <TbSwimming size={30} style={{ color: "#238BE6" }} />
            <Holdin>
              <h4>SWIMMING</h4>
              <pre>
                {number1}km/<span>10km</span>
              </pre>
            </Holdin>
          </Card>
        </Main1>
        <Main1 style={{ marginRight: "21px" }}>
          <Card>
            <TbBike size={30} style={{ color: "#238BE6" }} />
            <Holdin>
              <h4>BIKING</h4>
              <pre>
                {number2}km/<span>10km</span>
              </pre>
            </Holdin>
          </Card>
        </Main1>
      </Main>
    </Container>
  );
};

export default App;

const Holdin = styled.div`
  margin-top: 30px;
  margin-right: 25px;
  h4 {
    margin: 0;
  }
  pre {
    margin: 0;
    font-weight: bolder;
    font-size: 17px;
    margin-top: 5px;
  }

  span {
    color: silver;
  }
`;

const Card = styled.div`
  width: 135px;
  height: 75%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Main1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 0;
    color: white;
    font-size: 18px;
    margin-bottom: 30px;
  }

  h2 {
    margin: 0;
    color: white;
    font-size: 50px;
    margin-top: 18px;
  }
`;
const Main = styled.div`
  width: 590px;
  height: 230px;
  border-radius: 15px;
  background-color: #2785db;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
  gap: 15px;
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
