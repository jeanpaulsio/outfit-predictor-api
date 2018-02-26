import React from "react";
import { string } from "prop-types";

ColorChip.propTypes = {
  backgroundColor: string
};

export default function ColorChip(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        width: 50,
        height: 50
      }}
    />
  );
}
