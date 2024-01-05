import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'

function Header() {
    const router= useRouter()
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>

            <Link href="/">
                <Image src="/img/logo.svg" width={300} height={100} alt='imagen logotipo'/>
            </Link>
            
            <nav className={styles.navegacion}>
                <Link href="/" legacyBehavior>
                    <a className={router.pathname === '/' ? styles.active : ''}>
                        Inicio
                    </a>
                </Link>

                <Link href="/nosotros" legacyBehavior>
                     <a className={router.pathname === '/nosotros' ? styles.active : ''}>
                        Nosotros
                    </a>
                </Link>
                
                <Link href="/tienda" legacyBehavior>
                        <a className={router.pathname === '/tienda' ? styles.active : ''}>
                                Tienda
                        </a>
                </Link>
                
                <Link href="/blog" legacyBehavior>
                    <a className={router.pathname === '/blog' ? styles.active : ''}>
                        Blog
                    </a>
                </Link>
                <Link href="/carrito" legacyBehavior>
                    <a>
                        <Image width={30} height={25} src="/img/carrito.png" alt='imagen carrito'/>
                    </a>
                </Link>
                
                
            </nav>
        </div>
    </header>
  )
}

export default Header
