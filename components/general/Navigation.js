import Link from 'next/link'
import style from '../../styles/Navigation.module.css'

export default function Navigation() {
    return(
        <div className={style.container}>
            <Link href="/">
                <a id={style.homeLink} className={style.linkTitle}>
                    <img src="/images/logos/initialsLogo.svg" className={style.homeLogo}></img>
                </a>
            </Link>
            <Link href="/about">
                <a className={style.linkTitle}>About</a>
            </Link>
            <Link href="/projects">
                <a className={style.linkTitle}>Projects</a>
            </Link>
            <Link href="/contact">
                <a id={style.contactLink} className={style.linkTitle}>Contact</a>
            </Link>
        </div>
    )
}