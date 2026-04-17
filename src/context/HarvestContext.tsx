import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Holding, CapitalGains } from '../types';

type Theme = 'light' | 'dark';

interface HarvestContextType {
  selected: Holding[];
  setSelected: React.Dispatch<React.SetStateAction<Holding[]>>;
  baseGains: CapitalGains | null;
  setBaseGains: React.Dispatch<React.SetStateAction<CapitalGains | null>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const HarvestContext = createContext<HarvestContextType | undefined>(undefined);

export const HarvestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selected, setSelected] = useState<Holding[]>([]);
  const [baseGains, setBaseGains] = useState<CapitalGains | null>(null);
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <HarvestContext.Provider value={{ selected, setSelected, baseGains, setBaseGains, theme, setTheme }}>
      {children}
    </HarvestContext.Provider>
  );
};

export const useHarvest = () => {
  const context = useContext(HarvestContext);
  if (!context) throw new Error('useHarvest must be used within HarvestProvider');
  return context;
};
