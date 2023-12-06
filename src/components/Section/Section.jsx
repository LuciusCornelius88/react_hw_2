import { Title } from './Section.styled';

const Section = ({ title, className, children }) => {
  return (
    <div className={className}>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

export default Section;
