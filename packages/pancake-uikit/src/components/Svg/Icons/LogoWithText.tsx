import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  const stopColor = {
    stopColor0: {
      stopColor: "#F8C25E"
    },
    stopColor1: {
      stopColor: "#E34554"
    }
  }
  return (
    <Svg viewBox="0 0 260 100" {...props}>
      <g>
        <linearGradient id="SVGID_1_1" gradientUnits="userSpaceOnUse" x1="-0.988" y1="35.02" x2="73.6472" y2="35.02" gradientTransform="matrix(1 0 0 1 0 2)">
          <stop  offset="0" stopColor="#F8C25E"/>
          <stop  offset="1" stopColor="#E34554"/>
        </linearGradient>
        <path className="st0" fill="url(#SVGID_1_1)" d="M66.9,72.7c-2.8,0-9.3-5.3-3.9-14.1c4.9-7.9,2.6-13.8,2.2-14.8c0,0-0.1-0.1-0.1-0.2c0,0,0,0,0,0l0,0
          c-1.5-3.1-2.1-6.1-2.4-7.7c-0.1-0.8-0.2-1.2-0.2-1.2c0,0,0,0,0,0c0,0,0,0,0,0s-0.2,0.3-0.3,0.9c-1,3-0.5,5.8,0,7.3
          c0,0.1,1.3,4.1-2.6,6.6c-1.3,0.7-3,0.9-4.7,0.5c-3.5-1-4.3-4.9-4.3-4.9c-0.3-2.2,0.6-4.2,2.2-5.5l0,0c0.1,0,0.1-0.1,0.2-0.2
          c6-4.7,4.4-15.7,4.4-15.7s0,0,0,0.2l0-0.2C54.1,34.3,45.6,37,45.6,37c1.5-8.7-4.6-15-4.6-15c-0.9-1.2-2.1-2.3-3.5-3.2
          c-9.6-6.1-3-17.5-3-17.5s-17.4,11.3-8,22.6l0,0c1.2,1.2,2,2.9,2,4.7c0,3.8-3.2,6.8-7.1,6.8c-3.9,0-7.1-3-7.1-6.8
          c0-1.8,0.7-3.4,1.9-4.7c0.4-0.3,0.8-0.7,1.2-1c0,0-11.9,5.8-5.6,20.4c4.3,10.1-2.4,20.1-7,25.4c-1.1,1.2-2.8,3-4.2,3.9h5.3l0,0
          c7.9,0,16.9,0,21,0h2.3h4.8v0H40v0h21.2v0C61.2,72.7,66.9,72.7,66.9,72.7z"/>
          <linearGradient id="SVGID_2_1" gradientUnits="userSpaceOnUse" x1="-0.988" y1="7.395" x2="73.6472" y2="7.395" gradientTransform="matrix(1 0 0 1 0 2)">
            <stop  offset="0" stopColor="#F8C25E"/>
            <stop  offset="1" stopColor="#E34554"/>
          </linearGradient>
        <path className="st1" fill="url(#SVGID_2_1)" d="M40.9,15.9c-3.2-6.6,2.9-13.1,2.9-13.1C33,8.5,40.9,15.9,40.9,15.9z"/>
          <linearGradient id="SVGID_3_1" gradientUnits="userSpaceOnUse" x1="-0.988" y1="45.64" x2="73.6472" y2="45.64" gradientTransform="matrix(1 0 0 1 0 2)">
            <stop offset="0" style={stopColor.stopColor0}/>
            <stop offset="1" style={stopColor.stopColor1}/>
        </linearGradient>
        <path className="st2" fill="url(#SVGID_3_1)" d="M1.2,37.7c0,0,5.5,7.9,6.9,19.9C8.1,57.6,12.4,45.7,1.2,37.7z"/>
          <linearGradient id="SVGID_4_1" gradientUnits="userSpaceOnUse" x1="-0.988" y1="17.85" x2="73.6472" y2="17.85" gradientTransform="matrix(1 0 0 1 0 2)">
            <stop offset="0" style={stopColor.stopColor0}/>
            <stop offset="1" style={stopColor.stopColor1}/>
          </linearGradient>
        <path className="st3" fill="url(#SVGID_4_1)" d="M48.8,27.9c0.3-0.3,3-2.7,2.6-4.8c0,0,1.5,2.7-2.8,7c0,0,7.8-3.9,3.7-10.7c0,0-1.9-2.7-3.7-3.7
          c-1.8-0.9-2.6-3.4-2.2-6.3c0,0-2.5,4.8,1,10.9C50.6,26,49,27.7,48.8,27.9z"/>
      </g>
      <path className="st4" fill="#FFFFFF" d="M33.9,34.6"/>
      <path className="st4" fill="#FFFFFF" d="M33.9,34.6"/>
      <polygon className="st4" fill="#FFFFFF" points="9.1,72.7 9.1,72.7 60,72.7 54.7,63.5 "/>
      <polygon className="st4" fill="#FFFFFF" points="18.8,55.9 11.8,68 52.5,59.7 47,50.2 "/>
      <g>
        <polygon className="st4" fill="#FFFFFF" points="38.9,36.2 34.6,28.6 29.1,38 	"/>
        <polygon className="st4" fill="#FFFFFF" points="26.6,42.4 21.5,51.2 44.9,46.5 40.8,39.4 	"/>
      </g>
      <polygon className="st5" opacity="0.4" enableBackground="new" points="11.8,68 18.2,70.9 54.7,63.5 47.7,60.7 "/>
      <polygon className="st5" opacity="0.4" enableBackground="new" points="47,50.2 42.1,47.1 21.5,51.2 26.2,54.4 "/>
      <polygon className="st5" opacity="0.4" enableBackground="new" points="40.8,39.4 37.7,36.4 29.1,38 31.9,41.3 "/>
      <g className="st6" opacity="0.5">
        <polygon className="st5" opacity="0.4" enableBackground="new" points="49.4,64.6 41.9,66.1 43.2,72.7 52.8,72.7 	"/>
        <polygon className="st5" opacity="0.4" enableBackground="new" points="43.7,50.9 39,51.8 41,62.1 47.7,60.7 	"/>
        <polygon className="st5" opacity="0.4" enableBackground="new" points="34.6,28.6 36.1,36.7 37.7,36.4 	"/>
        <polygon className="st5" opacity="0.4" enableBackground="new" points="39.8,47.6 42.1,47.1 39,39.8 36.8,40.3 38.3,47.9 	"/>
      </g>
      <path className="st4" fill="#FFFFFF" d="M33.9,34.6"/>
      <path className="st4" fill="#FFFFFF" d="M33.9,34.6"/>
      <polygon className="st4" fill="#FFFFFF" points="9.1,72.7 9.1,72.7 60,72.7 54.7,63.5 "/>
      <polygon className="st4" fill="#FFFFFF" points="18.8,55.9 11.8,68 52.5,59.7 47,50.2 "/>
      <g>
        <polygon className="st4" fill="#FFFFFF" points="38.9,36.2 34.6,28.6 29.1,38 	"/>
        <polygon className="st4" fill="#FFFFFF" points="26.6,42.4 21.5,51.2 44.9,46.5 40.8,39.4 	"/>
      </g>
      <polygon className="st5" opacity="0.4" enableBackground="new" points="11.8,68 18.2,70.9 54.7,63.5 47.7,60.7 "/>
      <polygon className="st5" opacity="0.4" enableBackground="new" points="47,50.2 42.1,47.1 21.5,51.2 26.2,54.4 "/>
      <polygon className="st5" opacity="0.4" enableBackground="new" points="40.8,39.4 37.7,36.4 29.1,38 31.9,41.3 "/>
      <g className="st6" opacity="0.5">
        <polygon className="st5" opacity="0.4" enableBackground="new" points="49.4,64.6 41.9,66.1 43.2,72.7 52.8,72.7 	"/>
        <polygon className="st5" opacity="0.4" enableBackground="new" points="43.7,50.9 39,51.8 41,62.1 47.7,60.7 	"/>
        <polygon className="st5" opacity="0.4" enableBackground="new" points="34.6,28.6 36.1,36.7 37.7,36.4 	"/>
        <polygon className="st5" opacity="0.4" enableBackground="new" points="39.8,47.6 42.1,47.1 39,39.8 36.8,40.3 38.3,47.9 	"/>
      </g>
      <g>
        <linearGradient id="SVGID_5_1" gradientUnits="userSpaceOnUse" x1="73.8765" y1="52.975" x2="173.0699" y2="52.975" gradientTransform="matrix(1 0 0 1 0 2)">
          <stop offset="0" style={stopColor.stopColor0}/>
          <stop offset="1" style={stopColor.stopColor1}/>
        </linearGradient>
      <path className="st7" fill="url(#SVGID_5_1)" d="M98.8,52.8c-1.7-0.6-4.1-1.3-6.9-1.9c-3.4-0.7-4.8-1.4-5.5-1.8c-0.7-0.5-1.1-1.1-1.1-2.1
        c0-1.1,0.5-1.9,1.4-2.6c1.1-0.8,2.7-1.1,4.8-1.1c5.7,0,6.6,2.7,6.8,4.8l0.1,1h6.4l-0.1-1.2c-0.2-3.4-1.5-6.1-4-8
        c-2.4-1.8-5.6-2.8-9.5-2.8c-3.7,0-6.7,0.9-9,2.8c-2.3,1.9-3.6,4.3-3.6,7.3c0,2.6,0.9,4.8,2.8,6.4c1.8,1.5,4.5,2.7,8.4,3.5
        c3.6,0.8,6.1,1.5,7.5,2.3c1.1,0.6,1.6,1.5,1.6,2.8c0,1.3-0.5,2.3-1.7,3c-1.3,0.8-3,1.3-5.1,1.3c-2.3,0-4.2-0.5-5.8-1.5
        c-1.5-0.9-2.3-2.4-2.5-4.4L84,59.6h-6.3l0.1,1.2c0.1,3.5,1.4,6.4,3.9,8.6c2.4,2.2,6.1,3.3,10.9,3.3c3.8,0,6.9-1,9.3-3
        c2.5-2.1,3.7-4.7,3.7-7.8c0-2.5-0.7-4.5-2.1-6C102.3,54.5,100.7,53.5,98.8,52.8z"/>
    
      <linearGradient id="SVGID_6_1" gradientUnits="userSpaceOnUse" x1="73.8765" y1="52.98" x2="173.0699" y2="52.98" gradientTransform="matrix(1 0 0 1 0 2)">
        <stop offset="0" style={stopColor.stopColor0}/>
        <stop offset="1" style={stopColor.stopColor1}/>
      </linearGradient>
      <path className="st8" fill="url(#SVGID_6_1)" d="M124,43.1c2.1,0,3.9,0.5,5.3,1.6c1.3,1,2.1,2.3,2.2,4l0.1,1h6.7l-0.1-1.3c-0.3-3.4-1.9-6.2-4.6-8.2
        c-2.6-2-5.9-3.1-9.6-3.1c-4.9,0-8.8,1.6-11.7,4.8c-2.9,3.2-4.4,7.5-4.4,12.9c0,5.4,1.5,9.7,4.4,12.9c2.9,3.2,6.9,4.8,11.7,4.8
        c3.9,0,7.1-1,9.7-3.1c2.6-2.1,4.1-5,4.5-8.7l0.1-1.3h-6.7l-0.1,1.1c-0.2,2-0.9,3.4-2.2,4.5c-1.3,1.1-3.1,1.6-5.4,1.6
        c-2.9,0-5.1-1-6.8-3c-1.7-2-2.6-5-2.6-8.9c0-3.9,0.9-6.8,2.6-8.9C118.8,44.1,121,43.1,124,43.1z"/>
      
      <linearGradient id="SVGID_7_1" gradientUnits="userSpaceOnUse" x1="73.8765" y1="52.97" x2="173.0699" y2="52.97" gradientTransform="matrix(1 0 0 1 0 2)">
        <stop offset="0" style={stopColor.stopColor0}/>
        <stop offset="1" style={stopColor.stopColor1}/>
      </linearGradient>
      <polygon className="st9" fill="url(#SVGID_7_1)" points="163.6,37.8 154.2,63.1 144.9,37.8 137.9,37.8 151.2,72.2 157.2,72.2 170.6,37.8 	"/>
    </g>
    <path className="st10" fill={textColor} d="M188.7,57.6c-1.3-0.5-3-0.9-5.1-1.4c-2.4-0.5-3.4-1-3.9-1.3c-0.4-0.3-0.6-0.6-0.6-1.2c0-0.7,0.3-1.2,0.9-1.6
      c0.7-0.5,1.9-0.8,3.3-0.8c3.8,0,4.5,1.7,4.6,3.2l0.1,1h5.2l-0.1-1.2c-0.1-2.6-1.1-4.6-3-6c-1.8-1.4-4.2-2-7-2c-2.8,0-5,0.7-6.7,2.1
      c-1.8,1.4-2.7,3.3-2.7,5.5c0,2,0.7,3.6,2.1,4.9c1.3,1.1,3.4,2,6.2,2.6c2.6,0.6,4.3,1.1,5.3,1.6c0.7,0.4,1,0.9,1,1.8
      c0,0.8-0.3,1.4-1.1,1.9c-0.9,0.6-2,0.9-3.5,0.9c-1.6,0-2.9-0.3-4-1.1c-1-0.6-1.5-1.6-1.6-3l-0.1-1.1H173l0.1,1.2
      c0.1,2.6,1.1,4.8,2.9,6.5c1.8,1.7,4.6,2.5,8.1,2.5c2.8,0,5.2-0.8,6.9-2.2c1.9-1.6,2.8-3.5,2.8-5.9c0-1.9-0.6-3.4-1.6-4.5
      C191.2,58.9,190,58.1,188.7,57.6z"/>
    <path className="st10" fill={textColor} d="M207,46.3c-3.6,0-6.6,1.2-8.9,3.7c-2.3,2.4-3.4,5.6-3.4,9.5c0,3.9,1.2,7.1,3.4,9.5c2.3,2.4,5.3,3.7,8.9,3.7
      c3.6,0,6.5-1.2,8.8-3.7c2.3-2.4,3.4-5.6,3.4-9.5s-1.1-7.1-3.4-9.5C213.6,47.5,210.6,46.3,207,46.3z M213.8,59.4
      c0,2.7-0.6,4.7-1.9,6.1c-1.3,1.4-2.9,2.1-4.9,2.1c-2,0-3.6-0.7-4.8-2.1c-1.3-1.4-1.9-3.5-1.9-6.1c0-2.6,0.7-4.7,1.9-6.1
      c1.3-1.4,2.9-2.1,4.9-2.1c2,0,3.6,0.7,4.8,2.1C213.1,54.7,213.8,56.8,213.8,59.4z"/>
    <polygon className="st10" fill={textColor} points="239,46.7 239,46.7 221.1,46.7 221.1,72.2 226.4,72.2 226.4,61.7 237.4,61.7 237.4,56.6 226.4,56.6 
      226.4,51.7 239,51.7 239,51.7 246.6,51.7 246.6,72.2 252,72.2 252,51.7 259.7,51.7 259.7,46.7 "/>
  </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
