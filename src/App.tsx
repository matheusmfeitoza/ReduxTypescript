import React from "react";
import "./style.css";
import { incrementar, reduzir } from "./store/contador";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchData } from "./store/photo";
function App() {
  const dispatch = useAppDispatch();
  const valor = useAppSelector((state) => state.contador.value);
  const photos = useAppSelector((state) => state.photo.data);

  React.useEffect(() => {
    dispatch(fetchData());
  });
  return (
    <div className="mainContainer">
      <div className="value">{valor}</div>
      <div className="btnWrapper">
        <button onClick={() => dispatch(incrementar())}>+</button>
        <button disabled={valor === 0} onClick={() => dispatch(reduzir())}>
          -
        </button>
      </div>
      {photos?.map((photo) => {
        return <p>{photo.title}</p>;
      })}
    </div>
  );
}

export default App;
