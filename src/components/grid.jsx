import { useContext, useState } from "react";
import { CountContext } from "../store/count-context";

export default function GridItem() {
  const [black, setBlack] = useState(false);
  const [count, setCount] = useContext(CountContext);

  const handleClick = () => {
    if (black) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setBlack(!black);
  };

  if (black) {
    return (
      <div
        className="grid-item"
        onClick={handleClick}
        style={{ backgroundColor: "black" }}
      ></div>
    );
  } else {
    return <div className="grid-item" onClick={handleClick}></div>;
  }
}
