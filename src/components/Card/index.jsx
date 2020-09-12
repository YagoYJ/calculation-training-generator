import React, { useEffect, useState } from "react";

import * as math from "mathjs";

import "./styles.css";

export default function Card(props) {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);
  const [userResult, setUserResult] = useState("");
  const [wrong, setWrong] = useState(0);

  function random() {
    return parseInt(Math.random() * (11 - 0) + 0);
  }

  function verification() {
    if (result === userResult) {
      setNumber1((state) => random());
      setNumber2((state) => random());
      setWrong("");
      setUserResult("");
    } else {
      setWrong("wrong");
      setUserResult("");
    }
  }

  useEffect(() => {
    setOperation(`${number1}${props.operation}${number2}`);
  }, [number1, number2, props.operation]);

  useEffect(() => {
    setResult((state) =>
      math.evaluate(`${number1}${props.operation}${number2}`)
    );
  }, [number1, number2, operation, props.operation]);

  function handleSubmit(e) {
    e.preventDefault();

    verification();
  }

  return (
    <div className="card">
      <h1>Treino de cálculo</h1>
      <h2>{operation}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Sua resposta"
          value={userResult}
          onChange={(e) => setUserResult(Number(e.target.value))}
          className={wrong}
        />
        <button type="submit" className="verifyButton">
          Verificar resposta
        </button>
      </form>
    </div>
  );
}
