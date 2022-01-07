import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle" }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="/swap?inputCurrency=0xE9E73E1aE76D17A16cC53E3e87a9a7dA78834d37&outputCurrency=0xA548a7efE00371ded670cBdD9CAdcb383506C718"
      target="_blank"
    >
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(6)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
