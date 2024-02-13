
const UserInput = (inputs, setInputs, handleChange) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="">Initial Investment</label>
          <input
            name="initial"
            type="number"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={inputs.initial}
            required
          />
        </div>
        <div>
          <label htmlFor="">Annual Investment</label>
          <input
            name="annual"
            type="number"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={inputs.annual}
            required
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="">Expected Return</label>
          <input
            name="expected"
            type="number"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={inputs.expected}
            required
          />
        </div>
        <div>
          <label htmlFor="">Duration</label>
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
