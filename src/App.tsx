import "./App.css"
import downArrow from "./downArrow.png"
import buttonImage1 from "./hrmlnew.png"
import interrobang from "./exclamation_question.svg"
import FooterDefault from "./footer1.png"
import FooterHover from "./footer2.png"
import { useState } from 'react'
import Canvas from './Canvas'

const Home = () => {
    return (
    <>
        <HomeHead />
        <Body />
    </>
    )
}

const HomeHead = () => {
    return (
        <div className="Head">
            <Canvas />
            <div className="HeadContainer">
                <h1>
                    Hey There!
                </h1>
                <img src={downArrow} alt="Scroll Down" />
                <p>
                    scroll for more
                </p>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="Body">
            <HomeContent />
            <HomeFooter />
        </div>
    )
}



const HomeContent = () => {
    return (
        <div className="OuterContent">
            <div className="InnerContent">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis odio pulvinar, venenatis orci in, suscipit elit. Phasellus quis finibus ante. Duis nunc lectus, pulvinar quis facilisis vel, maximus eget nibh. Mauris vulputate dolor sit amet nulla blandit, quis pulvinar nunc eleifend. Suspendisse vel bibendum lectus, a fringilla dolor. Suspendisse quam eros, convallis quis pharetra a, commodo non leo. Etiam viverra justo sit amet felis facilisis semper. Proin hendrerit cursus rutrum. Nulla molestie commodo odio in interdum. Vestibulum eu erat eu nibh ullamcorper sagittis. Vivamus pretium leo ac ante vehicula, in hendrerit lorem efficitur. Vivamus pulvinar aliquam tellus, posuere ullamcorper lacus pretium nec. Vestibulum rutrum in felis ac dictum. Mauris ut metus commodo mi vehicula lacinia eu ac odio.
                    <br></br><br></br>
                    Nunc pulvinar fringilla maximus. Morbi sollicitudin ante a nulla pretium malesuada. Morbi pellentesque cursus enim, quis consectetur dolor porttitor sed. Morbi ipsum elit, mollis in diam eu, molestie ullamcorper nulla. Nulla facilisi. Phasellus finibus orci eget magna tempor pretium. Aliquam lacinia risus eu orci facilisis lobortis. Integer purus elit, rhoncus a lacus rutrum, sagittis interdum est. Sed quis dolor molestie, dapibus felis at, suscipit diam. Suspendisse tincidunt lobortis est, sed porttitor magna scelerisque vel.
                    <br></br><br></br>
                    Ut tincidunt, felis id auctor hendrerit, magna sem facilisis nisi, quis vestibulum lorem elit fringilla lacus. Cras orci quam, dictum vitae tortor mollis, consequat consectetur tortor. Sed et libero at lacus ullamcorper condimentum. In quis convallis sapien. Duis neque ligula, cursus vel viverra vel, auctor quis nisi. Vestibulum ultrices at neque id rutrum. Aliquam quis ex quis metus laoreet consequat. Praesent ullamcorper nisi eu lacus vulputate tincidunt. Integer elementum vestibulum velit malesuada commodo. Donec in porta mi. Nulla eu varius ex.
                    <br></br><br></br>
                    Ut bibendum nisi nec odio blandit, id volutpat sapien tempus. Integer ac sodales justo. Integer egestas et sem sed bibendum. Nullam fermentum arcu nec ipsum molestie, pharetra tristique massa porta. Nam eu nisl orci. Proin a ipsum ut eros finibus ultrices. Suspendisse potenti.
                    <br></br><br></br>
                </p>
                <HomeButton img={buttonImage1} color="#551111" href="https://www.google.com/" text={"Link 123abc funny"} alt="button1" />
                <HomeButton img={buttonImage1} color="#115511" href="https://www.youtube.com/@Devolotics/videos" text={"LINKLINKLINKLINK"} alt="button2" />
                <HomeButton img={buttonImage1} color="#111155" href="https://devolotics.github.io/" text={"buton thre :)"} alt="button3" />
            </div>
        </div>
    )
}

const HomeFooter = () => {
    const [hovering, setHovering] = useState(false);

    function handleMouseEnter(): void {
        setHovering(true);
    };

    function handleMouseLeave(): void {
        setHovering(false);
    };

    return (
        <>
            <img className="FooterImage1" src={interrobang} alt="Hey!" />
            <div className="FooterImageContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className="FooterImage2" src={FooterDefault} alt="Hey!" style={{display: hovering ? "none" : "block"}} />
                <img className="FooterImage2" src={FooterHover} alt="Hey!" style={{display: hovering ? "block" : "none"}} />
            </div>
        </>
    )
}

type HomeButtonProps = {
    img: string,
    color: string,
    href: string,
    text: string,
    alt: string
}

const HomeButton = ({img, color, href, text, alt}: HomeButtonProps) => {
    return (
        <a href={href} className="ButtonLink">
            <div className="HomeButton" style={{backgroundColor: color, whiteSpace: 'pre-wrap'}}>
                <img className="HomeButtonImage" src={img} alt={alt} height="50px"/>
                <div className="HomeButtonText">
                    {text}
                </div>
            </div>
        </a>
    );
}

export default Home