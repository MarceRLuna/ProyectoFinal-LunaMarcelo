
import "./CartItem.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CarttItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext(CartContext);

    return (
        <div className="cartItem">
            <h4> {item.nombre} </h4>            
            {/* ver formma de agregar imagen de cada producto */}
            <p> Cantidad: {cantidad} </p>
            <p> Precio: $ {item.precio}</p>
            <button onClick={ () => eliminarProducto(item.id) }> Eliminar </button>
            <hr />
        </div>
    )
}
