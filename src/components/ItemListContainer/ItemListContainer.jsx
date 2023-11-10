/* eslint-disable react/prop-types */

import "./ItemListContainer.css"
import { useState, useEffect } from "react"
//import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

//importamos nuevas funciones para trabajar con la colección que creamos en Firebase

import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

export const ItemListContainer = () => {

    //creo un estado que me va almacenar el array de mis productos

    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect (()=>{
        const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection (db, "inventario");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map( doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error));
    },[idCategoria])

    // useEffect(() => {
    //     const funtion = idCategoria ? getProductosPorCategoria : getProductos;

    //     funtion(idCategoria)
    //         .then(res => setProductos(res))

    // }, [idCategoria])  

    return (

        <div className="catalogoContenedor">
            <h2>Lista de productos</h2>
            <hr />
            <div className="itemList">
                <ItemList productos={productos} />
            </div>
        </div>
    )
}
