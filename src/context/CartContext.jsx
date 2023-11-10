
//Importamos useState y el Context que almacenará toda la lógica del carrito de compras

import { useState, createContext } from "react";

//Creamos un nuevo contexto. El valor inicial es un objeto con la propiedad "cart", "total" y "catidadTotal"

export const CartContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0
});

//este componente alberga toda la lógica del carrito de compras: agregar prod, eliminar prod, vaciar carrito, etc.

export const CartProvider = ({children}) => {
    
    //creamos estados para los datos del CartContext
    
    const [cart, setCart] = useState ([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //Provisoriamente verificamos por consola:

    console.log(cart);

    //Agregamos funciones a este componente para manipular el carrito de compras.

    //Función agregar ítem al carrito evitando duplicados.

    const agregarProducto = (item, cantidad) => {

        const itemExistente = cart.find(prod => prod.item.id === item.id); //método find busca un objeto dentro del array que cumpla con determinada condición, en este caso, la condición que le escribimos es que: por cada prod dentro del array cart, se compare el id del item prod (prod.item.id) con el id de cada item dentro del array (item.id). Si compara y hay coincidencia, entonces guarda el valor existente en la variable itemExistente. 

        if (!itemExistente) {
            setCart( prev => [...prev, {item, cantidad}]); //esta sintaxis se utiliza para crear un nuevo array teniendo en cuenta el estado (datos guardados en el array) anterior del carrito (prev) y agregar un nuevo objeto, {item, cantidad} que representa el nuevo producto.
            setCantidadTotal  (prev => prev + cantidad); //en este caso caso, el valor que que tiene la variable cantidadTotal (prev) se actualiza teniendo en cuenta dicho valor más la cantidad nueva que se agrega al carrito (prev + cantidad)
            setTotal (prev => prev + (item.precio * cantidad)); // actualiza el monto total de los items en el estado anterior (prev), le suma el monto total de los items que se agregan (item.precio * cantidad)          
        } else {
            const cartActualizado = cart.map (prod => {
                if (prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            
            setCart(cartActualizado);
            setCantidadTotal  (prev => prev + cantidad);
            setTotal (prev => prev + (item.precio * cantidad))
        }
    }

    //Función para eliminar producto

    const eliminarProducto = (id) => {

        const itemEliminado = cart.find(prod => prod.item.id === id); //guardo en la constante itemEliminado el item que me llega por id para eliminar
        
        const cartActualizado = cart.filter(prod => prod.item.id !== id); //guardo en la constante cartActualizado el nuevo array sin el item cuyo id coincida con el item que se quiere eliminar

        setCart(cartActualizado); //seteo el array con los items actualizados

        setCantidadTotal(prev => prev - itemEliminado.cantidad); //seteo la cantidad de items actualizada en el carrito

        setTotal(prev => prev - (itemEliminado.item.precio * itemEliminado.cantidad));
        //seteo el monto total actualizado teniendo en cuenta el monto que se descuenta de item eliminado
    }

    //Función para vaciar el carrito

    const vaciarCart = () => {
        setCart ([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (

        //En el value enviamos el valor actual del carrito y las funciones a los componentes que necesiten usarlos

        //usamos children para representar a aquellos componentes que puedan necesitar el carrito y sus funciones.

        <CartContext.Provider value={{cart, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCart}}>
        {children} 
        </CartContext.Provider>
    )
}
