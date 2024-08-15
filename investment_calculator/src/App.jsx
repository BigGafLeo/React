import Header from "./components/Header";
import DataColector from "./components/DataColector";
import Table from "./components/Table";

import { calculateInvestmentResults } from "./util/investment";

import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputs.duration >= 1;

  function handleInputsChange(field, newInput) {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [field]: +newInput,
      };
    });
  }

  const results = calculateInvestmentResults(inputs);

  return (
    <main>
      <Header />
      <DataColector onInputsChange={handleInputsChange} inputs={inputs} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than 0</p>
      )}
      {inputIsValid && <Table results={results} />}
    </main>
  );
}

export default App;
