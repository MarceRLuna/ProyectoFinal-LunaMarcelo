
import { useState, useContext } from "react"
import {CartContext} from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css"

export const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfir, setEmailConfir] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const {cart, vaciarCart, total, cantidadTotal} = useContext(CartContext);

    //Funciones y validaciones:

    const handlerForm = (event) => {

        event.preventDefault(); //evitamos que el formulario recargue la página

        //Validación de que haya productos en el carrito, que los campos del formulario estén completos y que los mails estén correctamente escritos

        if (!total) {
            setError("Se produjo un error al crear la orden")
            return;
        }else if (!nombre || !apellido || !telefono || !email || !emailConfir) {
            setError("Complete todos los campos solicitados");
            return;            
        } else if (email !== emailConfir) {
            setError("Los campos del email no coinciden");
            return;
        }
        
        //ORDEN DE COMPRA

        //Creamos un objeto con todos los datos de la orden de compra

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,                
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //Creamos un documento con todos los datos del objeto "orden" y lo subimos a la base de datos (Firebase).

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id); //guardamos el id de la orden (que se genera de manera automática cuando generamos un documento en Firebase) en el estado ordenId para despues poder mostrarlo por pantalla
                vaciarCart(); //una vez que ejecutamos la orden de compras, vaciamos el carrito.
            })
            .catch(error => {
                console.log("Error al crear la orden", error);                
            })
        
        //limpiamos los campos

        setError("");
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEmailConfir("");    
    }    

    return (
        <div className="checkout">
            <h2> Checkout </h2>
            <form onSubmit={handlerForm}>
                    {
                        cart.map(producto => (
                            <div key={producto.item.id}>
                                <p>Nombre Producto: {producto.item.nombre} x {producto.cantidad}</p>
                                <p>Precio: $ {producto.item.precio}</p>                                
                                <hr />
                            </div>
                        ))
                    }

                <hr />

                <div className="grupoFormulario">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="grupoFormulario">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="grupoFormulario">
                    <label htmlFor=""> Teléfono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="grupoFormulario">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="grupoFormulario">
                    <label htmlFor=""> Confirma Email </label>
                    <input type="email" value={emailConfir} onChange={(e) => setEmailConfir(e.target.value)} />
                </div>

                <div className="mensajeError">
                    {
                        error && <p style={{color: "red"}}> {error} </p>
                    }
                </div>

                <button type="submit" className="btnFormulario"> Finalizar Compra </button>
            </form>
            
            <div className="compraRealizada">
                {
                    ordenId && (
                        <strong> !Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                    )                
                }
            </div>            
        </div>
    )
}
