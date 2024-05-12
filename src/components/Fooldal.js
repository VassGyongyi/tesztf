import useAdatContext from "../contexts/AdatContext";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sor from "./Sor";

export default function Fooldal() {
  const { tesztLista } = useAdatContext();
  const { kategoria } = useAdatContext();
  const [kat, setKat] = useState("");


  

  return (
    <>
      <Container>
        <Row md={3}>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setKat(e.target.value)}
            >
              <option>Válassz kategóriát</option>
              {kategoria.map((element, index) => (
                <option key={index} value={element.kategorianev}>
                  {element.kategorianev}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row id="sor">
          <Col id="oszlop" >
            {tesztLista
              .filter((element) => element.kategorianev == kat)
              .map((element, index) => {
                
                return (
                  <Sor
                    adat={element}
                    key={index}
                  
                  />
                );
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
}
