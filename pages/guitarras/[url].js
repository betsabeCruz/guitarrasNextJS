import { useState } from "react"
import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from '../../components/layout'

export default function Producto({guitarra, agregarCarrito}) {
  
  const [cantidad, setCantidad]= useState(0)
  const {name, description, price, image} = guitarra[0].attributes

  const handleSubmit= e => {
    e.preventDefault()
    if(cantidad< 1){
      alert('Cantidad no valida')
      return
    }

    //construir un objeto
    const guitarraSeleccionada= {
      id: guitarra[0].id,
      image: image.data.attributes.url,
      name,
      price,
      cantidad

    }
    //pasando la informacion al context
      agregarCarrito(guitarraSeleccionada)

  }
  return (
    <Layout
      title={`Guitarra ${name}`}
    >
      <div className={styles.guitarra}>
      <Image src={image.data.attributes.url} alt={`imagen guitarra ${name}`} width={600} height={400} />

        <div className={styles.contenido}>
          <h1>{name}</h1>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>{price}</p>

          <form 
            onSubmit={handleSubmit}
            className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad: </label>
            <select  
              id="cantidad"
              onChange={e => setCantidad(+e.target.value)}>
              <option value="0">-- Seleccione --</option>
              <option value="1">1 </option>
              <option value="2">2</option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5 </option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
    </div>
    </Layout>
  )
}

//export async function getServerSideProps({query: {url}}){

 //   const respuesta= await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=image`)
 //   const {data: guitarra} = await respuesta.json()
  //  return{
   //     props:{
  //          guitarra
  //      }
  //  }
//}
export async function getStaticPaths(){
  const respuesta= await fetch(`${process.env.API_URL}/guitarras`)
  const {data}=  await respuesta.json()

  console.log(data)

  const paths= data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  return{
    paths,
    fallback: false
  }

}
export async function getStaticProps({params: {url}}){

  const respuesta= await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=image`)
  const {data: guitarra} = await respuesta.json()
  return{
      props:{
          guitarra
      }
  }
}
