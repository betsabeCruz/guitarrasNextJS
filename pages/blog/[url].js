import Layout from "../../components/layout"
import Image from "next/image"
import styles from '../../styles/blog.module.css'
import FormatearFecha from '../../utils/helpers'

const Post = ({post}) => {
    const {title, contentt, image, publishedAt }= post[0].attributes
  return (
    <Layout>
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={image.data.attributes.url} width={1000} height={600} alt={`imagen blog ${title}`}
            />
            <div className={styles.contenido}>
                <h1>{title}</h1>
                <p className={styles.fecha}>{FormatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contentt}</p>
                
            </div>
        </article>
    </Layout>
  )
}

export default Post


export async function getServerSideProps({query: {url}}){

   const respuesta= await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    const {data: post} = await respuesta.json()
    return{
       props:{
            post
        }
    }
}