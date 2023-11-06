import { createContext, useState } from "react";
// use context to handle the count number across components
export const CountContext = createContext();

export const CountProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={[count, setCount]}>
      {props.children}
    </CountContext.Provider>
  );
};
