import { Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, className, children }) => {
  return (
    <div className={className}>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
