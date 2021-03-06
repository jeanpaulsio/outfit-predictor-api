import React from "react";
import { number, string } from "prop-types";

Pants.propTypes = {
  height: number,
  fill: string
};

Pants.defaultProps = {
  height: 150,
  fill: "lightgray"
};

function Pants(props) {
  return (
    <div style={{ backgroundColor: props.fill }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{ height: props.height }}
      >
        <g>
          <polyline
            style={{ fill: props.fill }}
            points="368.5,233.3 377.5,53.4 256,53.4 134.6,53.4 156.9,503.9 234.9,503.9 256,171.1 277.1,503.9
    355.1,503.9 367.1,261.6   "
          />
          <path
            style={{ fill: props.fill }}
            d="M362.6,8.1H149.4c-8.2,0-14.9,6.7-14.9,14.9v5.3v5.3v19.8h14.9h213.2h14.9V33.5v-5.3V23
    C377.5,14.8,370.8,8.1,362.6,8.1z"
          />
        </g>
        <g>
          <path d="M270.5,38.9c2.1,0,4.2-0.9,5.7-2.4c1.5-1.5,2.4-3.6,2.4-5.8c0-2.1-0.9-4.2-2.4-5.7c-1.5-1.5-3.6-2.4-5.7-2.4
    c-2.1,0-4.2,0.9-5.8,2.4c-1.5,1.5-2.4,3.6-2.4,5.7c0,2.1,0.9,4.2,2.4,5.8C266.2,38,268.3,38.9,270.5,38.9z" />
          <path d="M385.6,23c0-12.7-10.3-23-23-23H247.3h-97.9c-12.7,0-23,10.3-23,23v30.4c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2l22.3,450.5
    c0.2,4.3,3.8,7.7,8.1,7.7h78.1c4.3,0,7.8-3.3,8.1-7.6l13-204.6l13,204.6c0.3,4.3,3.8,7.6,8.1,7.6h78.1c4.3,0,7.9-3.4,8.1-7.7
    l12-242.2c0.2-4.5-3.2-8.3-7.7-8.5c-4.5-0.2-8.3,3.2-8.5,7.7l-11.6,234.5h-62.7l-20.6-324.9v-22l24.6-12.6c2.7-1.4,4.4-4.2,4.4-7.2
    V61.5h11c0.6,9.9,3.5,26,15.4,39.1c10.8,12,26.4,18.8,46.4,20.3l-5.5,112c-0.2,4.5,3.2,8.3,7.7,8.5c4.5,0.2,8.3-3.2,8.5-7.7
    l6-120.3l0,0l3-59.7c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2L385.6,23L385.6,23z M369.3,23v22.2h-40.1v-29h33.4
    C366.3,16.3,369.3,19.3,369.3,23z M312.9,16.3v29h-0.5h-56.9v-29H312.9z M200.6,45.2h-1.6v-29h40.1v29H200.6z M143.1,61.5h49.2
    c-0.7,7.5-3.3,19.1-11.7,28.3c-8,8.7-19.9,13.7-35.3,14.9L143.1,61.5z M142.7,23c0-3.7,3-6.7,6.7-6.7h33.4v29h-40.1L142.7,23
    L142.7,23z M227.3,495.7h-62.7L146,120.9c20-1.5,35.7-8.3,46.6-20.2c12.1-13.2,15.2-29.4,16-39.2h38.7h0.5v82.4v26.9L227.3,495.7z
     M276.9,124.1l-12.8,6.5V64.4h12.8V124.1z M331.8,89.9c-8.4-9.2-10.7-20.9-11.3-28.4h48.4l-2.1,43.2
    C351.4,103.5,339.6,98.5,331.8,89.9z" />
        </g>
      </svg>
    </div>
  );
}

export default Pants;
