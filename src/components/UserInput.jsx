const UserInput = ({ inputs, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            name="initialInvestment"
            type="number"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={inputs.initialInvestment}
            required
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            name="annualInvestment"
            type="number"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={inputs.annualInvestment}
            required
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            name="expectedReturn"
            type="number"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={inputs.expectedReturn}
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            name="duration"
            type="number"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={inputs.duration}
            required
          />
        </div>
      </div>
    </section>
  );
};
export default UserInput;
