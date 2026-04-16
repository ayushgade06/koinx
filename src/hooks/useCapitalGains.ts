import { useState } from 'react';

export const useCapitalGains = () => {
  const [gains, setGains] = useState({ shortTerm: 0, longTerm: 0 });

  return { gains, setGains };
};
