export default function DataColector({ inputs, onInputsChange }) {
  const handleChange = (event) => {
    onInputsChange(event.target.id, event.target.value);
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            id="initialInvestment"
            type="number"
            required
            value={inputs.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            id="annualInvestment"
            type="number"
            required
            value={inputs.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            required
            value={inputs.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={inputs.duration}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
}
