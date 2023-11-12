
import { useState, useEffect } from "react";
//import { getUnProducto } from "../../asyncmock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

//Importamos nuevas funciones para trabajar con la colección que creamos en Firebase
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

//Componente que muestra el detalle de un producto de manera individual
export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect(()=>{
        const nuevoDoc = doc(db, "inventario", idItem);

        getDoc(nuevoDoc)
            .then( res => {
                const data = res.data()
                const nuevoProducto = {id: res.id, ...data}
                setProducto(nuevoProducto);
            })
            .catch(error => console.log(error))

    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}
