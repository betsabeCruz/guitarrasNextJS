import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/blog.module.css'
import FormatearFecha from '../utils/helpers'

export default function Post({post}) {
    const {contentt, image, title, url, createdAt} = post
  return (
    <article>
      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${title}`}
      />
      <div className={styles.contenido}>
          <h1>{title}</h1>
          <p className={styles.fecha}>{FormatearFecha(createdAt)}</p>
          <p className={styles.resumen}>{contentt}</p>
          <Link href={`/blog/${url}`} legacyBehavior>
            <a className={styles.enlace}>
              Leer Post
            </a>
          </Link>
          
      </div>
    </article>
  )
}



