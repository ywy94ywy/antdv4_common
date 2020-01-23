import React, { useState } from 'react';
import { Button } from 'antd';

const useUnfold = (min = 50, max = 150, foldStr = '展开', unfoldStr = '收起', delay = 0.3) => {
  const [unfold, setUnfold] = useState<Boolean>(false);

  const height = unfold ? `${max}px` : `${min}px`;

  const style: React.CSSProperties = {
    height,
    overflow: 'hidden',
    transition: `all ${delay}s`,
  };

  const Trigger: React.FC<{}> = () => (
    <Button
      type="link"
      onClick={() => {
        setUnfold(!unfold);
      }}
    >
      {unfold ? '>' + unfoldStr : '<' + foldStr}
    </Button>
  );

  const array: [Boolean, React.FC, React.CSSProperties] = [unfold, Trigger, style];
  return array;
};

export default useUnfold;
