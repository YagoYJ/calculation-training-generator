import React from "react";
import Button from "../../components/Button";

import "./styles.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="container">
        <h1>Escolha a operação</h1>

        <Button textButton="Adição ( + )" textClass="sum" />
        <Button textButton="Subtração ( - )" textClass="subtraction" />
        <Button textButton="Multiplicação ( * )" textClass="multiplication" />
        <Button textButton="Divisão ( / )" textClass="division" />
      </div>
    </div>
  );
}
