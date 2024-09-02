import React, { createContext, useState, ReactNode } from "react";

interface AppContextType {
  blogCardData: BlogCard ;
  setBlogCardData: React.Dispatch<React.SetStateAction<BlogCard>>;
}

export const AppContext = createContext<AppContextType | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [blogCardData, setBlogCardData] = useState<BlogCard>({

  });

  return (
    <AppContext.Provider value={{ blogCardData, setBlogCardData }}>
      {children}
    </AppContext.Provider>
  );
};
