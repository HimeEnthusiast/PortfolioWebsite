import Head from 'next/head'
import path from 'path'
import Navigation from '../../components/general/Navigation'
import Slider from "react-slick";
import style from '../../styles/ProjectData.module.css'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles';
import { getAllPostIds, getProjectData } from '../../lib/fetchProjects'
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({ //Chip Styles
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
            fontFamily: 'Open Sans, sans-serif',
            backgroundColor: '#D40136',
            color: '#ffffff'
        },
    },
}));

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id);

    return {
        props: {
            projectData
        }
    }
}

function NextArrow(props) {
    const { className, style, onClick } = props;

    const Arrow = () => (
        <svg aria-hidden="true" height="22" width="22" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
    );

    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#ffffff", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)" }}
        onClick={onClick}
      >
        <Arrow />
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;

    const Arrow = () => (
        <svg aria-hidden="true" height="22" width="22" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
    )

    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#ffffff", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)" }}
        onClick={onClick}
      >
          <Arrow />
      </div>
    );
  }

  //Slideshow styles
  const StyledSlider = styled(Slider)`

        & .slick-next, .slick-prev {
            content: unset;
            width: unset;
            height: unset;
            padding: 7px;
            border-radius: 50%;
            z-index: 2;
        }
        
        & .slick-next:before, .slick-prev:before {
            content: unset;
        }

    `

export default function Post({ projectData }) {
    const classes = useStyles();
    const settings = { //Slideshow settings
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const slides = projectData.screenshots.map((image) => (
        <div key={image}>
            <div className={style.slide} 
            key={image} 
            style={{backgroundImage: `url('${image}')`}}
            ></div>
        </div>
    ));

    return (
        <div className={style.container}>
            <Head>
                <title>Isabella Piantoni ✦ {projectData.title}</title>
                <link rel="shortcut icon" href="/images/logos/initialsLogoBlack.svg" />
            </Head>

            <div className={style.navigation}>
                <Navigation />
            </div>

            <div className={style.content}>
                <div className={style.top}>
                    <div className={style.slideShow}>
                        <StyledSlider {...settings}>
                            {slides}
                        </StyledSlider>
                    </div>

                    {/* Project description */}
                    <div className={style.info}>
                        <h1 className={style.title}>{projectData.title}</h1>

                        <div className={classes.root}>
                            {projectData.tags.map((tag) => (
                                <Chip key={tag} label={tag}></Chip>
                            ))}
                            {/* {projectData.tags} */}
                        </div>

                        <div className={style.projectBlurb} dangerouslySetInnerHTML={{ __html: projectData.projectDesc }}>
                            {/* Don't put anything here */}
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <h1 className={style.title}>Lessons Learned</h1>

                    <div className={style.lessonsBlurb} dangerouslySetInnerHTML={{ __html: projectData.lessonsLearned }}>
                        {/* Don't put anything here */}
                    </div>
                </div>
            </div>
        </div>
    )

}