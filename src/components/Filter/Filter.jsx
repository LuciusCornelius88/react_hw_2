const Filter = ({ onChange }) => {
  return (
    <div className="mb-3">
      <label forhtml="exampleFormControlTextarea1" className="form-label">
        Find contacts by name
      </label>
      <input type="text" name="filter" className="form-control" id="exampleFormControlInput1" onChange={onChange} />
    </div>
  );
};

export default Filter;
