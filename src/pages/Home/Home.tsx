import './Home.css'
import handString from "../../resources/Hand"
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import LongButton from '../../components/LongButton/LongButton'
import FadeParagraph from '../../components/FadeParagraph'
import ChainAnimation from '../../components/ChainAnimation'
import buttonImage1 from "../../images/hrmlnew.png"

function HomeContent () {
    return (
        <Body>
            <FadeParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis odio pulvinar, venenatis orci in, suscipit elit. Phasellus quis finibus ante. Duis nunc lectus, pulvinar quis facilisis vel, maximus eget nibh. Mauris vulputate dolor sit amet nulla blandit, quis pulvinar nunc eleifend. Suspendisse vel bibendum lectus, a fringilla dolor. Suspendisse quam eros, convallis quis pharetra a, commodo non leo. Etiam viverra justo sit amet felis facilisis semper. Proin hendrerit cursus rutrum. Nulla molestie commodo odio in interdum. Vestibulum eu erat eu nibh ullamcorper sagittis. Vivamus pretium leo ac ante vehicula, in hendrerit lorem efficitur. Vivamus pulvinar aliquam tellus, posuere ullamcorper lacus pretium nec. Vestibulum rutrum in felis ac dictum. Mauris ut metus commodo mi vehicula lacinia eu ac odio.
            </FadeParagraph>
            <FadeParagraph>
                Nunc pulvinar fringilla maximus. Morbi sollicitudin ante a nulla pretium malesuada. Morbi pellentesque cursus enim, quis consectetur dolor porttitor sed. Morbi ipsum elit, mollis in diam eu, molestie ullamcorper nulla. Nulla facilisi. Phasellus finibus orci eget magna tempor pretium. Aliquam lacinia risus eu orci facilisis lobortis. Integer purus elit, rhoncus a lacus rutrum, sagittis interdum est. Sed quis dolor molestie, dapibus felis at, suscipit diam. Suspendisse tincidunt lobortis est, sed porttitor magna scelerisque vel.
            </FadeParagraph>
            <FadeParagraph>
                Ut tincidunt, felis id auctor hendrerit, magna sem facilisis nisi, quis vestibulum lorem elit fringilla lacus. Cras orci quam, dictum vitae tortor mollis, consequat consectetur tortor. Sed et libero at lacus ullamcorper condimentum. In quis convallis sapien. Duis neque ligula, cursus vel viverra vel, auctor quis nisi. Vestibulum ultrices at neque id rutrum. Aliquam quis ex quis metus laoreet consequat. Praesent ullamcorper nisi eu lacus vulputate tincidunt. Integer elementum vestibulum velit malesuada commodo. Donec in porta mi. Nulla eu varius ex.
            </FadeParagraph>
            <FadeParagraph>
                Ut bibendum nisi nec odio blandit, id volutpat sapien tempus. Integer ac sodales justo. Integer egestas et sem sed bibendum. Nullam fermentum arcu nec ipsum molestie, pharetra tristique massa porta. Nam eu nisl orci. Proin a ipsum ut eros finibus ultrices. Suspendisse potenti.
                <br></br><br></br>
            </FadeParagraph>
            <ChainAnimation>
                <LongButton img={buttonImage1} color="#300070" href="https://www.google.com/" text={"github placeholder"} alt="button1" />
                <LongButton img={buttonImage1} color="#300060" href="https://www.youtube.com/@Devolotics/videos" text={"linkedin placceholder"} alt="button2" />
                <LongButton img={buttonImage1} color="#300050" href={`/projects`} text={"projects page placehulder"} alt="button3" />
                <LongButton img={buttonImage1} color="#300040" href="https://devolotics.github.io/" text={"credits and source code"} alt="button4" />
            </ChainAnimation>
        </Body>
    )
}

export default function Home() {
    return (
    <>
        <Header text="Welcome!" rotationAxis="z" object={handString} debug={false} fov={Math.PI / 3.5} yTranslate={-0.5} zTranslate={1} />
        <HomeContent />
    </>
    )
}