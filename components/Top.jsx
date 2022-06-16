import styles from './top.module.scss'
import Link from 'next/link'

const Top= () => {
    const currentPlace = 'Hakuba, Japan'

    return(
  
            <section className={styles.content}>
                <div className={styles.contentTexts}>
                    <h1>Designer<br/><span>and</span><br/>Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, non.</p>
                    <div className={styles.currentPlace}>
                    <span></span>
                    <a href='/about'>about me</a>
                    </div>
                </div>
            </section>
     


    )
}

export default Top;