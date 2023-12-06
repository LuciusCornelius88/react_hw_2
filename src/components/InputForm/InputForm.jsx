import { Form, Title, InputContainer, InputField, ButtonsContainer, FormButton } from './InputForm.styled';
import PropTypes from 'prop-types';

const InputForm = ({ onSubmit, onReset, onChange }) => {
  return (
    <Form className="input-form" onSubmit={onSubmit} onReset={onReset}>
      <Title className="main-title">Phonebook</Title>
      <InputContainer className="input-container">
        <div className="mb-3">
          <label forhtml="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <InputField
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
          <InputField
            type="tel"
            name="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+38(099)999-99-99"
            autoComplete="off"
            onChange={onChange}
          />
        </div>
        <ButtonsContainer className="form-buttons">
          <FormButton type="submit">Add contact</FormButton>
          <FormButton type="reset">Reset input</FormButton>
        </ButtonsContainer>
      </InputContainer>
    </Form>
  );
};

InputForm.propTypes = {
  onSubmit: PropTypes.elementType.isRequired,
  onReset: PropTypes.elementType.isRequired,
  onChange: PropTypes.elementType.isRequired,
};

export default InputForm;
