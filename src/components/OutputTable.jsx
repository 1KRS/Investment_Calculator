import { calculateInvestmentResults, formatter } from '../util/investment.jsx';

const OutputTable = ({ inputs }) => {
  const output = calculateInvestmentResults(inputs);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {output.map((year) => {
          const totalInterest =
            year.valueEndOfYear -
            year.annualInvestment * year.year -
            inputs.initialInvestment;

          const totalAmountInvested = year.valueEndOfYear - totalInterest;

          return (
            <tr key={year.year}>
              <td className='center'>{year.year}</td>
              <td className='center'>{formatter.format(year.valueEndOfYear)}</td>
              <td className='center'>{formatter.format(year.interest)}</td>
              <td className='center'>{formatter.format(totalInterest)}</td>
              <td className='center'>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default OutputTable;
