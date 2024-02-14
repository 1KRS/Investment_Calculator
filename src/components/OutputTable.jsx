import { calculateInvestmentResults, formatter } from '../util/investment.jsx';

const OutputTable = ({ inputs }) => {
  const output = calculateInvestmentResults(inputs);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Value</th>
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
              <td className='td'>{year.year}</td>
              <td className='td'>{formatter.format(totalAmountInvested)}</td>
              <td className='td'>{formatter.format(year.interest)}</td>
              <td className='td'>{formatter.format(totalInterest)}</td>
              <td className='td'>{formatter.format(year.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default OutputTable;
