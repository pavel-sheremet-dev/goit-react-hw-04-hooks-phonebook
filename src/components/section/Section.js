import PropTypes from "prop-types";
import Container from "../container/Container";
import { StyledSection, Title } from "./Section.styled";

const Section = ({ title, children, titleLevel, isHidden = false }) => {
  return (
    <StyledSection>
      <Container>
        {title && (
          <Title as={titleLevel} isHidden={isHidden}>
            {title}
          </Title>
        )}

        {children}
      </Container>
    </StyledSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  titleLevel: PropTypes.string.isRequired,
  isHidden: PropTypes.bool,
};
