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
                <Link to="/"> 
                    <button>Ver Productos</button>
                </Link>
            </div>
        )        
    }

    return(   
        <div className="cartProductos">
            {cart.map (producto => <CarttItem key={producto.id} {...producto}/>)}
            <div className="carrito">
                <h3>Total: $ {total}</h3>
                <h4>Cantidad Total: {cantidadTotal}</h4>
                <button onClick={()=>vaciarCart()}>Vaciar Carrito</button>
                <Link to="/checkout"> 
                    <button className="btnFinalizar">Finalizar Compra</button>
                </Link>
            </div>
        </div>
    )
}