import PropTypes from "prop-types";
import { useState, useEffect, memo } from "react";

import sprite from "../../images/sprite.svg";
import { ThemeBtn, ThemeIcon } from "./ThemeSwitcher.styled";

const ThemeSwitcher = ({ currentTheme, onBtnClick }) => {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  console.log("render");

  useEffect(() => {
    console.log("currentTheme");
  }, [currentTheme]);

  useEffect(() => {
    console.log("onBtnClick");
  }, [onBtnClick]);

  const handleClick = () => {
    hideElement().then(() => {
      onBtnClick();
      setOpacity(1);
      setScale(1);
    });
  };

  const hideElement = () => {
    const promise = new Promise((res) => {
      setOpacity(0);
      setScale(0.7);
      setTimeout(() => {
        res(true);
      }, 125);
    });
    return promise;
  };

  return (
    <ThemeBtn type="button" onClick={handleClick}>
      <ThemeIcon opacity={opacity} scale={scale}>
        <use
          href={`${sprite}#${
            currentTheme === "light" ? "icon-sun" : "icon-moon"
          }`}
        ></use>
      </ThemeIcon>
    </ThemeBtn>
  );
};

export default memo(ThemeSwitcher);

// export default class ThemeSwitcher extends Component {
//   state = {
//     opacity: 1,
//     scale: 1,
//   };

//   hideElement = () => {
//     const promise = new Promise((res) => {
//       this.setState({ opacity: 0, scale: 0.7 });
//       setTimeout(() => {
//         res(true);
//       }, 125);
//     });
//     return promise;
//   };

//   handleClick = () => {
//     this.hideElement().then(() => {
//       this.props.onBtnClick();
//       this.setState({ opacity: 1, scale: 1 });
//     });
//   };

//   render() {
//     const { opacity, scale } = this.state;
//     const { currentTheme } = this.props;
//     return (
//       <ThemeBtn type="button" onClick={this.handleClick}>
//         <ThemeIcon opacity={opacity} scale={scale}>
//           <use
//             href={`${sprite}#${
//               currentTheme === "light" ? "icon-sun" : "icon-moon"
//             }`}
//           ></use>
//         </ThemeIcon>
//       </ThemeBtn>
//     );
//   }
// }

ThemeSwitcher.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
