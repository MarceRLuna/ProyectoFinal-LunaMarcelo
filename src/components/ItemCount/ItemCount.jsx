
import "./ItemCount.css"
import { useState } from "react";

export const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial);

    const incrementar = () => {

        if (contador < stock) {
            setContador (contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="btn">
            <div className="btnContador">
                <button onClick={decrementar} className="btnRestar"> - </button>
                <p className="contador"> {contador} </p>
                <button onClick={incrementar} className="btnSumar"> + </button>
            </div>            
            <button onClick={() => funcionAgregar(contador)} className="btnAgregar"> Agregar al Carrito </button>
        </div>
    )
}
