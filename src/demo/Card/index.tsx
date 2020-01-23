import React from 'react';
import { YCard } from '../..';

export default () => (
  <>
    <YCard>卡片一</YCard>
    <YCard marginTop>卡片二</YCard>
    <YCard marginLeft marginTop>
      卡片三
    </YCard>
  </>
);
