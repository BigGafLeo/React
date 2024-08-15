import { formatter } from "../util/investment";

export default function Table({ results }) {
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Investment (Year)</th>
          <th>Total Investment</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((element) => {
          const totalIntrest =
            element.valueEndOfYear -
            element.annualInvestment * element.year -
            initialInvestment;

          const totalAmmonunInvested = element.valueEndOfYear - totalIntrest;

          return (
            <tr key={element.year}>
              <td>{element.year}</td>
              <td>{formatter.format(element.valueEndOfYear)}</td>
              <td>{formatter.format(element.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmmonunInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
