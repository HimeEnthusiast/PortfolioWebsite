import Head from 'next/head'
import Navigation from '../components/general/Navigation'
import style from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={style.container}>
            <Head>
                <title>Isabella Piantoni</title>
                <link rel="shortcut icon" href="/images/logos/initialsLogoBlack.svg" />
            </Head>

            <div className={style.leftSection}>
                <Navigation/>
                <div className={style.contentContainer}>
                    <div className={style.logoContainer}>
                        <img src="/images/logos/nameLogoRed.svg" className={style.nameLogo}></img>
                    </div>

                    <div className={style.blurbContainer}>
                        <h1 className={style.titleA}>Web App Developer</h1>
                        <p className={style.blurb}>
                            Building and connecting systems for your business.
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.rightSection}>
                <div className={style.topRight}>
                    <img src="/images/phoneTransparent.png" className={style.phoneImage}></img>
                </div>
                <div className={style.bottomRight}>
                    <h1 className={style.titleB}>Check Me Out</h1>
                    <div className={style.iconContainer}>
                        <a href="https://www.instagram.com/isabellapiantoni_tech/" target="_blank" className={style.iconLink}>
                            <img src="/images/icons/instagram.svg" className={style.icon}></img>
                        </a>
                        <a href="https://www.linkedin.com/in/isabella-piantoni/" target="_blank" className={style.iconLink}>
                            <img src="/images/icons/linkedin.svg" className={style.icon}></img>
                        </a>
                        <a href="https://github.com/HimeEnthusiast" target="_blank" className={style.iconLink}>
                            <img src="/images/icons/github.svg" className={style.icon}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}