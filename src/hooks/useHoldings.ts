import { useState, useEffect } from 'react';

export const useHoldings = () => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch holdings logic
  }, []);

  return { holdings, loading };
};
