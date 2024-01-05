import '../styles/globals.css'
import { useState, useEffect } from 'react'
function MyApp({ Component, pageProps }) {

  const carritoLS= typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito]= useState(carritoLS)
  
  const [paginaLista, setpaginaLista]= useState(false)
  useEffect(() => {
    setpaginaLista(true)
  }, [])
   
   useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
   }, [carrito])

  const agregarCarrito = guitarra =>{
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
        //iterar sobre el arreglo en identificar el elemento duplicado
        const carritoActualizado  = carrito.map(guitarraState => {
          if(guitarraState.id === guitarra.id){
            //reescribir la cantidad
            guitarraState.cantidad += guitarra.cantidad
          }
          return guitarraState
        })
        //anadir al carrito
        setCarrito(carritoActualizado)
    } else{
      //registro nuevo agregr al carrito
      setCarrito([...carrito, guitarra])
    }
    
}  

const actualizarCantidad= guitarra =>{
  const carritoActualizado=  carrito.map(guitarraState => {
    if(guitarraState.id === guitarra.id){
      guitarraState.cantidad= guitarra.cantidad
    }
    return guitarraState
  })
  setCarrito(carritoActualizado)
} 

const eliminarProducto = id => {
  const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
  setCarrito(carritoActualizado)``
}

return paginaLista ? <Component {...pageProps} 
    carrito= {carrito}
    agregarCarrito= {agregarCarrito}
    actualizarCantidad= {actualizarCantidad}
    eliminarProducto= {eliminarProducto}
  /> : null
}

export default MyApp
