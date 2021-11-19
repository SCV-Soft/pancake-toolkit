import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <Svg viewBox="0 0 72 120" {...props}>
    <g transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)"
      fill="#D92538" stroke="none">
      <path d="M199 986 l3 -205 -98 -120 -99 -120 3 -143 c2 -92 8 -147 15 -155 26
      -25 331 -233 342 -233 7 0 89 54 184 121 l171 120 0 144 0 144 -117 130 -118
      130 -3 -219 c-1 -121 -5 -220 -8 -220 -4 0 -115 72 -133 86 -2 2 18 90 43 197
      25 107 46 200 46 207 0 11 -171 262 -218 320 -16 20 -17 11 -13 -184z"/>
      </g>
    </Svg>
  );
};

export default Icon;
