import PropTypes from "prop-types";
// import Container from '../container/Container';
import { SectionStyled, SectionTitle } from "./Section.styled";

const Section = ({ title, hLevel, visuallyHidden, children }) => {
  return (
    <SectionStyled hLevel={hLevel}>
      {title && (
        <SectionTitle
          as={hLevel}
          hLevel={hLevel}
          visuallyHidden={visuallyHidden}
        >
          {title}
        </SectionTitle>
      )}
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  hLevel: PropTypes.string.isRequired,
  visuallyHidden: PropTypes.bool,
};

export default Section;
