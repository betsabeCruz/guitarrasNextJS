import Image from 'next/image'
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

function Nosotros() {
  return (
    <Layout
    title={'Nosotros'}
    description={'Blog de musica, venta de guitarras y mas'}
    >
      <main className="contenedor">
            <h1 className="heading">Nosotros</h1>

            <div className={styles.contenido}>
                <Image src='/img/nosotros.jpg' width={1000} height={800} alt='imagen sobre nosotros'/>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim. In dictum non consectetur a erat nam. Magna etiam tempor orci eu. Accumsan sit amet nulla facilisi morbi tempus iaculis. Tellus id interdum velit laoreet id donec. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Est ullamcorper eget nulla facilisi etiam. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ac odio tempor orci dapibus ultrices. Elit at imperdiet dui accumsan sit. Metus vulputate eu scelerisque felis imperdiet.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim. In dictum non consectetur a erat nam. Magna etiam tempor orci eu. Accumsan sit amet nulla facilisi morbi tempus iaculis. Tellus id interdum velit laoreet id donec. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Est ullamcorper eget nulla facilisi etiam. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Ac odio tempor orci dapibus ultrices. Elit at imperdiet dui accumsan sit. Metus vulputate eu scelerisque felis imperdiet.
                    </p>

                </div>

            </div>
      </main>
    </Layout>
  )
}

export default Nosotros
