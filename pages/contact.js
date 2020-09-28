import Head from 'next/head'
import Navigation from '../components/general/Navigation'
import style from '../styles/Contact.module.css'

export default function Contact() {
    return(
        <div className={style.container}>
            <Head>
                <title>Isabella Piantoni ✦ Projects</title>
                <link rel="shortcut icon" href="/images/logos/initialsLogoBlack.svg" />
            </Head>

            <div className={style.navigation}>
                <Navigation/>
            </div>

            <div className={style.leftSection}>
                <div className={style.blurbContainer}>
                    <h1 className={style.blurbTitle}>Let's talk!</h1>
                    <div className={style.blurb}>
                        You can find me on Linkedin, Github, and Instagram. You can always hit up my email at piantonibella@gmail.com, to. Or just fill this funky little form in and I'll get back to you ASAP!
                    </div>
                </div>

                <img src="/images/happyAvatar2.svg" className={style.avatarImage}></img>
            </div>

            <div className={style.rightSection}>
                <form action="https://send.pageclip.co/Dj1XTDv427IjAF0ZflWjIexTdTdGDEvo" className={style.pageclipForm} method="post">
                    <label for="name" className={style.inputLabel}>Name</label>
                    <input id={style.name} className={style.input} type="text" name="name" placeholder="Jane Doe" autoFocus required />
                    
                    <label for="email" className={style.inputLabel}>Email</label>
                    <input id={style.email} className={style.input} type="email" name="email" placeholder="janedoe@example.com" required />
                    
                    <label for="message" className={style.inputLabel}>Message</label>
                    <textarea id={style.message} className={style.input} name="message" placeholder="Let's work together!" required />

                    {/* <!-- This button will have a loading spinner. Keep the inner span for best results. --> */}
                    <button type="submit" id={style.pageclipFormSubmit} className={style.input}>
                    <span>Send</span>
                    </button>
                </form>
            </div>
        </div>
    )
}