
import { useState, useContext } from "react"
import {CartContext} from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";


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

        //Validación de productos en el carrito

        if (!total) {
            setError("Se produjo un error al crear la orden")
            return;
        }

        //Verificamos que los campos estén completos

        if (!nombre || !apellido || !telefono || !email || !emailConfir ) {
            setError("Por complente todos los campos solicitados");
            return; //colocamos el retorno por que si se cumple la condición de que el usuario deja algún campo del formulario vacío, entonces el código debajo no se ejecuta.
        }

        //Validación de Email

        if (email !== emailConfir) {
            setError("Los campos del email no coinciden");
            return;
        }

        //ORDEN DE COMPRA

        //Creamos un objeto con todos los datos de la orden de compra

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
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
    }    

    return (
        <div>
            <h2> Checkout </h2>
            <form onSubmit={handlerForm}>
                    {
                        cart.map(producto => (
                            <div key={producto.item.id}>
                                <p>{producto.item.nombre} x {producto.cantidad}</p>
                                <p>$ {producto.item.precio}</p>
                                <hr />
                            </div>
                        ))
                    }

                <hr />

                <div className="form-group">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Teléfono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Confirma Email </label>
                    <input type="email" value={emailConfir} onChange={(e) => setEmailConfir(e.target.value)} />
                </div>

                <div>
                    {
                        error && <p style={{color: "red"}}> {error} </p>
                    }
                </div>

                <button type="submit" onClick={()=>{
                    setError("")
                    setNombre("")
                    setApellido("")
                    setEmail("")
                    setEmailConfir("")
                }}> Finalizar Compra </button>
            </form>
            
            {
                ordenId && (
                    <strong> !Gracias por tu compra! Tu número de orden es {ordenId} </strong>
                )
            }            
        </div>
    )
}
