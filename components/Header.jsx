import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
    return(

        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'><a><h1>Yoshifumi Mizukawa</h1></a></Link>
            </div>
            <div className={styles.mainMenu}>
                <ul>
                    <li><Link href='/'><a>about</a></Link></li>
                    <li><Link href='/'><a>works</a></Link></li>
                    <li><Link href='/'><a>contact</a></Link></li>
                </ul>
            </div>

        </header>
      
  
    )
}

export default Header

