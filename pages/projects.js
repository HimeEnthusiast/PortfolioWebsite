import Head from 'next/head'
import path from 'path'
import Navigation from '../components/general/Navigation'
import ProjectCard from '../components/projects/ProjectCard'
import style from '../styles/Projects.module.css'
import { getProjects } from '../lib/fetchProjects'

export async function getStaticProps() {
    const projectData = getProjects();

    return {
        props: {
            projectData
        }
    }
}

export default function Projects({ projectData }) {
    return (
        <div className={style.container}>
            <Head>
                <title>Isabella Piantoni ✦ Projects</title>
                <link rel="shortcut icon" href="/images/logos/initialsLogoBlack.svg" />
            </Head>

            <div className={style.navigation}>
                <Navigation />
            </div>

            <div className={style.header}>
                <h1 className={style.headerTitle}>Recent Projects</h1>
                <div className={style.headerImage}></div>
                <div className={style.headerColour}></div>
            </div>

            <div className={style.projectGrid}>
                {projectData.map(({title, iconImage, shortDesc}) => (
                    <ProjectCard key={title} title={title} image={iconImage} shortDesc={shortDesc}></ProjectCard>
                ))}
            </div>
        </div>
    )
}