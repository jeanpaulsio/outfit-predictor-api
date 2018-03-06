import dark_gray from "../images/favicons/dark_gray.png";
import light_blue from "../images/favicons/light_blue.png";
import olive from "../images/favicons/olive.png";
import black from "../images/favicons/black.png";
import denim from "../images/favicons/denim.png";
import gray from "../images/favicons/gray.png";
import light_green from "../images/favicons/light_green.png";
import beige from "../images/favicons/beige.png";
import red from "../images/favicons/red.png";
import white from "../images/favicons/white.png";
import pink from "../images/favicons/pink.png";

export const chooseFavicon = shirtColor => {
  let favicon;

  switch (shirtColor) {
    case "#3f3f3f":
      favicon = dark_gray;
      break;
    case "#95c6f4":
      favicon = light_blue;
      break;
    case "#526d47":
      favicon = olive;
      break;
    case "#232323":
      favicon = black;
      break;
    case "#577088":
      favicon = denim;
      break;
    case "#a8a8a8":
      favicon = gray;
      break;
    case "#bacca7":
      favicon = light_green;
      break;
    case "#bca07c":
      favicon = beige;
      break;
    case "#e82929":
      favicon = red;
      break;
    case "#ffb7e1":
      favicon = pink;
      break;
    case "#f4f4f4":
    default:
      favicon = white;
      break;
  }

  return favicon;
};
