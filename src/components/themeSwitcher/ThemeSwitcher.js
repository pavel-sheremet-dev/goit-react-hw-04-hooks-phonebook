import PropTypes from "prop-types";
import React, { Component } from "react";

import sprite from "../../images/sprite.svg";
import { ThemeBtn, ThemeIcon } from "./ThemeSwitcher.styled";

export default class ThemeSwitcher extends Component {
  state = {
    opacity: 1,
    scale: 1,
  };

  hideElement = () => {
    const promise = new Promise((res) => {
      this.setState({ opacity: 0, scale: 0.7 });
      setTimeout(() => {
        res(true);
      }, 125);
    });
    return promise;
  };

  handleClick = () => {
    this.hideElement().then(() => {
      this.props.onBtnClick();
      this.setState({ opacity: 1, scale: 1 });
    });
  };

  render() {
    const { opacity, scale } = this.state;
    const { currentTheme } = this.props;
    return (
      <ThemeBtn type="button" onClick={this.handleClick}>
        <ThemeIcon opacity={opacity} scale={scale}>
          <use
            href={`${sprite}#${
              currentTheme === "light" ? "icon-sun" : "icon-moon"
            }`}
          ></use>
        </ThemeIcon>
      </ThemeBtn>
    );
  }
}

// const ThemeSwitcher = ({ onBtnClick, currentTheme }) => {
//   return (
//     <ThemeBtn type="button" onClick={onBtnClick}>
//       <ThemeIcon>
//         <use
//           href={`${sprite}#${
//             currentTheme === "light" ? "icon-sun" : "icon-moon"
//           }`}
//         ></use>
//       </ThemeIcon>
//     </ThemeBtn>
//   );
// };

ThemeSwitcher.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

// export default ThemeSwitcher;
