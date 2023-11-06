import { useContext } from "react";
import GridItem from "./grid.jsx";
import { CountContext } from "../store/count-context";

export default function GridContainer() {
  const [count] = useContext(CountContext);
  return (
    <>
      <div className="count-text">Count: {count}</div>
      <div className="grid-container">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </>
  );
}
