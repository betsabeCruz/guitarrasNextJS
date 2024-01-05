import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'

const Guitarra = ({guitarra}) => {
  
  const {description, image, name, price, url} = guitarra
  return (
    <div className={styles.guitarra}>
      <Image src={image.data.attributes.formats.medium.url} alt={`imagen guitarra ${name}`} width={600} height={400} />

      <div className={styles.contenido}>
        <h1>{name}</h1>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>{price}</p>
        <Link href={`/guitarras/${url}`} legacyBehavior>
        <a className={styles.enlace}>
          Ver Producto
        </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra
