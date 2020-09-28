import Head from 'next/head'
import style from '../styles/About.module.css'
import Navigation from '../components/general/Navigation'
import SkillAccordion from '../components/about/SkillAccordion'

export default function About() {
    return (
        <div className={style.container}>
            <Head>
                <title>Isabella Piantoni ✦ About Me</title>
                <link rel="shortcut icon" href="/images/logos/initialsLogoBlack.svg" />
            </Head>

            <div className={style.topSection}>
                <Navigation />

                <div className={style.topContainer}>
                    <img src="/images/winkingAvatar.svg" className={style.avatar}></img>
                    <div className={style.blurbContainer}>
                        <h1 className={style.titleA}>Hey there!</h1>
                        <p className={style.blurbA}>
                            I’m currently a student at Sheridan College, in their Software Development and Network Engineering program.  I’ll be done by December 2020!  My main jam is frontend web development, but I want to keep learning more on creating full stack and native mobile applications!
                        </p>
                    </div>
                </div>
            </div>

            <svg
                className={style.scallop}
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1441.33 85.5">
                <path
                    d="M1440,.06H0c.26,47,36.64,85.5,81.49,85.5,25.67,0,48.56-12.47,63.5-31.93,14.94,19.46,37.83,31.93,63.5,31.93,25.38,0,48.05-12.18,63-31.27,14.95,19.09,37.62,31.27,63,31.27,26.84,0,50.65-13.62,65.5-34.63,14.85,21,38.66,34.63,65.5,34.63,25.9,0,49-12.7,63.89-32.46,14.75,19.76,37.53,32.46,63.11,32.46s48.31-12.66,63-32.38C670.39,72.9,693.29,85.56,719,85.56s48.61-12.66,63.45-32.38c14.74,19.72,37.5,32.38,63,32.38,27.38,0,51.55-14.53,66.09-36.71C926.31,71,950.78,85.56,978.5,85.56c25.38,0,48-12.18,63-31.27,15,19.09,37.62,31.27,63,31.27s48-12.18,63-31.27c15,19.09,37.62,31.27,63,31.27,26,0,49.08-12.76,64-32.6,14.92,19.84,38,32.6,64,32.6,44.85,0,81.23-38,81.49-85h0V.06"
                    transform="translate(1.33 -0.06)"
                    fill="#d40136" />
                <line
                    x1="1441.33"
                    y1="85.44"
                    y2="85.44"
                    fill="none" />
            </svg>

            <div className={style.bottomContainer}>
                <div className={style.bottomLeft}>
                    <div className={style.bottomLeftContainer}>
                        <h1 className={style.titleB}>Development Skills</h1>
                        <p className={style.blurbB}>
                            I started my career in software development originally in Sheridan's Interaction Design program. From that point, I became really interested in the whole development process and decided to go full force into learning how to code for the web and mobile, which led me to transfer into the SDNE program. 
                        </p>
                    </div>
                </div>

                <div className={style.bottomRight}>
                    <SkillAccordion className={style.accordion}/>
                </div>
            </div>
        </div>
    )
}