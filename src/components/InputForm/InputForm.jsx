const InputForm = ({ onSubmit, onReset, onChange }) => {
  return (
    <form className="input-form" onSubmit={onSubmit} onReset={onReset}>
      <h1 className="main-title">Phonebook</h1>
      <div className="mb-3">
        <label forhtml="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Your name"
          autoComplete="off"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label forhtml="exampleFormControlTextarea1" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          name="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="+38(099)999-99-99"
          autoComplete="off"
          onChange={onChange}
        />
      </div>
      <button type="submit">Add contact</button>
      <button type="reset">Reset input</button>
    </form>
  );
};

export default InputForm;
