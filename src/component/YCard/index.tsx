/**
 * @module YCard(antd-Card)
 * @description Card with convenient margin
 * @author Des.Yang
 */
import React from 'react';
import { Card } from 'antd';
import { CardProps } from 'antd/es/card';

export interface YCardProps extends CardProps {
  marginTop?: Boolean;
  marginLeft?: Boolean;
}
const YCard: React.FC<YCardProps> = ({
  marginTop = false,
  marginLeft = false,
  style,
  children,
  ...props
}) => {
  const margin = {
    marginTop: marginTop && 24,
    marginLeft: marginLeft && 24,
  };
  return (
    <Card style={{ ...margin, ...style }} {...props}>
      {children}
    </Card>
  );
};

export default YCard;
