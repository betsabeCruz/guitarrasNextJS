
import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

const Tienda = ({guitarras}) => {

  return (
    <div>
       <Layout
                title={'Tienda virtual'}
                description={'Tienda virtual, venta de guitarras y mas'}
                >

                  <main className='contenedor'>
                    <h1 className='heading'>Nuesta Coleccion</h1>
                    
                    <div className={styles.grid}>
                      {guitarras?.map(guitarra=>(
                        <Guitarra 
                          key={guitarra.id}
                          guitarra={guitarra.attributes}
                        />
                      ))}
                    </div>
                  </main>
        </Layout>
      <h1>Tienda virtual </h1>
    </div>
  )
}

//export async function getStaticProps(){
  //const respuesta= await fetch(`${process.env.API_URL}/guitarras?populate=image`)
 // const {data: guitarras}= await respuesta.json()

  //return {
  //  props:{
  //    guitarras
   // }
 // }
//}

export async function getServerSideProps(){
  const respuesta= await fetch(`${process.env.API_URL}/guitarras?populate=image`)
  const {data: guitarras}= await respuesta.json()

  return {
    props:{
      guitarras
    }
  }
}
export default Tienda
