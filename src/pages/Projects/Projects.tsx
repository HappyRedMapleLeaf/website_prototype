import './Projects.css'
import robotString from "../../resources/Robot"
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import LongButton from '../../components/LongButton/LongButton'
import FadeParagraph from '../../components/FadeParagraph'
import ChainAnimation from '../../components/ChainAnimation'
import buttonImage1 from "../../images/hrmlnew.png"
import Project from '../../components/Project/Project'

function ProjectsContent() {
    return (
        <Body>
            <FadeParagraph>
                tese are some of my projects
                <br /><br />
            </FadeParagraph>
            <ChainAnimation>
                <LongButton img={buttonImage1} color="#300070" href={`/`} text={"home"} alt="button4" />
            </ChainAnimation>
            <br />
            <br />
            <br />
            <Project image={buttonImage1} title="HRML" month="May" year="2021">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis odio pulvinar, venenatis orci in, suscipit elit. Phasellus quis finibus ante. Duis nunc lectus, pulvinar quis facilisis vel, maximus eget nibh. Mauris vulputate dolor sit amet nulla blandit, quis pulvinar nunc eleifend. Suspendisse vel bibendum lectus, a fringilla dolor. Suspendisse quam eros, convallis quis pharetra a, commodo non leo. Etiam viverra justo sit amet felis facilisis semper. Proin hendrerit cursus rutrum. Nulla molestie commodo odio in interdum. Vestibulum eu erat eu nibh ullamcorper sagittis. Vivamus pretium leo ac ante vehicula, in hendrerit lorem efficitur. Vivamus pulvinar aliquam tellus, posuere ullamcorper lacus pretium nec. Vestibulum rutrum in felis ac dictum. Mauris ut metus commodo mi vehicula lacinia eu ac odio.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis odio pulvinar, venenatis orci in, suscipit elit. Phasellus quis finibus ante. Duis nunc lectus, pulvinar quis facilisis vel, maximus eget nibh. Mauris vulputate dolor sit amet nulla blandit, quis pulvinar nunc eleifend. Suspendisse vel bibendum lectus, a fringilla dolor. Suspendisse quam eros, convallis quis pharetra a, commodo non leo. Etiam viverra justo sit amet felis facilisis semper. Proin hendrerit cursus rutrum. Nulla molestie commodo odio in interdum. Vestibulum eu erat eu nibh ullamcorper sagittis. Vivamus pretium leo ac ante vehicula, in hendrerit lorem efficitur. Vivamus pulvinar aliquam tellus, posuere ullamcorper lacus pretium nec. Vestibulum rutrum in felis ac dictum. Mauris ut metus commodo mi vehicula lacinia eu ac odio.</p>
            </Project>
            <Project image={buttonImage1} title="HRML" month="May" year="2021">
                <p>projec</p>
            </Project>
            <Project image={buttonImage1} title="HRML" month="May" year="2021">
                <p>projec</p>
            </Project>
            <Project image={buttonImage1} title="HRML" month="May" year="2021">
                <p>projec</p>
            </Project>
            <Project image={buttonImage1} title="HRML" month="May" year="2021">
                <p>projec</p>
            </Project>
            <Project image={buttonImage1} title="HRML" month="May" year="2021">
                <p>projec</p>
            </Project>
            <Project image={buttonImage1} title="HRML" month="May" year="2021">
                <p>projec</p>
            </Project>
            <Project image={buttonImage1} title="HRML" month="May" year="2021">
                <p>projec</p>
            </Project>
        </Body>
    )
}

export default function Projects() {
    return (
        <>
            <Header text="Projects" rotationAxis="y" object={robotString} debug={false} fov={Math.PI / 4} yTranslate={-0.45} zTranslate={2}/>
            <ProjectsContent />
        </>
    )
}