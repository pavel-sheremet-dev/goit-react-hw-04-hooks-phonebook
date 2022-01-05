import React from "react";
import { StyledContainer } from "./StyledContainer";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
