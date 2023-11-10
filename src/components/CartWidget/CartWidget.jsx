
import "./CartWidget.css"
import carrito from "../../assets/carrito.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"



export const CartWidget = () => {

    const {cantidadTotal} = useContext(CartContext);

    return (
        <div>
            <Link to="/cart">
            <img className='cart' src={carrito} alt="imagen carrito de compras"/>
            {
                cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
            }
            
            </Link>
            
        </div>
    )
}
