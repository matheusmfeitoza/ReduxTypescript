import React from "react";
import "./style.css";
import {incrementar, incrementarEspecifico, reduzir} from "./store/contador";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {fetchData} from "./store/photo";


function App() {
    const [value, setValue] = React.useState(0);
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
            <div className="input-wrapper">
                <label>Infome um valor:</label>
                <input type={"number"} value={value} onChange={({target}) => (setValue(Number(target.value)))}/>
                <button onClick={() => dispatch(incrementarEspecifico(value))}>Adicionar</button>
            </div>
            <div className="photos-container">
            {photos?.map((photo) => {
                return( <div className='photos-wrapper'>
                    <img className="photo-img" src={photo.src} alt={photo.title}/>
                    <span className="photo-title">{photo.title}</span>
                    <span className='photo-acessos'>{photo.acessos}  </span>
                </div>);
            })}
            </div>
        </div>
    );
}

export default App;
