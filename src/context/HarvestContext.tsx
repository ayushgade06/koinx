import React, { createContext, useContext, useState } from 'react';
import type { Holding, CapitalGains } from '../types';


interface HarvestContextType {
  selected: Holding[];
  setSelected: React.Dispatch<React.SetStateAction<Holding[]>>;
  baseGains: CapitalGains | null;
  setBaseGains: React.Dispatch<React.SetStateAction<CapitalGains | null>>;
}

const HarvestContext = createContext<HarvestContextType | undefined>(undefined);

export const HarvestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selected, setSelected] = useState<Holding[]>([]);
  const [baseGains, setBaseGains] = useState<CapitalGains | null>(null);

  return (
    <HarvestContext.Provider value={{ selected, setSelected, baseGains, setBaseGains }}>
      {children}
    </HarvestContext.Provider>
  );
};

export const useHarvest = () => {
  const context = useContext(HarvestContext);
  if (!context) throw new Error('useHarvest must be used within HarvestProvider');
  return context;
};
