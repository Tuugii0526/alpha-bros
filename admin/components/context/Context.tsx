"use client";

import { TContextType } from "@/data/DataTypes";
import { createContext, useContext, useMemo, useState } from "react";
const IdContext = createContext<TContextType>({
  deletedId: "",
  setDeletedId: () => {},
});
export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [deletedId, setDeletedId] = useState<string>("");
  const value = useMemo(() => {
    return { deletedId, setDeletedId };
  }, [deletedId, setDeletedId]);
  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
};
export const useIdContext = () => {
  const context = useContext(IdContext);
  return context;
};
