import PropTypes from 'prop-types';

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

Filter.propTypes = {
  onChange: PropTypes.elementType.isRequired,
};

export default Filter;
