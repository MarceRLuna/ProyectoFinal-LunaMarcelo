
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {

  //Estado con la cantidad de productos agregados

  const [agregarItem, setAgregarItem] = useState(0);

  //useContext: de esta manera ya tenemos disponible la función agregarProducto para usarla en este componente

  const {agregarProducto} = useContext(CartContext);

  //Función manejadora de la cantitidad

  const handlerCantidad = (cantidad) => {
        setAgregarItem(cantidad);
        
        //creamos un objeto con el item y la cantidad:

        const item = {id, nombre, precio};
        
        agregarProducto(item, cantidad);
  }

  return (
    <div className="itemDetail">      
      <h3 className="h3">{nombre}</h3>
      <p className="precio">Precio: <span>$ {precio}</span></p>
      <h4 className="id">ID: {id}</h4>
      <p className="p">Descripción: {descripcion}</p>
      <img src={img} alt={nombre} className="img" />
      <div className="itemCount">
        {
          //Empleamos la lógica de montaje y desmontaje de componentes.
          agregarItem > 0 ? (<Link to="/cart"> <button className="btnTerminarCompra"> Terminar compra </button> </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerCantidad}/>)
        }
      </div>
      
      
    </div>
  );
};
