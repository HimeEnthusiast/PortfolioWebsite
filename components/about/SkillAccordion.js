import MuiAccordion from '@material-ui/core/Accordion';
import { withStyles } from '@material-ui/core/styles'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import MuiExpandMoreIcon from '@material-ui/icons/ExpandMore'
import style from '../../styles/SkillAccordion.module.css'



const Accordion = withStyles({
    root: {
        border: 'none',
        boxShadow: 'none',
        backgroundColor: '#ffffff',
        // borderRadius: '10px',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: '#ffffff'
    },
}))(MuiAccordionDetails);

const ExpandMoreIcon = withStyles({
    root: {
        fill: '#8B8B8B',
    }
})(MuiExpandMoreIcon);

export default function SkillAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={style.container}>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><span className={style.title}>Native Mobile Development</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <span className={style.blurb}>I can create mobile frontends for both <b>Android</b> and <b>iOS</b>. I can create layouts with <b>XML</b> for Android and code with <b>Kotlin</b>. I have experience using both <b>Interface Builder</b> and <b>SwiftUI</b> for making iOS applications as well as using the <b>Swift</b> language.</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><span className={style.title}>Frontend Web Development</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className={style.blurb}>I know to use <b>HTML</b> and <b>CSS</b> to create clean, functional websites, as well as using <b>Javascript</b> for added functionality along with the <b>Vue</b> and <b>React</b> frameworks.</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography><span className={style.title}>Backend Services</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className={style.blurb}>I can create web services with <b>Java</b> and <b>Spring Boot</b>, or <b>C#</b> and <b>ASP.NET</b> to connect front end applications to backend databases and handle application security.</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}