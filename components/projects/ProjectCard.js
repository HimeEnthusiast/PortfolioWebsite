import style from '../../styles/ProjectCard.module.css'
import Link from 'next/link'

export default function ProjectCard(props) {
    // alert(props.title.replace(/\s+/g, '-').toLowerCase())

    return (
        <div className={style.container}>
            <Link href={"/projects/" + props.title.replace(/\s+/g, '-').toLowerCase()}>
                <a>
                    <div className={style.image}>
                        <img className={style.image} src={props.image}></img>
                    </div>
                    <div className={style.information}>
                        <h3 className={style.title}>{props.title}</h3>
                        <h5 className={style.subTitle}>{props.shortDesc}</h5>
                    </div>
                </a>
            </Link>
        </div>
    )
}