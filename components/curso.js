import styles from '../styles/curso.module.css'

const Curso = ({curso}) => {
    const {content, image, title }= curso.attributes
  return (
    <section className={`${styles.curso} curso`}>
        <style jsx>{`
            .curso{
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${image?.data?.attributes?.url})
            }
        `}

        </style>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{title}</h2>
                <p className=''>{content}</p>
            </div>
        </div>
      
    </section>
  )
}

export default Curso
