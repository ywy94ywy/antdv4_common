import React from 'react';
import { ManageLayout } from '../..';

const { LeftCard, RightCard } = ManageLayout;

export default () => {
  return (
    <ManageLayout>
      <LeftCard title="card1">left</LeftCard>
      <RightCard title="card2">right</RightCard>
    </ManageLayout>
  );
};
