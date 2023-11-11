import "./Item.css"
import { Link } from "react-router-dom"


/* eslint-disable react/prop-types */

export const Item = ({id, nombre, precio, img, stock}) => {

    return (
        <div className="card">
            <img className="cardImg" src={img} alt={nombre} />
            <h3 className="cardName">Nombre: {nombre}</h3>
            <p className="cardPrice">Precio: $ {precio}</p>
            <p>ID: {id}</p>  
            <p>Stock: {stock}</p>          
            <Link to={`/Item/${id}`}> 
                <button className="btn btn-1"> Ver Detalles </button>
            </Link>
        </div>
    )
}
