import React from "react";
import "./style.css";
import { incrementar, reduzir } from "./store/contador";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchData } from "./store/photo";
function App() {
  // Função para disparar a minha thunkAction
  const dispatch = useAppDispatch();
  // Funções para obter os valores contidos no estado, que no momento são ( contador e photo)
  const valor = useAppSelector((state) => state.contador.value);
  const photos = useAppSelector((state) => state.photo.data);

  // Efeito para disparar a ação fetch e buscar os dados da API
  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
        return <p key={photo.id}>{photo.title}</p>;
      })}
    </div>
  );
}

export default App;
