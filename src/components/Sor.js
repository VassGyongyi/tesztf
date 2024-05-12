import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Sor({ adat }) {
  const [selectedCol, setSelectedCol] = useState(null);
  function handleColClick(value) {
    setSelectedCol(value);
  }
  return (
    <>
      <div id="kerdes">{adat.kerdes} </div>
      <Row>
        <Col
          
        >
          {" "}
          <div className="valasz" onClick={() => handleColClick(adat.v1)}
          style={{
            backgroundColor: selectedCol === adat.v1 ? (adat.v1 === adat.helyes ? "green" : "red") : ""
          }}>{adat.v1} </div>
        </Col>

        <Col
          
        >
          {" "}
          <div className="valasz" onClick={() => handleColClick(adat.v2)}
          style={{
            backgroundColor: selectedCol === adat.v2 ? (adat.v2 === adat.helyes ? "green" : "red") : ""
          }}>{adat.v2} </div>
        </Col>
      </Row>
      <Row>
        <Col
          
        >
          {" "}
          <div className="valasz" onClick={() => handleColClick(adat.v3)}
          style={{
            backgroundColor: selectedCol === adat.v3 ? (adat.v3 === adat.helyes ? "green" : "red") : ""
          }}
          >{adat.v3} </div>
        </Col>
        <Col
          
        >
          {" "}
          <div className="valasz"onClick={() => handleColClick(adat.v4)}
          style={{
            backgroundColor: selectedCol === adat.v4 ? (adat.v4 === adat.helyes ? "green" : "red") : ""
          }}>{adat.v4} </div>
        </Col>
      </Row>
    </>
  );
}
