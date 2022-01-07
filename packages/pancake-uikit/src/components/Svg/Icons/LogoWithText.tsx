import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return isDark? 
  (
    <Svg viewBox="0 0 160 49" width="160" height="49" {...props}>
      <image  width="160" height="49" id="img1" href="data:image/png;base64,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"/>
    </Svg>
  )
  :(
    <Svg viewBox="0 0 160 49" width="160" height="49" {...props}>
      <image  width="160" height="49" id="full_logo_black" href="data:image/png;base64,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"/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
