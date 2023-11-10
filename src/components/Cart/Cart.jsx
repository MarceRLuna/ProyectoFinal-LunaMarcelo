import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CarttItem } from "../CartItem/CarttItem";


export const Cart = () =>{

    const {cart, vaciarCart, total, cantidadTotal} = useContext (CartContext);

    if (cantidadTotal === 0) {
        return (
            <div className="cartVacio">
                <h2 className="cartMensaje">No hay productos en el carrito</h2>
                <Link to="/"> Ver Productos </Link>
            </div>
        )        
    }
    return(      

        <div>
            {cart.map (producto => <CarttItem key={producto.id} {...producto}/>)}
            <h3>Total: $ {total}</h3>
            <h3>Cantidad Total: {cantidadTotal}</h3>
            <button onClick={()=>vaciarCart()}>Vaciar Carrito</button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>

    )
}